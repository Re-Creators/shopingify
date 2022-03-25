import React from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";

interface Props {
  children: JSX.Element;
}

function AuthLayout({ children }: Props) {
  const user = useAppSelector((state) => state.user.info);

  if (user) return <Navigate to="/" />;
  return children;
}

export default AuthLayout;
