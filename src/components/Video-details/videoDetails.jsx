import "./videoDetails.scss";

export default function VideoDetails(props) {
  return (
    <section className="video-detail">
      <h1 className="video-detail__title">{props.video.title}</h1>
      <div className="video-detail__block">
        <div className="video-detail__list">
          <h4 className="video-detail__item video-detail__item--bold">
            By {props.video.channel}
          </h4>
          <p className="video-detail__item">
            {" "}
            {props.formatTimeStamp(props.video.timestamp)}{" "}
          </p>
        </div>
        <div className="video-detail__list">
          <p className="video-detail__item video-detail__item--eye ">
            {" "}
            {props.video.views}{" "}
          </p>
          <p className="video-detail__item video-detail__item--heart">
            {" "}
            {props.video.likes}{" "}
          </p>
        </div>
      </div>
      <div className="video-detail__lis">
        <p className="video-detail__description">{props.video.description}</p>
      </div>
    </section>
  );
}
