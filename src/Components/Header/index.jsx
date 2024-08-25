// Header.js
import { NavLink } from "react-router-dom";
import "./styles.css";

function Header() {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              exact
              className={({ isActive }) => (isActive ? "currentLink" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/sobre"
              exact
              className={({ isActive }) => (isActive ? "currentLink" : "")}
            >
              Sobre
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contato"
              exact
              className={({ isActive }) => (isActive ? "currentLink" : "")}
            >
              Contato
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
