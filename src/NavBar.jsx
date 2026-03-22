import './NavBar.css';
import {useNavigate} from "react-router-dom";

//TODO: Implement the mapping to the different pages
export default function NavBar(){
    let navigate = useNavigate();
    return(
        <div className="navbar">
            <div className ="nav-container">
                <div className="home">
                    <img className="bird-img" alt='s' src="bird2.png" onClick={() => navigate('/', {replace:true})}></img>
                </div>
                <div className="nav-buttons">
                    <button onClick={() => navigate('/roadmap', {replace : true})}>My Journey</button>
                    <button onClick={() => navigate('/contact-page', {replace: true})}>Contact Me</button>
                </div>
            </div>
        </div>
    )
}