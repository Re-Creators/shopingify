import React from "react";
import { Outlet } from "react-router-dom";
import ActionBar from "../ActionBar";
import MenuBar from "../MenuBar";

function Layout() {
  return (
    <div className="main-container">
      <MenuBar />
      <Outlet />
      <ActionBar />
    </div>
  );
}

export default Layout;
