import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth"; // Make sure the path is correct

const ProtectedRoute: React.FC<{ element: React.ReactElement }> = ({
  element,
}) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? element : <Navigate to="/" />;
};

export default ProtectedRoute;
