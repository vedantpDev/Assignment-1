import React, { useState, useEffect } from "react";
import "../css/Login.css";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import LoginIcon from "@mui/icons-material/Login";
import Tooltip from "@mui/material/Tooltip";
import Signin from "./Signin";
import { loginAction } from "../Action/action";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [show, setShow] = useState(false);
  const showSignin = () => setShow(true);
  const closeSignin = () => setShow(false);

  const clickHandler = (e) => {
    e.preventDefault();
    dispatch(loginAction(formData));
  };

  const { user } = useSelector((store) => store.bookData);
  // Here we have to navi gate page at home after Login with use of useEffect

  useEffect(() => {
    if (user.email) {
      navigate("/booklist");
    }
  }, [user]);

  const changeHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <div>
      <div>
        <Tooltip title="Sign In">
          <button
            onClick={showSignin}
            className="btn btn-primary"
            style={{ margin: "12px" }}
          >
            <LoginIcon />
          </button>
        </Tooltip>
      </div>
      <form>
        <h2>Login Form</h2>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
            onChange={changeHandler}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="password"
            onChange={changeHandler}
          />
        </div>
        <button
          onClick={clickHandler}
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
      <Signin show={show} showSignin={showSignin} closeSignin={closeSignin} />
    </div>
  );
};

export default Login;
