import React, { useState } from "react";
import { message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { request } from "../../helper/api.helper";
const RegisterPage = () => {
  const [image, setImage] = useState(null);
  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    tel: "",
    dob: "",
    gender: "",
  });
  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();
    var userForm = new FormData();
    userForm.append("firstname", userData.firstname);
    userForm.append("lastname", userData.lastname);
    userForm.append("gender", userData.gender);
    userForm.append("email", userData.email);
    userForm.append("password", userData.password);
    userForm.append("tel", userData.tel);
    userForm.append("dob", userData.dob);
    userForm.append("customer_image", image, image.filename);
    var http = "http://localhost:8090/customer/register";
    axios
      .post(http, userForm)
      .then((res) => {
        setTimeout(() => {
          message.success(res.data.message);
          navigate("/login");
        }, 1000);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleChangeImage = (e) => {
    var imageObject = e.target.files[0];
    setImage(imageObject);
  };
  return (
    <div>
      <div className="offset-lg-3 col-lg-6">
        <form className="container" onSubmit={handlesubmit}>
          <div className="card">
            <div className="card-header">
              <h1>User Registeration</h1>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Firstname<span className="errmsg">*</span>
                    </label>
                    <input
                      className="form-control"
                      onChange={(e) => {
                        setUserData({ ...userData, firstname: e.target.value });
                      }}
                    ></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Lastname <span className="errmsg">*</span>
                    </label>
                    <input
                      className="form-control"
                      onChange={(e) => {
                        setUserData({ ...userData, lastname: e.target.value });
                      }}
                    ></input>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label>
                      Email <span className="errmsg">*</span>
                    </label>
                    <input
                      className="form-control"
                      onChange={(e) => {
                        setUserData({ ...userData, email: e.target.value });
                      }}
                    ></input>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label>
                      {" "}
                      Password <span className="errmsg">*</span>
                    </label>
                    <input
                      className="form-control"
                      type="password"
                      onChange={(e) => {
                        setUserData({ ...userData, password: e.target.value });
                      }}
                    ></input>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label>
                      Phone <span className="errmsg">*</span>
                    </label>
                    <input
                      className="form-control"
                      onChange={(e) => {
                        setUserData({ ...userData, tel: e.target.value });
                      }}
                    ></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <label>Gender</label>
                  <br></br>
                  <input
                    type="radio"
                    checked={userData.gender === "male"}
                    onChange={(e) => {
                      setUserData({ ...userData, gender: e.target.value });
                    }}
                    name="gender"
                    value="male"
                    className="app-check"
                  ></input>
                  <label>Male</label>
                  <input
                    type="radio"
                    checked={userData.gender === "female"}
                    onChange={(e) => {
                      setUserData({ ...userData, gender: e.target.value });
                    }}
                    name="gender"
                    value="female"
                    className="app-check"
                  ></input>
                  <label>Female</label>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Date of Birth <span className="errmsg"></span>
                    </label>
                    <input
                      className="form-control"
                      type="date"
                      onChange={(e) => {
                        setUserData({ ...userData, dob: e.target.value });
                      }}
                    ></input>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="form-group">
                    <label>Upload Your photo</label>
                    <input
                      type="file"
                      className="form-control"
                      onChange={handleChangeImage}
                    ></input>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <button type="submit" className="btn btn-primary">
                Register
              </button>{" "}
              |
              <Link
                to={"/login"}
                className="btn btn-danger"
                style={{ marginLeft: "5px" }}
              >
                Close
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
