import React from "react";
import { useSelector } from "react-redux";
import UserImage from "../../assets/user.jpeg";

function UserProfile() {
  const user = useSelector((state) => state.user.user);
  return (
    <div className="card post-card">
      <div className="card-body text-center">
        <img
          className="img-circle user-image image-fluid mb-3"
          src={user?.profileImage ? user.profileImage : UserImage}
          alt="ss"
        />
        <h5 className="card-title">{user?.username}</h5>
        <p className="card-title">{user?.email}</p>
        <p className="card-title">{user?.contactNumber}</p>

      </div>
    </div>
  );
}

export default UserProfile;
