import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import axios from "axios";

export const Login = () => {
  const [name, setName] = useState({});
  const currentTime = new Date().getTime();
  console.log(currentTime)
  const expiryTime = currentTime + 10 * 1000;
  console.log(expiryTime)

  const changeHanlder = (e) => {
    setName({ ...name, [e.target.name]: e.target.value });
  };
  const storeData = () => {
    axios
      .post("https://fakestoreapi.com/auth/login", name)
      .then((res) => localStorage.setItem("token", res.data.token));
    localStorage.setItem("expiryTime", expiryTime);
  };
  console.log(name);
  return (
    <div>
      <div className="d-flex align-items-center auth px-0">
        <div className="row w-100 mx-0">
          <div className="col-lg-4 mx-auto">
            <div className="auth-form-light text-left py-5 px-4 px-sm-5">
              <div className="brand-logo ">
                <img src={require("../../assets/images/logo.svg")} alt="logo" />
              </div>
              <h4>Hello! let's get started</h4>
              <h6 className="font-weight-light">Sign in to continue.</h6>
              <Form className="pt-3">
                <Form.Group className="d-flex search-field">
                  <Form.Control
                    type="email"
                    placeholder="Username"
                    name="username"
                    onChange={changeHanlder}
                    size="lg"
                    className="h-auto"
                  />
                </Form.Group>
                <Form.Group className="d-flex search-field">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={changeHanlder}
                    size="lg"
                    className="h-auto"
                  />
                </Form.Group>
                <div className="mt-3 text-center">
                  <button
                    className=""
                    style={{ border: "none", background: "transparent" }}
                    onClick={storeData}
                  >
                    <Link
                      className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                      to="/dashboard"
                    >
                      SIGN IN
                    </Link>
                  </button>
                </div>
                <div className="my-2 d-flex justify-content-between align-items-center">
                  <div className="form-check">
                    <label className="form-check-label text-muted">
                      <input type="checkbox" className="form-check-input" />
                      <i className="input-helper"></i>
                      Keep me signed in
                    </label>
                  </div>
                  <a
                    href="!#"
                    onClick={(event) => event.preventDefault()}
                    className="auth-link text-black"
                  >
                    Forgot password?
                  </a>
                </div>
                <div className="mb-2">
                  <button
                    type="button"
                    className="btn btn-block btn-facebook auth-form-btn"
                  >
                    <i className="mdi mdi-facebook mr-2"></i>Connect using
                    facebook
                  </button>
                </div>
                <div className="text-center mt-4 font-weight-light">
                  Don't have an account?{" "}
                  <Link to="/user-pages/register" className="text-primary">
                    Create
                  </Link>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
