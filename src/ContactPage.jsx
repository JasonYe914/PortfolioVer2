import './ContactPage.css';
import {useState} from 'react';

//TODO: Set up Contact page + backend
export default function ContactPage(){
    const [state, setState] = useState('Send');
    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Message, setMessage] = useState('');

    //TODO: Implement Timer for sending, after 3s setState("sent")
    const HandleClick = () => {
        const timer = setTimeout(() => {
            setState('Sent!');
        }, 3000)

        setState('Sending...');
        return () => clearTimeout(timer);
    }

    return(
        <div className='ContactPage-container'>
            <div className="Name-email">
                <input
                    type="text"
                    placeholder="Name"
                    value={Name}
                    className="Name"
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Email"
                    value={Email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="Email"
                />
            </div>
            <div className="message">
                <input
                    type="text"
                    value={Message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="Message"
                />
            </div>
            <div className="send-btn">
                <button onClick={HandleClick}>{state}</button>
            </div>
        </div>
    )
}