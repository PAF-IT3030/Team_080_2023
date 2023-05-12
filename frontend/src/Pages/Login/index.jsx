import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../../app/actions/user.actions";
import LoginImage from "../../assets/Foodie.svg";

function Login() {
  const dispatch = useDispatch();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      username,
      password,
    };
    dispatch(login(user));
  };
  return (
    <div className="container mt-5 mb-5 card" style={{backgroundColor: "#cccccc7a", height: "420px", width:"1000px"}}>
      <div className="card-body">
        <div className="row">
          <div className="col-6">
            <div className="text-center">
              <h1 className="mt-2">Share Your Foodie Moments</h1>
              <img
                src={LoginImage}
                className="image-fluid"
                alt="login"
                width={420}
                height={300}
              />
            </div>
          </div>
          <div className="col-6">
            <form onSubmit={handleSubmit}>
              <div className="mt-5 mb-3">
                <label className="form-label">Username</label>
                <input
                  type="text"
                  className="form-control input-width-login"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your username with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control input-width-login"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button type="submit" className="btn btn-success">
                LOGIN
              </button>
            </form>
            <hr />
            <Link to="/forgotpassword" className="text-decoration-none">
              Forgot Password
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
