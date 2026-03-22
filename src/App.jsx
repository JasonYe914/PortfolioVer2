import LoadingPage from './LoadingPage';
import './App.css';
import NavBar from './NavBar';
import RoadMap from './RoadMap';
import {useState, useEffect} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ContactPage from './ContactPage';

function LandingPage() {
    const [text, setText] = useState("About me section text");

    //TODO: Write out the texts/sentences for each section
    const handleClickAboutMe = () => {
        setText("Hi, " +
            "I’m Jason — a Mechanical Engineering student passionate about building software and products that solves real problems. " +
            "I’m especially interested in areas where technology meets healthcare and design, and I enjoy working on projects " +
            "that combine analytical thinking with practical engineering.\n" +
            "\n" +
            "I like tackling challenging problems, writing clean and efficient code, " +
            "and constantly learning new tools and technologies. " +
            "When I’m not coding, I’m usually messing around with cool projects, " +
            "going to the gym, or playing games like cs:go.")
    }

    const handleClickEducation = () => {
        setText("Education section text")
    }

    const handleClickTech = () => {
        setText("Technical skills section text")
    }

    const handleClickRecentProjects = () => {
        setText("Recent Project section text")
    }

    const handleClickFutureProject = () => {
        setText("Future Project section text")
    }

    return(
        <div>
            <div className="home-container">
                <div className="section-container">
                    <div className="information-columns">
                        <button onClick ={handleClickAboutMe}>About me</button>
                        <button onClick={handleClickEducation}>Education</button>
                        <button onClick={handleClickTech}>Technical Skills</button>
                        <button onClick={handleClickRecentProjects}>Recent Projects</button>
                        <button onClick={handleClickFutureProject}>Future projects</button>
                    </div>
                    <div className="line"></div>
                    <div className="text-box">
                        <p>{text}</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default function App(){
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        try{
            const timer = setTimeout(() => {
                setLoading(false);
            }, 3000);

            return () => clearTimeout(timer);
        }catch (e) {
            console.log(e);
        }

    }, []);

    if(loading){
        return<LoadingPage />
    }

    return(
        <div>
            <NavBar/>
            <Routes>
                <Route path="/" element={<LandingPage/>} />
                <Route path="/Roadmap" element={<RoadMap/>}/>
                <Route path="/contact-page" element={<ContactPage/>} />
            </Routes>
        </div>
    )

}
