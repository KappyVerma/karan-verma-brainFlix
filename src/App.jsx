import { useState } from "react";
import "./App.scss";
import avatar from "./assets/Images/Mohan-muruge.jpg";
import Videos from "./data/video-details.json";
import Header from "./components/Header/Header";
import BannerVideo from "./components/BannerVideo/BannerVideo";
import BannerVideoInfo from "./components/BannerVideoInfo/BannerVideoInfo";
import VideoSideBar from "./components/VideoSideBar/VideoSideBar";
import CommentSection from "./components/CommentSection/CommentSection";

function App() {
  const [sideBarVideos, setSideBarVideos] = useState(Videos.slice(1));
  const [topBannerVideo, setTopBannerVideo] = useState(Videos[0]);

  const clickHandler = (id) => {
    const selectedVideo = sideBarVideos.find((vids) => vids.id === id);
    setTopBannerVideo(selectedVideo);

    const updateSideBarVideos = Videos.filter(
      (vids) => vids.id !== selectedVideo.id
    );
    setSideBarVideos(updateSideBarVideos);
  };

  const formatTimeStamp = (timestamp) => {
    const date = new Date(timestamp);
    const formattedTimeStamp = date.toLocaleDateString();
    return formattedTimeStamp;
  };

  return (
    <div>
      <Header avatar={avatar} />
      <BannerVideo topBannerVideo={topBannerVideo} />
      <main className="main-content">
        <div className="main-content__divider">
          <BannerVideoInfo
            video={topBannerVideo}
            formatTimeStamp={formatTimeStamp}
          />
          <CommentSection
            video={topBannerVideo}
            formatTimeStamp={formatTimeStamp}
            avatar={avatar}
          />
        </div>
        <VideoSideBar SideBar={sideBarVideos} clickHandler={clickHandler} />
      </main>
    </div>
  );
}

export default App;
