import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser, updateUserById } from "../../app/actions/user.actions";
import { deleteUserById } from "../../app/actions/user.actions";
import storage from "../../util/firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

function Profile(props) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const [username, setUsername] = useState(user?.user?.username);
  const [email, setEmail] = useState(user?.user?.email);
  const [contactNumber, setContactNumber] = useState(user?.user?.contactNumber);
  const [country, setCountry] = useState(user?.user?.country);
  const [profileImage, setProfileImage] = useState(user?.user?.profileImage ? user.user.profileImage : null);

  useEffect(() => {
    dispatch(getUser(user.userId));
  }, [dispatch]);

  const handleSubmit = () => {
    const userUpdate = {
      id: user.user.id,
      username,
      email,
      contactNumber,
      country,
      profileImage
    };

    dispatch(updateUserById(userUpdate));

    props.closeModal();
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete your account?")) {
      dispatch(deleteUserById(user.userId));
      
      props.closeModal();
    }
  };
  

  const uploadImage = (e) => {
    const file = e.target.files[0];

    if (!file) {
      alert("Please upload an image first!");
    }

    const storageRef = ref(storage, `/users/${file.name}`);

    // progress can be paused and resumed. It also exposes progress updates.
    // Receives the storage reference and the file to upload.
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      },
      (err) => console.log(err),
      () => {
        // download url
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          setProfileImage(url);
        });
      }
    );
  };

  return (
    <div>
      <h1 className="text-center">Update Profile</h1>
      <hr />
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-6 offset-md-3">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder="Enter your username"
                  value={username}
                  readOnly
                />
              </div>
              <div className="mb-3">
                <label htmlFor="contactNumber" className="form-label">
                  Contact Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="contactNumber"
                  placeholder="Enter your contact number"
                  value={contactNumber}
                  onChange={(e) => {
                    setContactNumber(e.target.value);
                  }}
                  pattern="[0-9]{10}"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="country" className="form-label">
                  Country
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="country"
                  placeholder="Enter your country"
                  value={country}
                  onChange={(e) => {
                    setCountry(e.target.value);
                  }}
                />
              </div>
              <div className="mb-3">
                {profileImage && (
                  <img
                    src={profileImage}
                    className="img-fluid me-3"
                    alt="Profile"
                  />
                )}
                <label htmlFor="country" className="form-label">
                  Profile Image
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="country"
                  placeholder="Enter your country"
                  onChange={(e) => {
                    uploadImage(e);
                  }}
                />
                <button className="btn btn-danger w-100 mb-3" onClick={()=>{
                  setProfileImage("https://i.discogs.com/57iTb7iRduipsfyksYodpaSpz_eEjtg52zPBhCwBPhI/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTY5Nzg2/ODEtMTU0OTgxMTIz/OC02NjMxLmpwZWc.jpeg")}}>Remove Profile picture</button>
              </div>
              <button
                className="btn btn-outline-primary w-100 mb-3"
                onClick={() => {
                  props.closeModal();
                }}
              >
                CANCEL
              </button>
              <button
                type="submit"
                className="btn btn-outline-success w-100 mb-3"
              >
                UPDATE
              </button>
              <button className="btn btn-outline-danger w-100 mb-3" onClick={() => handleDelete()}>
                DELETE
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
