import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import videoPreview from "../../assets/Images/Upload-video-preview.jpg";
import "./VideoUpload.scss";

function VideoUpload(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const Navigate = useNavigate();

  const handleTitleChange = (event) => {
    event.target.style.border = "";
    setTitle(event.target.value);
  };
  const handleDescriptionChange = (event) => {
    event.target.style.border = "";
    setDescription(event.target.value);
  };

  async function eventHandler(event) {
    event.preventDefault();
    if (!title || !description) {
      event.target.title.style.border = "1px solid #d22d2d";
      event.target.description.style.border = "1px solid #d22d2d";
    } else {
      try {
        await axios.post(`${props.url}/videos`, {
          title: title,
          description: description,
        });
        alert("Video uploaded successfully");
        Navigate("/");
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <>
      <section className="video">
        <h1 className="video__heading">Upload Video</h1>

        <div className="video__container">
          <div className="video__block">
            <h4 className="video__label">video thumbnail</h4>
            <img
              src={videoPreview}
              alt="video-preview"
              className="video__preview"
            />
          </div>

          <div className="video__form">
            <form onSubmit={eventHandler} id="form">
              <label className="video__label">
                title your video
                <input
                  onChange={handleTitleChange}
                  className="video__input"
                  type="text"
                  name="title"
                  placeholder="Add a title to your video"
                  value={title}
                />
              </label>
              <label className="video__label">
                Add a video description
                <textarea
                  onChange={handleDescriptionChange}
                  className="video__textArea"
                  type="text"
                  name="description"
                  placeholder="Add a description to your video"
                  value={description}
                />
              </label>
            </form>
          </div>
        </div>
        <div className="video__button-section">
          <button className="video__button" form="form">
            publish
          </button>
          <p className="video__button-secondary">cancel</p>
        </div>
      </section>
    </>
  );
}

export default VideoUpload;
