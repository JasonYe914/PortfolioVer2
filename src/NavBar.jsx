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
                <div className="nav-links">
                    <p onClick={() => navigate('/roadmap', {replace : true})} className="text">My Journey</p>
                    <p onClick={() => navigate('/contact-page', {replace: true})} className='text'>Contact Me</p>
                </div>
            </div>
        </div>
    )
}