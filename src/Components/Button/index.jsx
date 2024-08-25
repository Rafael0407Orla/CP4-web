import { Link } from "react-router-dom";
import "./styles.css";

function Button({label="click here"}) {
    return (  
    <Link className="link">
    {label}
    </Link>);
}

export default Button