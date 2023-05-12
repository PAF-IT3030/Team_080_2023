import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPostsByUserId } from "../../app/actions/post.actions";
import { getPostShareByUserId } from "../../app/actions/postshare.actions";
import Posts from "../../Components/Posts";
import SharedPostsList from "../../Components/SharedPostsList";

function UserPosts() {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post);
  const postshare = useSelector((state) => state.postshare);
  const [postOptionSelected, setPostOptionSelected] = useState(true);

  useEffect(() => {
    if (userId) {
      dispatch(getPostsByUserId(userId));
      dispatch(getPostShareByUserId(userId));
    }
  }, [dispatch, userId]);

  return (
    <div>
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6">
          <nav>
            <div class="nav nav-tabs tab-profile" id="nav-tab" role="tablist">
              <button
                class="nav-link active"
                id="nav-home-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-home"
                type="button"
                role="tab"
                aria-controls="nav-home"
                aria-selected="true"
              >
                POSTS
              </button>
              <button
                class="nav-link"
                id="nav-profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-profile"
                type="button"
                role="tab"
                aria-controls="nav-profile"
                aria-selected="false"
              >
                SHARED POSTS
              </button>
            </div>
          </nav>
          <div class="tab-content" id="nav-tabContent">
            <div
              class="tab-pane fade show active"
              id="nav-home"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
            >
              <h3>POSTS</h3>
              <hr />
              <Posts posts={post.posts} fetchType="GET_ALL_POSTS_USER" />
            </div>
            <div
              class="tab-pane fade"
              id="nav-profile"
              role="tabpanel"
              aria-labelledby="nav-profile-tab"
            >
              {" "}
              <h3>SHARED POSTS</h3>
              <hr />
              <SharedPostsList
                posts={postshare.posts}
                fetchType="GET_ALL_POSTS_USER"
              />
            </div>
          </div>
        </div>
        <div className="col-3"></div>
      </div>
    </div>
  );
}

export default UserPosts;
