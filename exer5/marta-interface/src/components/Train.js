import rightArrow from "../images/rightArrow.png";

export default function Train(props) {
    const { trainData } = props;
    console.log(rightArrow);

    return (
        <div className="train-component">
            <div className="train-left-info">
                <div className="train-path">
                    <p className="train-path-text">Midtown</p>
                    <img src="" className="right-arrow" />
                    <p className="train-path-text">Airport</p>
                </div>
                <div className="train-status">
                    <div className="train-line">Gold</div>
                    <p className="on-time">On time</p>
                </div>
            </div>
            <p className="train-time">
                    3
                    <br />
                    min
            </p>
        </div>
    )
}