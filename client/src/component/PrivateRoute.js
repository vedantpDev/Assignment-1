import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children }) => {
  // const token = localStorage.getItem("auth-token");
  const { user } = useSelector((store) => store.bookData);
  return user.email ? children : <Navigate to={"/login"} />;
};

export default PrivateRoute;
