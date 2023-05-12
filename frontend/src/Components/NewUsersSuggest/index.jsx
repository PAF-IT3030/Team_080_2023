import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../app/actions/user.actions";
import UserImage from "../../assets/user.jpeg";
import { Link } from "react-router-dom";
import FollowButton from "./FollowButton";
function NewUsersSuggest() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [usersList, setUsersList] = useState([]);
  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);
  useEffect(() => {
    setUsersList(user.users);
  }, [user.users]);

  return (
    <div>
      <div className="col-md-2"></div>
      <div className="row card p-3 post-card">
        <h5>People you may know...</h5>
        {user &&
          usersList.length &&
          [...usersList]
            .reverse()
            .slice(-5)
            .map((userItem) => {
              return (
                <div className="col-12 mt-3 " key={userItem.id}>
                  <div className="card ">
                    <div className="card-body newusercard">
                      <div className="row">
                        <div className="col-12">
                          <Link
                            className="text-decoration-none text-dark me-3"
                            to={{
                              pathname: `/user/${userItem.id}`,
                            }}
                          >
                            <img
                              src={
                                userItem.profileImage
                                  ? userItem.profileImage
                                  : UserImage
                              }
                              className="post-profile-image img-fluid me-3"
                              alt="Profile"
                            />
                            <span className="text-left">
                              {userItem.username} <FollowButton userDetails={userItem} fetchType="SUGGESTION"/>
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );
}

export default NewUsersSuggest;
