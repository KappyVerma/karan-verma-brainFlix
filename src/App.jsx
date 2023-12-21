import "./App.scss";
import Header from "./components/Header/Header";
import VideoBlock from "./components/Content/Content.jsx";
import Mohan from "./assets/Images/Mohan-muruge.jpg";
import VideoDetails from "./data/video-details.json";
import { useState } from "react";

function App() {
  // image for header
  const avatar = Mohan;
  // video for header
  const [video, setVideo] = useState(VideoDetails[0]);

  return (
    <div>
      <Header avatar={avatar} />
      <main>
        <VideoBlock video={video} />
      </main>
    </div>
  );
}

export default App;
