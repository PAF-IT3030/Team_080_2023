import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import {
  deletePostById,
  updatePostById,
  likePostById,
  getPosts,
  getPostsByUserId,
} from "../../app/actions/post.actions";
import { getAllUsers } from "../../app/actions/user.actions";

import { saveNotification } from "../../app/actions/notification.action";

import { getPostToShareById } from "../../app/slices/post.slice";
import { saveComment } from "../../app/actions/comment.actions";
import storage from "../../util/firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import UserImage from "../../assets/user.jpeg";
import {
  AiOutlineLike,
  AiFillLike,
  AiOutlineComment,
  AiFillDelete,
  AiFillEdit,
} from "react-icons/ai";
import { TbShare3 } from "react-icons/tb";
import { GiCancel } from "react-icons/gi";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { MdSend } from "react-icons/md";
import Comment from "../Comment";
import SharePostForm from "../SharePostForm";
import { Link } from "react-router-dom";
import { getPostShareByUserId } from "../../app/actions/postshare.actions";
import FollowButton from "../NewUsersSuggest/FollowButton";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


Modal.setAppElement("div");
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const getUserByIdFunc = (users, userId) => {
  const result = users.filter(function (el) {
    return el.id === userId;
  });

  return result ? result[0] : null; // or undefined
};


