import { BrowserRouter, Routes, Route } from "react-router-dom";
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
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/videoUpload" element={<VideoUpload />} />
        <Route path="/video/:id" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
