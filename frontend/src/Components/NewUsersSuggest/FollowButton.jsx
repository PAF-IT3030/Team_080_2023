import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { followUserById, getAllUsers } from "../../app/actions/user.actions";
import { saveNotification } from "../../app/actions/notification.action";

function FollowButton({ userDetails, fetchType }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [followed, setFollowed] = useState(false);

  useEffect(() => {
    if (userDetails?.followedBy && userDetails.followedBy?.length) {
      const userIdIndex = userDetails.followedBy.indexOf(user.userId);

      if (userIdIndex > -1) {
        setFollowed(true);
      } else {
        setFollowed(false);
      }
    } else {
      setFollowed(false);
    }
  }, [user.users]);

  const handleOnFollow = async () => {
    const tempFollowingArray = userDetails.followedBy
      ? userDetails.followedBy.slice()
      : [];
    const userId = user.userId.toString();
    const userIdIndex = tempFollowingArray.indexOf(userId);

    if (userIdIndex > -1) {
      tempFollowingArray.splice(userIdIndex, 1);
      setFollowed(false);
    } else {
      tempFollowingArray.push(userId);
      setFollowed(true);
    }

    const followedUsers = {
      id: userDetails.id,
      followedBy: tempFollowingArray,
    };

    await dispatch(followUserById(followedUsers));
    await dispatch(getAllUsers());

    const newNotification = {
      message: "Followed by " + user.user.username,
      userId: userDetails.userId,
    };

    await dispatch(saveNotification(newNotification));
  };

  return (
    <>
      {followed ? (
        <button
          className="btn btn-warning btn-sm"
          onClick={handleOnFollow}
        >
          Unfollow
        </button>
      ) : (
        <button
          className="btn btn-warning btn-sm"
          onClick={handleOnFollow}
        >
          Follow
        </button>
      )}
    </>
  );
}

export default FollowButton;
