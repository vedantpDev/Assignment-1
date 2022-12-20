import React from "react";
import { Outlet } from "react-router";
import Footer from "../component/Footer";
import Header from "../component/Header";

const Homepage = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Homepage;
