import "./About.css";
import { useNavigate } from "react-router-dom";
import martamap from "../images/marta-map.jpeg";

export default function About() {
    const navigate = useNavigate();

    return (
        <div>
            <div className="about-header-container">
                <h1 className="about-text">ABOUT</h1>
                <h2 className="about-back-home" onClick={() => navigate("/")}>Back to home</h2>
            </div>
            <div className="about-main-container">
                <div className="about-info">
                    <h2>What is MARTA?</h2>
                    <p>The Metropolitan Atlanta Rapid Transit Authority is pretty bad! It only goes in 2 directions
                        and hasn't been renovated since the 80's.
                    </p>
                </div>
                <img src={martamap} className="marta-map" />
            </div>
        </div>
    )
}