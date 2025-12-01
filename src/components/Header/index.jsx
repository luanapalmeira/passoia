import "./header.scss";
import logo from "../../assets/Header/logo.png";

function Header() {
  return (
    <header>
      <img
        src={logo}
        alt="Logo"
        className="logo"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      />

      <ul>
        <li>
          <a href="#secao-looks"> LOOKS </a>
        </li>
        <li>
          <a href="#secao-lancamentos"> LANÇAMENTOS </a>
        </li>
        <li>
          <a href="#secao-novidades"> NOVIDADES </a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
