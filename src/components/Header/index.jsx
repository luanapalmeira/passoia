import "./header.scss";
import logo from "../../assets/Header/logo.png";

function Header() {
  return (
    <header>
      <img src={logo} alt="Logo" />

      <ul>
        <li><a href="#"> LOOKS </a></li>
        <li><a href="#"> LANÇAMENTOS </a></li>
        <li><a href="#"> NOVIDADES </a></li>
      </ul>
    </header>
  );
}

export default Header;
