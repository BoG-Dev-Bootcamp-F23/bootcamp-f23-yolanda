import stationData from "../server/stationData";
import trainData from "../server/trainData";
import TrainList from "../components/TrainList";
import NavBar from "../components/NavBar";
import { useState } from "react";

export default function LinesPage() {
    const [currColor, setCurrColor] = useState("GOLD");

    return (
        <div className="lines-page">
            <h1 className="line-heading">{currColor}</h1>
            <div className="main-container">
                <NavBar currColor={currColor} stationData={stationData}/>
                <TrainList currColor={currColor} trainData={trainData}/>
            </div>
        </div>
    )
}