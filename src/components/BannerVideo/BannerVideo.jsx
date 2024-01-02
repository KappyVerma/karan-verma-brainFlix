import "./BannerVideo.scss";

function BannerVideo(props) {
  const poster = props.topBannerVideo.image;
  return (
    <div className="banner">
      <video className="banner__item" controls poster={poster}></video>
    </div>
  );
}

export default BannerVideo;
