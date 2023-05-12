import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deletePostShareById,
  updatePostShareById,
  getPostShareByUserId,
} from "../../app/actions/postshare.actions";
import UserImage from "../../assets/user.jpeg";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { GiCancel } from "react-icons/gi";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function SharedPostCard({ post, fetchType }) {
  const dispatch = useDispatch();
  const [editable, setEditable] = useState(false);
  const user = useSelector((state) => state.user);
  const [captionEdit, setCaption] = React.useState(post.caption);

  const handleSubmit = async () => {
    const newPost = {
      id: post.id,
      caption: captionEdit,
    };
    await dispatch(updatePostShareById(newPost));
    if (fetchType === "GET_ALL_POSTS_SHARED") {
      await dispatch(getPostShareByUserId(user.userId));
    }
    setCaption(captionEdit);
    setEditable(false);
  };

  return (
    <div className="container p-2 card mb-4 post-card">
      <div className="card-body">
        <div className="row">
          <div className="col-10">
            {editable ? (
              <>
                <input
                  type="text"
                  className="form-control mb-3"
                  value={captionEdit}
                  onChange={(e) => setCaption(e.target.value)}
                />
              </>
            ) : (
              <>
                <p>{post.caption}</p>
              </>
            )}
          </div>
          <div className="col-2">
            {user.userId === post.userId && (
              <div className="col-12">
                {editable && (
                  <>
                    <GiCancel
                      className="react-icons me-3"
                      size={25}
                      onClick={() => {
                        setEditable(false);
                      }}
                    />
                    <IoCheckmarkDoneSharp
                      className="react-icons"
                      size={25}
                      onClick={() => {
                        handleSubmit();
                      }}
                    />
                  </>
                )}
                {!editable && (
                  <>
                    <AiFillEdit
                      className="react-icons me-3"
                      size={25}
                      onClick={() => {
                        setEditable(true);
                      }}
                    />
                    <AiFillDelete
                      className="react-icons"
                      size={25}
                      onClick={() => {
                        dispatch(deletePostShareById(post.id));
                      }}
                    />
                  </>
                )}
              </div>
            )}
          </div>
        </div>

        <hr />
        <div className="row">
          <div className="col-4">
            <img
              src={post.post?.profileImage ? post.post.profileImage : UserImage}
              className="post-profile-image img-fluid me-3"
              alt="Profile"
            />
            <span className="text-left">{post.post?.username}</span>
          </div>
        </div>
        <div className="row mt-2">
          <p>{post.post?.caption}</p>
        </div>
        <div className="row">
        <Slider>
          {post.post?.imgLink && post.post.imgLink.length && post.post.imgLink.map((imgLink) => (
            <div key={imgLink}>
              <img
                src={imgLink}
                className="card-img-top img-fluid"
                alt="postImages"
              />
            </div>
          ))}
        </Slider>
        </div>
      </div>
    </div>
  );
}

export default SharedPostCard;
