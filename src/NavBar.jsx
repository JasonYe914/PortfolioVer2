import './NavBar.css';
import {useNavigate} from "react-router-dom";

export default function NavBar(){
    let navigate = useNavigate();
    return(
        <div className="navbar">
            <div className ="nav-container">
                <div className="home">
                    <img className="bird-img" alt='s' src="../public/bird2.png" onClick={() => navigate('/', {replace:true})}></img>
                </div>
                <div className="nav-links">
                    <p onClick={() => navigate('/roadmap', {replace : true})} className="text">My Journey</p>
                </div>
            </div>
        </div>
    )
}