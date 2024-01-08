import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./VideoUpload.scss";

function VideoUpload(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const Navigate = useNavigate();

  const eventHandler = (event) => {
    event.preventDefault();
    alert("Video uploaded successfully");
    Navigate("/");
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  return (
    <>
      <section className="video">
        <h1 className="video__heading">{props.heading}</h1>

        <div className="video__container">
          <div className="video__block">
            <h4 className="video__label">{props.imageLabel} </h4>
            <img
              src={props.image}
              alt="video-preview"
              className="video__preview"
            />
          </div>

          <div className="video__form">
            <form onSubmit={eventHandler} id="form">
              <label className="video__label">
                {props.titleLabel}
                <input
                  onChange={handleTitleChange}
                  className="video__input"
                  type="text"
                  name="title"
                  placeholder={props.titlePlaceHolder}
                  value={title}
                />
              </label>
              <label className="video__label">
                {props.descriptionLabel}
                <textarea
                  onChange={handleDescriptionChange}
                  className="video__textArea"
                  type="text"
                  name="description"
                  placeholder={props.descPlaceHolder}
                  value={description}
                />
              </label>
            </form>
          </div>
        </div>
        <div className="video__button-section">
          <button className="video__button" form="form">
            {props.button}
          </button>
          <p className="video__button-secondary">{props.buttonText}</p>
        </div>
      </section>
    </>
  );
}

export default VideoUpload;
