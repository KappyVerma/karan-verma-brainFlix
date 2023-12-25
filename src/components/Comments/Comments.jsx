import "./Comments.scss";
import Textarea from "../Textarea/Textarea";

export default function Comments(props) {
  return (
    <div className="comment-section">
      <h3 className="comment-section__title">
        {props.video.comments.length} Comments
      </h3>
      <Textarea
        title="JOIN THE CONVERSATION"
        btn="COMMENT"
        avatar={props.avatar}
      />
      <ul className="comment-section__comments">
        {props.video.comments.map((cmt) => (
          <li className="comment-section__list" key={cmt.id}>
            <div className="comment-section__avatar"></div>
            <div className="comment-section__content">
              <h4 className="comment-section__item comment-section__item--name">
                {cmt.name}
              </h4>
              <p className="comment-section__item comment-section__item--tym">
                {props.formatTimeStamp(cmt.timestamp)}
              </p>
              <p className="comment-section__item comment-section__item--cmt">
                {cmt.comment}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
