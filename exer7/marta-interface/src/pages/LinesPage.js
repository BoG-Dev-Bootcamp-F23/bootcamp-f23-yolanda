import "./LinesPage.css";
import TrainList from "../components/TrainList";
import NavBar from "../components/NavBar";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function LinesPage() {
    const navigate = useNavigate();
    const params = useParams();

    // URLs
    const STATIONS_URL = "http://13.59.196.129:3001/stations/";
    const TRAINS_URL = "http://13.59.196.129:3001/arrivals/";

    const [loading, setLoading] = useState(true);

    const currColor = params.lineColor.toUpperCase();
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
            <div className="home-header-container">
                <h2 className="back-btn" onClick={() => navigate("/")}>Back to home</h2>
                <button className="line-btn" style={{backgroundColor: "#d7ad22"}} onClick={() => navigate("/lines/gold")}>Gold</button>
                <button className="line-btn" style={{backgroundColor: "#df2020"}} onClick={() => navigate("/lines/red")}>Red</button>
                <button className="line-btn" style={{backgroundColor: "#1944c6"}} onClick={() => navigate("/lines/blue")}>Blue</button>
                <button className="line-btn" style={{backgroundColor: "#1d7c28"}} onClick={() => navigate("/lines/green")}>Green</button>
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