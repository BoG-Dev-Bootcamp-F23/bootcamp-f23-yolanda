import stationData from "../server/stationData";
import trainData from "../server/trainData";
import TrainList from "../components/TrainList";
import NavBar from "../components/NavBar";
import { useState, useEffect } from "react";

export default function LinesPage() {
    // URLs
    const STATIONS_URL = "http://13.59.196.129:3001/stations/";
    const TRAINS_URL = "http://13.59.196.129:3001/arrivals/";

    const [loading, setLoading] = useState(true);

    const [currColor, setCurrColor] = useState("GOLD"); // default to gold
    const [trainsData, setTrainsData] = useState();
    const [stationsData, setStationsData] = useState();

    const [selStation, setSelStation] = useState();

    useEffect(() => {
        async function fetchData() {
          setLoading(true);
          const stationResponse = await fetch(STATIONS_URL + currColor);
          const stationFetchedData = await stationResponse.json();
          const trainResponse = await fetch(TRAINS_URL + currColor);
          const trainFetchedData = await trainResponse.json();
          setStationsData(stationFetchedData);
          setTrainsData(trainFetchedData);
          setLoading(false);
        }
        
        setSelStation("All stations"); // default to all stations when switching to new line
        fetchData();
    }, [currColor])

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
                {loading ?
                    <h1 className="loading-text">Loading...</h1> :
                    <>
                    <NavBar stationsData={stationsData} selStation={selStation} setSelStation={setSelStation}/>
                    <TrainList currColor={currColor} trainsData={trainsData} selStation={selStation}/>
                    </>
                }
            </div>
        </div>
    )
}