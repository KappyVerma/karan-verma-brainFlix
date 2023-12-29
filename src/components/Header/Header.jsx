import "../Header/Header.scss";

function Header(props) {
  return (
    <header className="header">
      <div className="header__logo"></div>
      <nav className="header__nav">
        <input type="text" className="header__input" placeholder="Search" />
        <button className="header__button">upload</button>
      </nav>
      <img className="header__avatar" src={props.avatar} alt="mohan-murge" />
    </header>
  );
}

export default Header;
