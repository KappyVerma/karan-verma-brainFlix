import "./Textarea.scss";

export default function Textarea(props) {
  return (
    <section className="textarea">
      <div className="textarea__avatar">
        <img src={props.avatar} alt="Mohan Murge" className="textarea__img" />
      </div>

      <div className="textarea__container">
        <h4 className="textarea__title">{props.title}</h4>
        <form className="textarea__content">
          <textarea
            name="comments"
            className="textarea__comments"
            placeholder="Add a new comment"
          />
          <button className="textarea__button">{props.btn}</button>
        </form>
      </div>
    </section>
  );
}
