import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { getUser, logout } from "../../features/user/userSlice";
import ActionBar from "../ActionBar";
import MenuBar from "../MenuBar";
import Spinner from "../Spinner";

function MainLayout() {
  const dispatch = useDispatch();
  const loading = useAppSelector((state) => state.user.isLoading);
  const user = useAppSelector((state) => state.user.info);

  useEffect(() => {
    if (localStorage.getItem("shopingify_token")) {
      dispatch(getUser());
    } else {
      dispatch(logout());
    }
  }, [dispatch]);

  if (loading)
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        <Spinner classSize="w-10 h-10" />
      </div>
    );
  return (
    <div className="main-container">
      <MenuBar />
      <Outlet />
      <ActionBar />
    </div>
  );
}

export default MainLayout;
