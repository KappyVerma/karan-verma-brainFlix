import "../Header/Header.scss";

export default function Header(props) {
  return (
    <header className="header">
      <div className="header__logo"></div>
      <nav className="header__nav">
        <form className="header__form">
          <input type="text" className="header__input" placeholder="Search" />
          <button className="header__button">
            <img src="" alt="" className="logo" />
            upload
          </button>
        </form>
      </nav>
      <div className="header__avatar">
        <img className="header__image" src={props.avatar} alt="mohan murge" />
      </div>
    </header>
  );
}
