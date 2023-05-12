import React, { useEffect } from "react";
import Posts from "../../Components/Posts";
import { useDispatch, useSelector } from "react-redux";
import { getPostShareByUserId } from "../../app/actions/postshare.actions";
import SharedPostsList from "../../Components/SharedPostsList";

function SharedPosts() {
  const dispatch = useDispatch();
  const post = useSelector((state) => state.postshare);
  const comment = useSelector((state) => state.comment);
  const user = useSelector((state) => state.user);
  useEffect(() => {
    if (user.userId) {
      dispatch(getPostShareByUserId(user.userId));
    }
  }, [dispatch, user.userId]);
  return (
    <div>
        <SharedPostsList posts={post.posts} fetchType="GET_ALL_POSTS_SHARED"/>
    </div>
  );
}

export default SharedPosts;
