import React, { useEffect } from "react";
import Posts from "../../Components/Posts";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../app/actions/post.actions";
import NewUsersSuggest from "../../Components/NewUsersSuggest";

function Home() {
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post);
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <div className="container mt-5 mb-5 row">
      <div className="col-md-3"></div>
      <div className="col-md-8">
        <div className="row">
          <div className="col-12">
            <NewUsersSuggest />
          </div>
          <div className="col-12 mt-3">
            <Posts posts={post.posts} fetchType="GET_ALL_POSTS" />
          </div>
        </div>
      </div>
      <div className="col-md-2"></div>
    </div>
  );
}

export default Home;
