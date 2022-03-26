import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import ActionBar from "../ActionBar";
import MenuBar from "../MenuBar";
import Spinner from "../Spinner";

function MainLayout() {
  const loading = useAppSelector((state) => state.user.isLoading);
  const user = useAppSelector((state) => state.user.info);
  if (loading)
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        <Spinner classSize="w-10 h-10" />
      </div>
    );

  if (!user) return <Navigate to="/login" />;

  return (
    <div className="main-container">
      <MenuBar />
      <Outlet />
      <ActionBar />
    </div>
  );
}

export default MainLayout;
