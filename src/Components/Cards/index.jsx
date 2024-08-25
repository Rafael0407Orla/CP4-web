import "./styles.css";

function Card({ number, title, description, icon, color }) {
    return (
        <div className="card" style={{ backgroundColor: color }} >
            <p className="number">{number}</p>
            <div className="Card-textContainer">
                <p className="title">{title}</p>
                <p>{description}</p>
            </div>
            <img className="icon" src={icon} />

        </div>
    );
}

export default Card;