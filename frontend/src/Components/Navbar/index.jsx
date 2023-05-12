import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getUser } from "../../app/actions/user.actions";
import { logout } from "../../app/slices/user.slice";
import Profile from "../../Pages/Profile";
import NotificationDropdown from "../NotificationDropdown";
import UserImage from "../../assets/user.jpeg";
import LogoImage from "../../assets/foodies.png";

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

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  useEffect(() => {
    if (
      sessionStorage.getItem("Authorization") &&
      sessionStorage.getItem("userId")
    ) {
      if (!user.loginStatus) {
        dispatch(getUser(sessionStorage.getItem("userId")));
      }
    }

    if (!sessionStorage.getItem("Authorization")) {
      navigate("/login");
    }
  }, [dispatch, user.loginStatus]);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-transparent p-3">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              src={LogoImage}
              className="tastebuds logo"
              alt=" "
              height="60px"
              width="85px"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="d-flex">
              <input type="text" placeholder="Search" className="form-control me-2" />
              <button className="btn btn-primary">Search</button>
          </div>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            {!user.loginStatus && (
              <>
                <div className="d-flex">
                  <Link to="/login" className="btn btn-warning me-2">
                    Login
                  </Link>
                  <Link to="/signup" className="btn btn-primary me-2">
                    Sign Up
                  </Link>
                </div>
              </>
            )}
            {user.loginStatus && (
              <>
                <div className="d-flex">
                <Link className="nav-link me-2 text-dark" to="/">
                    Feed
                  </Link>
                  <Link className="nav-link me-2 text-dark" to="/user">
                    Profile
                  </Link>
                  <Link
                    onClick={() => {
                      openModal();
                    }}
                    className="text-dark text-decoration-none p-2"
                  >
                    <img
                      src={
                        user?.user?.profileImage
                          ? user.user.profileImage
                          : UserImage
                      }
                      className="user-profile-image img-fluid me-3"
                      alt="Profile"
                    />
                    <span className="p-2 fw-bold">{user?.user?.username}</span>
                  </Link>
                  <NotificationDropdown />

                  <button
                    className="btn btn-outline-danger me-2"
                    onClick={() => {
                      dispatch(logout());
                    }}
                  >
                    Logout
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </nav>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        // style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="p-2">
          <Profile closeModal={closeModal} />
        </div>
      </Modal>
    </div>
  );
}

export default Navbar;
