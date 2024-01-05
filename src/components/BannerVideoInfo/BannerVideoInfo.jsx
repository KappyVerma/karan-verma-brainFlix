import "./BannerVideoInfo.scss";

function BannerVideoInfo({ bannerVideo, formatTimeStamp }) {
  return (
    <section className="banner-info">
      <h1 className="banner-info__title">{bannerVideo.title}</h1>
      <div className="banner-info__container">
        <div className="banner-info__list">
          <h4 className="banner-info__item banner-info__item--bold">
            By {bannerVideo.channel}
          </h4>
          <p className="banner-info__item">
            {formatTimeStamp(bannerVideo.timestamp)}
          </p>
        </div>
        <div className="banner-info__list">
          <p className="banner-info__item banner-info__item--views ">
            {bannerVideo.views}
          </p>
          <p className="banner-info__item banner-info__item--likes">
            {bannerVideo.likes}
          </p>
        </div>
      </div>
      <div className="banner-info__list">
        <p className="banner-info__description">{bannerVideo.description}</p>
      </div>
    </section>
  );
}

export default BannerVideoInfo;
