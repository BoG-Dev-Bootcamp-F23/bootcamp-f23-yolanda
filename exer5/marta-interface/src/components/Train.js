import rightArrow from "../images/rightArrow.png";

export default function Train(props) {
    const { trainData } = props;
    const lineColorMap = {
        "GOLD": ["Gold", "gold"],
        "RED": ["Red", "red"],
        "BLUE": ["Blue", "blue"],
        "GREEN": ["Green", "green"]
    }

    function getDelay() {
        return (
            trainData["DELAY"] === "T0S" ?
            "Delayed" :
            "On time"
        )
    }

    return (
        <div className="train-component">
            <div className="train-left-info">
                <div className="train-path">
                    <p className="train-path-text">Midtown</p>
                    <img src="" className="right-arrow" />
                    <p className="train-path-text">Airport</p>
                </div>
                <div className="train-status">
                    <div
                        className="train-line"
                        style={{backgroundColor: lineColorMap[trainData["LINE"]][1]}}
                    >
                        {lineColorMap[trainData["LINE"]][0]}
                    </div>
                    <p className="on-time">{getDelay()}</p>
                </div>
            </div>
            <p className="train-time">
                    <b>3</b>
                    <br />
                    min
            </p>
        </div>
    )
}