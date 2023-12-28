import "./App.scss";
import { useState } from "react";
import Header from "./components/Header/Header";
import VideoBlock from "./components/Content/Content.jsx";
import Mohan from "./assets/Images/Mohan-muruge.jpg";
import Videos from "./data/video-details.json";
import VideoDetails from "./components/Video-details/videoDetails.jsx";
import VideoSideBar from "./components/Videosidebar/Videosidebar.jsx";
import Comments from "./components/Comments/Comments.jsx";

function App() {
  // avatar for header
  const avatar = Mohan;
  // video for header
  const [SideBar, setSideBar] = useState(Videos.slice(1));
  const [video, setVideo] = useState(Videos[0]);

  const clickHandler = (id) => {
    const selectedVideo = SideBar.find((vids) => vids.id === id);
    setVideo(selectedVideo);

    const updateSideBar = Videos.filter((v) => v.id !== selectedVideo.id);
    setSideBar(updateSideBar);
  };

  const formatTimeStamp = (timestamp) => {
    const date = new Date(timestamp);
    const formattedTimeStamp = date.toLocaleDateString();
    return formattedTimeStamp;
  };

  return (
    <div>
      <Header avatar={avatar} />
      <main className="main">
        <VideoBlock video={video} />
        <section className="main-section">
          <div className="main-section__divider">
            <VideoDetails video={video} formatTimeStamp={formatTimeStamp} />
            <Comments
              video={video}
              formatTimeStamp={formatTimeStamp}
              avatar={avatar}
            />
          </div>
          <VideoSideBar SideBar={SideBar} clickHandler={clickHandler} />
        </section>
      </main>
    </div>
  );
}

export default App;
