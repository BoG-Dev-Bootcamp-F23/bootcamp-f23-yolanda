export default function NavBar(props) {
    const {currColor, stationData} = props
    const stationsList = stationData[currColor.toLowerCase()];

    console.log("rerender navbar");

    return (
        <div className="navbar-component">
            <p className="select-station-text">Select your starting station</p>
            <div className="station-option">All stations</div>
            {stationsList.map((station) =>
                <div className="station-option">{station}</div>
            )}
        </div>
    )
}