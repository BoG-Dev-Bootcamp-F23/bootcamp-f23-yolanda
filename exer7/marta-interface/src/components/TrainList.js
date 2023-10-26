import Train from "./Train";
import { useState } from "react";

export default function TrainList(props) {
    const { currColor, trainsData, selStation } = props;
    const [arrivingFilter, setArrivingFilter] = useState(true); // default to arriving
    const [scheduledFilter, setScheduledFilter] = useState(false);
    const [northFilter, setNorthFilter] = useState(false);
    const [southFilter, setSouthFilter] = useState(false);
    const [eastFilter, setEastFilter] = useState(false);
    const [westFilter, setWestFilter] = useState(false);

    const filteredTrains = trainsData.filter((train) => (
        (selStation === "All stations" | train["STATION"] === (selStation.toUpperCase() + " STATION"))
        && (!arrivingFilter | train["WAITING_TIME"] === "Arriving")
        && (!scheduledFilter | train["WAITING_TIME"] !== "Arriving")
        && (currColor === "GOLD" | currColor == "RED" ?
            (!northFilter | train["DIRECTION"] === "N")
            && (!southFilter | train["DIRECTION"] === "S") :
            (!eastFilter | train["DIRECTION"] === "E")
            && (!westFilter | train["DIRECTION"] === "W")
        )
    ));

    return (
        <div className="trainlist-component">
            <div className="buttons-container">
                <button className={arrivingFilter ? "selected-btn" : "not-selected-btn"}
                        onClick={() => setArrivingFilter(!arrivingFilter)}>Arriving</button>
                <button className={scheduledFilter ? "selected-btn" : "not-selected-btn"}
                        onClick={() => setScheduledFilter(!scheduledFilter)}>Scheduled</button>
                {currColor === "GOLD" | currColor == "RED" ?
                    <>
                    <button className={northFilter ? "selected-btn" : "not-selected-btn"}
                            onClick={() => setNorthFilter(!northFilter)}>Northbound</button>
                    <button className={southFilter ? "selected-btn" : "not-selected-btn"}
                            onClick={() => setSouthFilter(!southFilter)}>Southbound</button>
                    </> :
                    <>
                    <button className={eastFilter ? "selected-btn" : "not-selected-btn"}
                            onClick={() => setEastFilter(!eastFilter)}>Eastbound</button>
                    <button className={westFilter ? "selected-btn" : "not-selected-btn"}
                            onClick={() => setWestFilter(!westFilter)}>Westbound</button>
                    </>
                }
            </div>
            <div className="trains-container">
                {
                    filteredTrains.length > 0 ?
                    filteredTrains.map((train) => {
                        return <Train trainData={train}/>
                    }) :
                    <p>No current trains match filters</p>
                }
            </div>
        </div>
    )
}