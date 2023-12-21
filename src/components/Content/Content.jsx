import "../Content/Content.scss";

export default function VideoBlock(props) {
  return (
    <div className="video-block">
      <video
        className="video-block__link"
        controls
        poster={props.video.image}
      ></video>
    </div>
  );
}
