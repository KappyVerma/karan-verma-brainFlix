import "./CommentSection.scss";
import CreateComment from "../CreateComment/CreateComment";
import UserComments from "../UserComment/UserComment";

function CommentSection({ video, formatTimeStamp, avatar }) {
  return (
    <div className="comment-section">
      <h3 className="comment-section__title">
        {video.comments.length} Comments
      </h3>
      <CreateComment
        title="JOIN THE CONVERSATION"
        btn="COMMENT"
        avatar={avatar}
      />
      <UserComments video={video} formatTimeStamp={formatTimeStamp} />
    </div>
  );
}

export default CommentSection;
