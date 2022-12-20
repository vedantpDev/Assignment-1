import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";
import "../css/Header.css";

const Header = () => {
  const { user } = useSelector((store) => store.bookData);

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg "
        style={{ backgroundColor: "thistle" }}
      >
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/booklist">
                  Books
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="avtar">
          <Avatar sx={{ bgcolor: deepOrange[500] }}>
            {user.email.charAt(0).toUpperCase()}
          </Avatar>
        </div>
        <p>{user.email}</p>
      </nav>
    </div>
  );
};

export default Header;
