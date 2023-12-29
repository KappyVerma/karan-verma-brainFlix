import "./BannerVideoInfo.scss";

export default function BannerVideoInfo(props) {
  return (
    <section className="banner-info">
      <h1 className="banner-info__title">{props.video.title}</h1>
      <div className="banner-info__container">
        <div className="banner-info__list">
          <h4 className="banner-info__item banner-info__item--bold">
            By {props.video.channel}
          </h4>
          <p className="banner-info__item">
            {props.formatTimeStamp(props.video.timestamp)}
          </p>
        </div>
        <div className="banner-info__list">
          <p className="banner-info__item banner-info__item--views ">
            {props.video.views}
          </p>
          <p className="banner-info__item banner-info__item--likes">
            {props.video.likes}
          </p>
        </div>
      </div>
      <div className="banner-info__list">
        <p className="banner-info__description">{props.video.description}</p>
      </div>
    </section>
  );
}
