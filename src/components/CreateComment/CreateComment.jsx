import "./CreateComment.scss";

function CreateComment(props) {
  return (
    <section className="comment-box">
      <div className="comment-box__avatar">
        <img
          className="comment-box__img"
          src={props.avatar}
          alt="Mohan-Murge"
        />
      </div>

      <div className="comment-box__container">
        <h4 className="comment-box__title">{props.title}</h4>
        <form className="comment-box__content">
          <textarea
            name="comments"
            className="comment-box__comments"
            placeholder="Add a new comment"
          />
          <button className="comment-box__button">{props.btn}</button>
        </form>
      </div>
    </section>
  );
}

export default CreateComment;
