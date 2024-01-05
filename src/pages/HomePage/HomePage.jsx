import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import FormatTimeStamp from "../../utils/utils";
import "./HomePage.scss";
import avatar from "../../assets/Images/Mohan-muruge.jpg";
import BannerVideo from "../../components/BannerVideo/BannerVideo";
import BannerVideoInfo from "../../components/BannerVideoInfo/BannerVideoInfo";
import VideoSideBar from "../../components/VideoSideBar/VideoSideBar";
import CommentSection from "../../components/CommentSection/CommentSection";

function HomePage() {
  const [sideBarVideo, setSideBarVideo] = useState([]);
  const [bannerVideo, setBannerVideo] = useState({});

  const params = useParams();
  const url = "https://project-2-api.herokuapp.com/";

  useEffect(() => {
    const getVideoData = async () => {
      try {
        const api_key = "a562832577e84e91a08cc270635e214f";
        const response = await axios.get(`${url}videos/?api_key=${api_key}`);
        setSideBarVideo(response.data);
      } catch (error) {
        console.log("THERE IS AN ERROR!!", error);
      }
    };
    getVideoData();
  }, []);

  useEffect(() => {
    const defaultVideoId = "84e96018-4022-434e-80bf-000ce4cd12b8";
    const selectedVideoId = params.id || defaultVideoId;

    const getSelectedVideo = async (videoId) => {
      try {
        const api_key = "a562832577e84e91a08cc270635e214f";
        const response = await axios.get(
          `${url}videos/${videoId}?api_key=${api_key}`
        );
        setBannerVideo(response.data);
      } catch (error) {
        console.log("THERE IS AN ERROR!!", error);
      }
    };
    getSelectedVideo(selectedVideoId);
  }, [params.id]);

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
        <VideoSideBar sideBarVideo={sideBarVideo} bannerVideo={bannerVideo} />
      </main>
    </div>
  );
}
export default HomePage;
