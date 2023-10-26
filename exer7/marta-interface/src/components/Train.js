export default function Train(props) {
    const { trainData } = props;
    const lineColorMap = {
        "GOLD": "#d7ad22",
        "RED": "#df2020",
        "BLUE": "#1944c6",
        "GREEN": "#1d7c28"
    }

    function formatTitleCase(string) {
        return string.toLowerCase().replace(/\b\w/g, s => s.toUpperCase());
    }

    return (
        <div className="train-component">
            <div className="train-left-info">
                <div className="train-path">
                    <p className="train-path-text">{ formatTitleCase(trainData["STATION"]).slice(0, -8)} to {formatTitleCase(trainData["DESTINATION"]) }</p>
                </div>
                <div className="train-status">
                    <div
                        className="train-line"
                        style={{backgroundColor: lineColorMap[trainData["LINE"]]}}
                    >
                        {formatTitleCase(trainData["LINE"])}
                    </div>
                    {
                        trainData["DELAY"] === "T0S" ?
                            <p className="on-time" style={{color: "red"}}>Delayed</p> :
                            <p className="on-time" style={{color: "green"}}>On time</p>
                    }
                </div>
            </div>
            <p className="train-time">
                    <b>{trainData["WAITING_TIME"].split(" ")[0]}</b>
                    <br />
                    {trainData["WAITING_TIME"].split(" ")[1]}
            </p>
        </div>
    )
}