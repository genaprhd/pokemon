import { Link } from "react-router-dom";
import "../styles/Header.css";

function Header() {
  return (
    <header className="header-container">
      <Link to="/" className="header-logo">genaprhd</Link>
      <nav className="header-menu">
        <ul className="header-menu-items">
          <li className="header-menu-item">
            <Link to="/pokemon-list">
              Список всех покемонов
            </Link>
          </li>
          <li className="header-menu-item">
            <Link to href="/random">
              Случайный покемон
              </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;