import React from "react";
import { useNavigate, NavLink } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import Tooltip from "@mui/material/Tooltip";

const About = () => {
  const navigate = useNavigate();

  // const Logout = () => {
  //   localStorage.removeItem("auth-token");
  //   navigate("/login");
  // };

  return (
    <div>
      About
      <NavLink to="/">Go to Home </NavLink>
      {/* <Tooltip title="Logout" className="logout-btn">
        <button
          onClick={Logout}
          className="btn btn-danger"
          style={{ marginLeft: "15px" }}
        >
          <LogoutIcon />
        </button>
      </Tooltip> */}
    </div>
  );
};

export default About;
