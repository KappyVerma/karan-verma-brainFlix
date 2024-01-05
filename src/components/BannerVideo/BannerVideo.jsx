import "./BannerVideo.scss";

function BannerVideo({ bannerVideo }) {
  const poster = bannerVideo.image;
  return (
    <div className="banner">
      <video className="banner__item" controls poster={poster}></video>
    </div>
  );
}

export default BannerVideo;
