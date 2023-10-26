import { useState } from "react";

export default function NavBar(props) {
    const { stationsData, selStation, setSelStation} = props;

    return (
        <div className="navbar-component">
            <p className="select-station-text">Select your starting station</p>
            <div 
                className="station-option"
                style={{color: selStation === "All stations" ? "green": "white"}}
                onClick={() => setSelStation("All stations")}
            >
                All stations
            </div>
            {stationsData.map((station) =>
                <div
                    className="station-option"
                    style={{color: selStation === station ? "green": "white"}}
                    onClick={() => setSelStation(station)}
                >
                    {station}
                </div>
            )}
        </div>
    )
}