import express from "express";
import cors from "cors";
import emailjs from '@emailjs/nodejs';
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

//testing backend set up
app.get("/", (req, res) => {
    res.json({ message: "Hello from backend 🚀" });
});

const requestCounts = new Map();

const rateLimiter = (req, res, next) => {
    const ip = req.ip;
    const now = Date.now();
    const windowMs = 15 * 60 * 1000;
    const max = 5;

    if (!requestCounts.has(ip)){
        requestCounts.set(ip, {count : 1, startTime: now});
        return next();
    }
    const data = requestCounts.get(ip);
    if (now - data.startTime > windowMs){
        requestCounts.set(ip, {count: 1, startTime: now});
        return next();
    }
    if (data.count >= max){
        return res.status(429).json({error: "Too many requests!"});
    }
    data.count++;
    next();
}

app.post("/api/contact", rateLimiter, async (req, res) => {
    const {name, email, message} = req.body;
    if(name.trim().length === 0 || email.trim().length === 0 || message.trim().length === 0){
        return res.status(500).json({error: "All fields needed"});
    }

    const templateParams ={
        user_name: name,
        user_email: email,
        message: message
    };

    try{
        await emailjs.send(
            process.env.SERVICE_ID, process.env.TEMPLATE_ID, templateParams,
            {publicKey: process.env.PUBLIC_KEY,
                privateKey: process.env.PRIVATE_KEY},
        ).then((res) => {
            console.log("Success!", res.status, res.text);
        })
    }catch(e){
        res.status(500).json({e: "Error sending messgae"});
        console.log(e);
    }
})
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});