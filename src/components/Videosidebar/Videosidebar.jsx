import "./Videosidebar.scss";

export default function VideoSideBar(props) {
  return (
    <div className="video-sidebar">
      <h3 className="video-sidebar__header">NEXT VIDEOS</h3>
      <ul className="video-sidebar__list">
        {props.SideBar.map((vid) => (
          <li
            className="video-sidebar__item"
            key={vid.id}
            onClick={() => props.clickHandler(vid.id)}
          >
            <div className="video-sidebar__poster">
              <img src={vid.image} alt="" className="video-sidebar__link" />
            </div>
            <div className="video-sidebar__detail">
              <h4 className="video-sidebar__title">{vid.title}</h4>
              <p className="video-sidebar__text">{vid.channel}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
