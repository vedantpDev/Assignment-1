import React from "react";
import { NavLink } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import Tooltip from "@mui/material/Tooltip";
import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();
  // const Logout = () => {
  //   localStorage.removeItem("auth-token");
  //   navigate("/login");
  // };
  return (
    <div>
      Contact
      <p>
        <NavLink to="/about">Go to About Page</NavLink>{" "}
      </p>
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
}

export default Contact;
