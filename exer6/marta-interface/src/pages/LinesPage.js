import stationData from "../server/stationData";
import trainData from "../server/trainData";
import TrainList from "../components/TrainList";
import NavBar from "../components/NavBar";
import { useState } from "react";

export default function LinesPage() {
    const [currColor, setCurrColor] = useState("GOLD");
    console.log("rerender linespage");

    return (
        <div className="lines-page">
            <div className="line-btns-container">
                <button className="line-btn" style={{backgroundColor: "#d7ad22"}} onClick={() => setCurrColor("GOLD")}>Gold</button>
                <button className="line-btn" style={{backgroundColor: "#df2020"}} onClick={() => setCurrColor("RED")}>Red</button>
                <button className="line-btn" style={{backgroundColor: "#1944c6"}} onClick={() => setCurrColor("BLUE")}>Blue</button>
                <button className="line-btn" style={{backgroundColor: "#1d7c28"}} onClick={() => setCurrColor("GREEN")}>Green</button>
            </div>

            <h1 className="line-heading">{currColor}</h1>

            <div className="main-container">
                <NavBar currColor={currColor} stationData={stationData}/>
                <TrainList currColor={currColor} trainData={trainData}/>
            </div>
        </div>
    )
}