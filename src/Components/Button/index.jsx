import { Link } from "react-router-dom";
import "./styles.css";

function Button({ label = "click here", link, type, style }) {
  const estilos = {
    primary: "primary",
    secondary: "secondary",
    tertiary: "tertiary",
  };
  return (
    <Link className={estilos[type]} to={link} style={style}>
      {label}
    </Link>
  );
}

export default Button;
