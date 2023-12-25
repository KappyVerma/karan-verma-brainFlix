import "../Content/Content.scss";

export default function VideoBlock(props) {
  const videoPosters = props.video.image;
  return (
    <div className="video-block">
      <video
        className="video-block__link"
        controls
        poster={videoPosters}
      ></video>
    </div>
  );
}
