import { BrowserRouter, Routes, Route } from "react-router-dom";
import { url } from "./utils";
import "./App.scss";
import avatar from "./assets/Images/Mohan-muruge.jpg";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import VideoUpload from "./pages/VideoUpload/VideoUpload";

function App() {
  return (
    <BrowserRouter>
      <Header avatar={avatar} />
      <Routes>
        <Route path="/" element={<HomePage url={url} />} />
        <Route path="/video/:id" element={<HomePage url={url} />} />
        <Route
          path="/videoUpload"
          element={<VideoUpload url={url} avatar={avatar} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
