import './ContactPage.css';
import {useState} from 'react';

//TODO: Set up Contact page + backend
export default function ContactPage(){
    const [state, setState] = useState('Send')

    const handleClick = () => {
        setState("Sending...")
    }

    return(
        <div className='ContactPage-container'>
            <div className="Name-email">
                <input

                />
            </div>
            <div className="message">

            </div>
            <div className="send-btn">
                <button onClick={handleClick}>{state}</button>
            </div>
        </div>
    )
}