import { NavLink } from "react-router-dom";
import "./Header.scss";

function Header(props) {
  return (
    <header className="header">
      <NavLink to="/" className="header__logo"></NavLink>
      <nav className="header__nav">
        <input type="text" className="header__input" placeholder="Search" />
        <NavLink to="/videoupload" className="header__button">
          upload
        </NavLink>
      </nav>
      <img className="header__avatar" src={props.avatar} alt="mohan-murge" />
    </header>
  );
}

export default Header;
