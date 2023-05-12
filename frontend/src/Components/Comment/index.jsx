import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { GiCancel } from "react-icons/gi";
import { MdDoneOutline } from "react-icons/md";
import UserImage from "../../assets/user.jpeg";
import {
  getPosts,
  getPostsByUserId,
} from "../../app/actions/post.actions";
import {
  deleteCommentById,
  updateCommentById,
} from "../../app/actions/comment.actions";

function Comment({ postId, comment, postUserId, fetchType }) {
  const dispatch = useDispatch();
  const [commentEditable, setCommentEditable] = useState(false);
  const user = useSelector((state) => state.user);
  const [text, setText] = React.useState(comment.text);

  const handleSubmitComment = async() => {
    const updatedComment = {
      id: comment.id,
      postId: postId,
      userId: user.userId,
      text: text,
    };
    dispatch(updateCommentById(updatedComment));
    if (fetchType === "GET_ALL_POSTS") {
      await dispatch(getPosts());
    }
    if (fetchType === "GET_ALL_USER_POSTS") {
      await dispatch(getPostsByUserId(postUserId));
    }
    if (fetchType === "GET_ALL_POSTS_USER") {
      await dispatch(getPostsByUserId(postUserId));
    }
    setText(text);
    setCommentEditable(false)
  };
  return (
    <div className="row mb-2" key={comment.id}>
      <div className="col-10 comment-div">
        {commentEditable ? (
          <input
            type="text"
            className="form-control comment-div"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        ) : (
          <p className="mb-2 p-2">
            <img
              src={comment.profileImage ? comment.profileImage : UserImage}
              className="post-comment-profile-image img-fluid me-3"
              alt="Profile"
            />
            <strong className="fw-bold me-3">{comment.username}</strong>{" "}
            {comment.text}
          </p>
        )}
      </div>

      <div className="col-2 comment-div">
        <div className="row p-2">
          <div className="row">
            <div className="col-6">
              {commentEditable ? (
                <div className="col-1">
                  <GiCancel
                    className="react-icons"
                    size={25}
                    onClick={() => {
                      setCommentEditable(false);
                    }}
                  />
                </div>
              ) : (
                user.userId === comment.userId && (
                  <AiFillEdit
                    className="react-icons"
                    size={25}
                    onClick={() => {
                      setCommentEditable(true);
                    }}
                  />
                )
              )}
            </div>
            <div className="col-6">
              {commentEditable ? (
                <MdDoneOutline
                  className="react-icons"
                  size={25}
                  onClick={() => {
                    handleSubmitComment();
                  }}
                />
              ) : (
                (user.userId === comment.userId ||
                  user.userId === postUserId) && (
                  <AiFillDelete
                    className="react-icons"
                    size={25}
                    onClick={async () => {
                      await dispatch(deleteCommentById(comment.id));
                      if (fetchType === "GET_ALL_POSTS") {
                        await dispatch(getPosts());
                      }
                      if (fetchType === "GET_ALL_USER_POSTS") {
                        await dispatch(getPostsByUserId(postUserId));
                      }
                      if (fetchType === "GET_ALL_POSTS_USER") {
                        await dispatch(getPostsByUserId(postUserId));
                      }
                    }}
                  />
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comment;
