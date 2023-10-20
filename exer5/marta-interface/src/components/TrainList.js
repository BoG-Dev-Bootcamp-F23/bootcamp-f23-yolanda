import Train from "./Train";
import { useState } from "react";

export default function TrainList(props) {
    const [tab, setTab] = useState("Arriving");
    const { currColor, trainData } = props;
    const arrivals = trainData["RailArrivals"];

    function setBtnStyle(thisTab) {
        return (
            {
                backgroundColor: tab === thisTab ? "rgb(41, 41, 41)" : "white",
                border: tab === thisTab ? "2px solid rgb(41, 41, 41)" : "2px solid #b6b6b6",
                color: tab === thisTab ? "white": "black"
            }
        )
    }

    return (
        <div className="trainlist-component">
            <div className="buttons-container">
                <button className="button" style={setBtnStyle("Arriving")}>Arriving</button>
                <button className="button" style={setBtnStyle("Scheduled")}>Scheduled</button>
                {currColor === "GOLD" | currColor == "RED" ?
                    <><button className="button" style={setBtnStyle("Northbound")}>Northbound</button>
                    <button className="button" style={setBtnStyle("Southbound")}>Southbound</button></>
                    :
                    <><button className="button" style={setBtnStyle("Eastbound")}>Eastbound</button>
                    <button className="button" style={setBtnStyle("Westbound")}>Westbound</button></>
                }
            </div>
            <div className="trains-container">
                <Train />
            </div>
        </div>
    )
}