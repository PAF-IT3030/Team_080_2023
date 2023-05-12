import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { savePostShare } from "../../app/actions/postshare.actions";

function SharePostForm(props) {
  const dispatch = useDispatch();
  const selectedPost = useSelector((state) => state.post.selectedPost);
  const userId = useSelector((state) => state.user.userId);
  const [caption, setCaption] = React.useState();

  const handleSubmit = () => {
    const postShare = {
        caption: caption,
        userId: userId,
        post: selectedPost
    }
    dispatch(savePostShare(postShare));
    props.closeModal()
  };

  return (
    <div>
      <label className="form-label">
        Add a caption you want to share with this post
      </label>
      <input
        type="text"
        className="form-control mb-3"
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
      />
      <button
        className="btn btn-success"
        onClick={handleSubmit}
      >
        SHARE
      </button>
    </div>
  );
}

export default SharePostForm;
