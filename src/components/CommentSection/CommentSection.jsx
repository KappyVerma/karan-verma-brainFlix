import "./CommentSection.scss";
import CreateComment from "../CreateComment/CreateComment";
import UserComments from "../UserComment/UserComment";

function CommentSection({ bannerVideo, formatTimeStamp, avatar }) {
  return (
    <div className="comment-section">
      <h3 className="comment-section__title">
        {bannerVideo.comments?.length} Comments
      </h3>
      <CreateComment
        title="JOIN THE CONVERSATION"
        btn="COMMENT"
        avatar={avatar}
      />
      <UserComments
        selectedVideo={bannerVideo}
        formatTimeStamp={formatTimeStamp}
      />
    </div>
  );
}

export default CommentSection;
