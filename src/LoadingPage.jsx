import './LoadingPage.css';

export default function LoadingPage(){
    return(
        <div className="loading-container">
            <div className="loading-content">
                <div className="loading-animation">
                    <h1 className="page-title">My Portfolio</h1>
                </div>
                <div className="loader">
                    <div className="loader-bar"></div>
                </div>
                <div className="loading-background">
                    <div className="circle circle1"></div>
                    <div className="circle circle2"></div>
                    <div className="circle circle3"></div>
                    <div className="circle circle4"></div>
                </div>
            </div>
        </div>
    )
}