function PostCard({ post, fetchType }) {
  const dispatch = useDispatch();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [editable, setEditable] = useState(false);
  const user = useSelector((state) => state.user);
  const [captionEdit, setCaption] = React.useState(post.caption);
  const [imgLinkEdit, setImgLinkEdit] = React.useState(post.imgLink);
  const [comment, setComment] = React.useState("");
  const [isLiked, setIsLiked] = React.useState(false);

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  useEffect(() => {
    if (post.likedby && post.likedby.length) {
      const userIdIndex = post.likedby.indexOf(user.userId);

      if (userIdIndex > -1) {
        setIsLiked(true);
      } else {
        setIsLiked(false);
      }
    }
  }, [user]);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  const handleSubmitComment = async () => {
    const newComment = {
      postId: post.id,
      userId: user.userId,
      text: comment,
    };
    await dispatch(saveComment(newComment));

    const newNotification = {
      message: "Commented by " + user.user.username + " on your post",
      userId: post.userId,
    };

    await dispatch(saveNotification(newNotification));
    if (fetchType === "GET_ALL_POSTS") {
      await dispatch(getPosts());
    }
    if (fetchType === "GET_ALL_USER_POSTS") {
      await dispatch(getPostShareByUserId(user.userId));
    }
    if (fetchType === "GET_ALL_POSTS_USER") {
      await dispatch(getPostShareByUserId(post.userId));
    }
    setComment("");
  };

  const handleSubmit = async () => {
    const newPost = {
      id: post.id,
      userId: user.userId,
      caption: captionEdit,
      imgLink: imgLinkEdit,
    };
    await dispatch(updatePostById(newPost));
    if (fetchType === "GET_ALL_POSTS") {
      await dispatch(getPosts());
    }
    if (fetchType === "GET_ALL_USER_POSTS") {
      await dispatch(getPostShareByUserId(user.userId));
    }
    if (fetchType === "GET_ALL_USER_POSTS") {
      await dispatch(getPostsByUserId(user.userId));
    }
    setEditable(false);
  };

  const uploadImage = (e) => {
    const files = e.target.files;
  
    if (files.length === 0) {
      alert("Please upload at least one image!");
      return;
    }
  
    // upload up to 4 images
    const maxImages = 4;
    const numImages = Math.min(maxImages, files.length);
  
    for (let i = 0; i < numImages; i++) {
      const file = files[i];
      const storageRef = ref(storage, `/posts/${file.name}`);
  
      const uploadTask = uploadBytesResumable(storageRef, file);
  
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        },
        (err) => console.log(err),
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            setImgLinkEdit((prevLinks) => [...prevLinks, url]);
          });
        }
      );
    }
  };

  const handleLikePost = async () => {
    const tempLikeArray = post.likedby ? post.likedby.slice() : [];
    const userId = user.userId.toString();
    const userIdIndex = tempLikeArray.indexOf(userId);

    if (userIdIndex > -1) {
      tempLikeArray.splice(userIdIndex, 1);
      setIsLiked(false);
    } else {
      tempLikeArray.push(userId);
      setIsLiked(true);
    }

    const likedPost = {
      id: post.id,
      likedby: tempLikeArray,
    };

    await dispatch(likePostById(likedPost));
    if (fetchType === "GET_ALL_POSTS") {
      await dispatch(getPosts());
    }
    if (fetchType === "GET_ALL_USER_POSTS") {
      await dispatch(getPostsByUserId(post.userId));
      await dispatch(getPostShareByUserId(user.userId));
    }
    if (fetchType === "GET_ALL_POSTS_USER") {
      await dispatch(getPostsByUserId(post.userId));
      await dispatch(getPostShareByUserId(post.userId));
    }
    const newNotification = {
      message: "Like by " + user.user.username + " on your post",
      userId: post.userId,
    };

    await dispatch(saveNotification(newNotification));
  };

  return (
    <div className="card mb-4 post-card">
      <div className="card-body">
        <div className="row">
          <div className="col-8">
            <Link
              className="text-decoration-none text-dark"
              to={{
                pathname: `/user/${post.userId}`,
              }}
            >
              <img
                src={post.profileImage ? post.profileImage : UserImage}
                className="post-profile-image img-fluid me-3"
                alt="Profile"
              />
              <span className="text-left">{post.username} </span>
            </Link>
            <FollowButton
              userDetails={getUserByIdFunc(user.users, post.userId)}
            />
          </div>
          <div className="col-2"></div>
          {user.userId === post.userId && (
            <div className="col-2">
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
                      dispatch(deletePostById(post.id));
                    }}
                  />
                </>
              )}
            </div>
          )}
        </div>
        <hr />
        <div className="row">
          {!editable && <p>{post.caption}</p>}

          {editable && (
            <input
              type="text"
              className="form-control mb-3"
              value={captionEdit}
              onChange={(e) => setCaption(e.target.value)}
            />
          )}
        </div>
        <div className="row">
        <Slider>
          {imgLinkEdit && imgLinkEdit.length && imgLinkEdit.map((imgLink) => (
            <div key={imgLink}>
              <img
                src={imgLink}
                className="card-img-top img-fluid"
                alt="postImages"
              />
            </div>
          ))}
        </Slider>
          {editable && (
            <input
              type="file"
              className="form-control"
              onChange={(e) => uploadImage(e)}
            />
          )}
        </div>
        <div className="row text-center container mt-3 mb-3">
          <div className="col-4">
            {isLiked ? (
              <AiFillLike
                className="react-icons me-2"
                size={25}
                onClick={handleLikePost}
              />
            ) : (
              <AiOutlineLike
                className="react-icons me-2"
                size={25}
                onClick={handleLikePost}
              />
            )}

            <span>{post.likedby ? post.likedby.length : 0}</span>
          </div>
          <div className="col-4">
            <AiOutlineComment className="react-icons me-2" size={25} />{" "}
            <span>{post.comments ? post.comments.length : 0}</span>
          </div>
          <div className="col-4">
            <TbShare3
              className="react-icons"
              size={25}
              onClick={() => {
                dispatch(getPostToShareById(post.id));
                openModal();
              }}
            />
          </div>
        </div>

        <div className="row mt-2">
          <div className="col-11">
            <input
              type="text"
              className="form-control mb-3"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>
          <div className="col-1">
            <MdSend
              className="react-icons"
              size={25}
              onClick={() => {
                handleSubmitComment();
              }}
            />
          </div>

          {post.comments &&
            post.comments.map((comment) => {
              return (
                <Comment
                  key={comment.id}
                  comment={comment}
                  postId={post.id}
                  postUserId={post.userId}
                  fetchType={fetchType}
                />
              );
            })}
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="p-2">
          <SharePostForm closeModal={closeModal} />
        </div>
      </Modal>
    </div>
  );
}

export default PostCard;
