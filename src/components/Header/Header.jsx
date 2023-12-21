import "../Header/Header.scss";

export default function Header(props) {
  return (
    <div className="header">
      <div className="header__logo"></div>
      <div className="header__nav">
        <form action="" className="header__form">
          <input type="text" className="header__input" placeholder="Search" />
          <button className="header__button">
            <img src="" alt="" className="logo" />
            upload
          </button>
        </form>
      </div>
      <div className="header__avatar">
        <img className="header__image" src={props.avatar} alt="mohan murge" />
      </div>
    </div>
  );
}
