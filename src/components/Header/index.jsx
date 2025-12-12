import { useState } from "react";
import "./header.scss";
import logo from "../../assets/Header/logo.png";
import menuIcon from "../../assets/Header/menu.svg";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <img
        src={logo}
        alt="Logo"
        className="logo"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      />

      <div className="hamburger-img" onClick={() => setMenuOpen(!menuOpen)}>
        <img src={menuIcon} alt="Menu" />
      </div>

      <ul className={menuOpen ? "menu-mobile menu-open" : "menu-mobile"}>
        <li>
          <a href="#secao-looks" onClick={() => setMenuOpen(false)}> LOOKS </a>
        </li>
        <li>
          <a href="#secao-lancamentos" onClick={() => setMenuOpen(false)}> LANÇAMENTOS </a>
        </li>
        <li>
          <a href="#secao-novidades" onClick={() => setMenuOpen(false)}> NOVIDADES </a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
