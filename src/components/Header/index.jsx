import "./header.scss";
import logo from "../../assets/Header/logo.png";

function Header() {
  return (
    <header>
      <img src={logo} alt="Logo" />

      <ul>
        <li><a href="#" target="_blank"> LOOKS </a></li>
        <li><a href="#" target="_blank"> LANÇAMENTOS </a></li>
        <li><a href="#" target="_blank"> NOVIDADES </a></li>
      </ul>
    </header>
  );
}

export default Header;
