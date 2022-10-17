import React from "react";
import { useLocation, Navigate } from "react-router-dom";

function UnauthGuard({ children }) {
  const user = JSON.parse(localStorage?.getItem("user"));
  let location = useLocation();

  if (!user) return children;
  return <Navigate to="/authenticated" state={{ from: location }} replace />;
}

export default UnauthGuard;
