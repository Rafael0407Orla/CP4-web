import { Link } from "react-router-dom";
import "./styles.css";

function Button({ label = "click here", link }) {
  return (
    <Link className="link" to={link}>
      {label}
    </Link>
  );
}

export default Button;
