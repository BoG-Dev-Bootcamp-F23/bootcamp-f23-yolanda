import Train from "./Train";
import { useState } from "react";

export default function TrainList(props) {
    const { currColor, trainData } = props;
    const [tab, setTab] = useState("Arriving");
    const arrivals = trainData["RailArrivals"];

    console.log("rerender trainlist");

    function makeButton(thisTab) {
        return (
            <button
                className="button"
                style={{
                    backgroundColor: tab === thisTab ? "rgb(41, 41, 41)" : "white",
                    border: tab === thisTab ? "2px solid rgb(41, 41, 41)" : "2px solid #b6b6b6",
                    color: tab === thisTab ? "white": "black"
                }}
            >
                {thisTab}
            </button>
            
        )
    }

    return (
        <div className="trainlist-component">
            <div className="buttons-container">
                <button className="button">Arriving</button>
                <button className="button">Scheduled</button>
                {currColor === "GOLD" | currColor == "RED" ?
                    <><button className="button">Northbound</button>
                    <button className="button">Southbound</button></>
                    :
                    <><button className="button">Eastbound</button>
                    <button className="button">Westbound</button></>
                }
            </div>
            <div className="trains-container">
                {arrivals.map((train) => {
                    if (train["LINE"] === currColor) {
                        return <Train trainData={train}/>
                    }
                })}
            </div>
        </div>
    )
}