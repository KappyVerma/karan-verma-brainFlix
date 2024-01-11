import { BrowserRouter, Routes, Route } from "react-router-dom";
import { url } from "./utils";
import "./App.scss";
import avatar from "./assets/Images/Mohan-muruge.jpg";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import VideoUpload from "./pages/VideoUpload/VideoUpload";
import videoPreview from "./assets/Images/Upload-video-preview.jpg";

function App() {
  return (
    <BrowserRouter>
      <Header avatar={avatar} />
      <Routes>
        <Route path="/" element={<HomePage url={url} />} />
        <Route path="/video/:id" element={<HomePage url={url} />} />
        <Route
          path="/videoUpload"
          element={
            <VideoUpload
              url={url}
              avatar={avatar}
              heading="Upload Video"
              image={videoPreview}
              imageLabel="video thumbnail"
              titleLabel="title your video"
              titlePlaceHolder="Add a title to your video"
              descriptionLabel="Add a video description"
              descPlaceHolder="Add a description to your video"
              button="publish"
              buttonText="cancel"
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
