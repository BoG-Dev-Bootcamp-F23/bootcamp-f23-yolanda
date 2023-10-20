import Train from "./Train";
import { useState } from "react";

export default function TrainList(props) {
    const [tab, setTab] = useState("Arriving");
    const { currColor, trainData } = props;
    const arrivals = trainData["RailArrivals"];

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
                {makeButton("Arriving")}
                {makeButton("Scheduled")}
                {currColor === "GOLD" | currColor == "RED" ?
                    <>{makeButton("Northbound")}
                    {makeButton("Southbound")}</>
                    :
                    <>{makeButton("Eastbound")}
                    {makeButton("Westbound")}</>
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