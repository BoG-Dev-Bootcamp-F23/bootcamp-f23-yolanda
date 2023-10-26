import "./Home.css";
import { useNavigate } from "react-router-dom";
import martapic from "../images/martapic.jpeg";

export default function Home() {
    const navigate = useNavigate();

    return (
        <div className="home-page">
            <div className="home-header-container">
                <h1 className="home-text">MARTA</h1>
                <h2 className="about-btn" onClick={() => navigate("/about")}>About MARTA</h2>
            </div>
            <div className="home-main-container">
                <div className="home-routes-container">
                    <h2 className="viewroutes-text">VIEW ROUTES SCHEDULE</h2>
                    <div className="home-btns-container">
                        <div className="home-route-btn" onClick={() => navigate("/lines/gold")}>Gold Line</div>
                        <div className="home-route-btn" onClick={() => navigate("/lines/red")}>Red Line</div>
                        <div className="home-route-btn" onClick={() => navigate("/lines/blue")}>Blue Line</div>
                        <div className="home-route-btn" onClick={() => navigate("/lines/green")}>Green Line</div>
                    </div>
                </div>
                <img src={martapic} className="marta-pic"/>
            </div>
        </div>
    )
}