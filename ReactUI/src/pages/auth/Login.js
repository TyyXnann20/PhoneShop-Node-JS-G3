import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import { message } from "antd";

const LoginForm = () => {
  const nav = useNavigate();
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    var http = "http://localhost:8090/customer/login";
    e.preventDefault();
    axios
      .post(http, userLogin)
      .then((res) => {
        var data = res.data;
        if (data.userData && data.is_login) {
          if (data.userData.role === "Admin") {
            localStorage.setItem("isAdmin", data.is_login);
          } else {
            localStorage.setItem("isClient", data.is_login);
          }
          setTimeout(() => {
            message.success(data.message);
            nav("/");
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="login_container">
      <div className="login_form_container">
        <div className="left">
          <form className="form_container" onSubmit={handleLogin}>
            <h1>Login to Your Account</h1>
            <input
              type="email"
              placeholder="Email"
              name="email"
              required
              className="input"
              onChange={(e) => {
                setUserLogin({ ...userLogin, email: e.target.value });
              }}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              required
              className="input"
              onChange={(e) => {
                setUserLogin({ ...userLogin, password: e.target.value });
              }}
            />

            <button type="submit" className="btn btn-primary">
              Sing In
            </button>
          </form>
        </div>
        <div className="right">
          <h1>New Here ?</h1>
          <Link to="/register">
            <button type="button" className="white_btn">
              Sing Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
