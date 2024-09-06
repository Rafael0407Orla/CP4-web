// Header.js
import { NavLink } from "react-router-dom";
import "./styles.css";

function Header() {
  const navLinks = [
    {
      to: "/",
      label: "Home",
    },
    {
      to: "/sobre",
      label: "Sobre",
    },
    {
      to: "/contato",
      label: "Contato",
    },
  ];

  return (
    <header className="header">
      <nav>
        <ul>
          {navLinks.map((link, index) => (
            <li key={index}>
              <NavLink
                to={link.to}
                exact
                className={({ isActive }) => (isActive ? "currentLink" : "")}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
