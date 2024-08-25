import { Link } from "react-router-dom";
import "./styles.css";
function Header() {
    return (
        <header className="header">
            <nav>
                <ul>
                    <li className="headerLinks"><Link to={"/"}>Home</Link></li>
                    <li className="headerLinks"><Link to={"sobre"}>Sobre</Link></li>
                    <li className="headerLinks"><Link to={"contato"}>Contato</Link></li>
                </ul>
            </nav>
        </header>);
}

export default Header;