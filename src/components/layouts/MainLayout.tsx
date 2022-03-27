import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { changeState } from "../../features/actionBarState/actionBarStateSlice";
import checkScreen from "../../helper/checkScreen";
import { ActionState } from "../../types/enum";
import ActionBar from "../ActionBar";
import MenuBar from "../MenuBar";
import Spinner from "../Spinner";

function MainLayout() {
  const user = useAppSelector((state) => state.user.info);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (checkScreen()) {
      dispatch(changeState(ActionState.HIDDEN));
    }
  }, [dispatch]);

  if (!localStorage.getItem("shopingify_token"))
    return <Navigate to="/login" />;

  if (!user)
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
