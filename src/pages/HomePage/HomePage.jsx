import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import FormatTimeStamp from "../../utils";
import "./HomePage.scss";
import avatar from "../../assets/Images/Mohan-muruge.jpg";
import BannerVideo from "../../components/BannerVideo/BannerVideo";
import BannerVideoInfo from "../../components/BannerVideoInfo/BannerVideoInfo";
import VideoSideBar from "../../components/VideoSideBar/VideoSideBar";
import CommentSection from "../../components/CommentSection/CommentSection";

function HomePage({ url }) {
  const [sideBarVideo, setSideBarVideo] = useState([]);
  const [bannerVideo, setBannerVideo] = useState({});

  const params = useParams();

  // ---------------VIDEODATA FOR SIDEBAR---------------
  useEffect(() => {
    const getVideoData = async () => {
      try {
        const response = await axios.get(`${url}/videos`);
        setSideBarVideo(response.data);
      } catch (error) {
        console.log("THERE IS AN ERROR!!", error);
      }
    };
    getVideoData();
  }, [url]);

  // ---------------VIDEODATA FOR BANNER---------------
  useEffect(() => {
    const getSelectedVideo = async () => {
      if (!params.id) {
        const response = await axios.get(
          `${url}/videos/84e96018-4022-434e-80bf-000ce4cd12b8`
        );
        setBannerVideo(response.data);
      } else {
        try {
          const response = await axios.get(`${url}/videos/${params.id}`);
          setBannerVideo(response.data);
        } catch (error) {
          console.log("THERE IS AN ERROR!!", error);
        }
      }
    };
    getSelectedVideo();
  }, [params.id, url]);

  return (
    <div>
      <BannerVideo bannerVideo={bannerVideo} />
      <main className="main-content">
        <div className="main-content__divider">
          <BannerVideoInfo
            bannerVideo={bannerVideo}
            formatTimeStamp={FormatTimeStamp}
          />
          <CommentSection
            bannerVideo={bannerVideo}
            formatTimeStamp={FormatTimeStamp}
            avatar={avatar}
          />
        </div>
        <VideoSideBar
          sideBarVideo={sideBarVideo}
          bannerVideo={bannerVideo}
          url={url}
        />
      </main>
    </div>
  );
}
export default HomePage;
