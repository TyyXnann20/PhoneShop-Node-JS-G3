import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./RegisterStyles.css";

const Signup = () => {
  const [gender, genderchange] = useState("female");
  const handleSubmit = (e) => {};

  return (
    <div className="signup_container">
      <div className="signup_form_container">
        <div className="left">
          <h1>Welcome Back</h1>
          <Link to="/login">
            <button type="button" className="white_btn">
              Sing in
            </button>
          </Link>
        </div>
        <div className="right">
          <form className="form_container" onSubmit={null}>
            <h1>Create Account</h1>
            <input
              className="input"
              type="text"
              placeholder="First Name"
              name="firstName"
            />

            <input
              className="input"
              type="email"
              placeholder="Email"
              name="email"
            />
            <input
              className="input"
              type="password"
              placeholder="Password"
              name="password"
            />
            <div className="col-lg-6 input">
              <div className="form-group">
                <label>
                  Date of Birth <span className="errmsg"></span>
                </label>
                <input
                  className="form-control"
                  type="date"
                //   onChange={(e) => {
                //     setDob(e.target.value);
                //   }}
                ></input>
              </div>
            </div>

            <button type="submit" className="green_btn">
              Sing Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
