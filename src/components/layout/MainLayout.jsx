import React from "react";
import { Outlet } from "react-router";
import Navbar from "./navbar";
import Footer from "./footer";

export default function () {
  return (
    <>
      <Navbar/>
      {/* content in each page */}
      <Outlet />
      {/* footer */}
      <Footer></Footer>
    </>
  );
}
