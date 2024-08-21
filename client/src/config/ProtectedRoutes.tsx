// ProtectedRoute.tsx
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

interface ProtectedRouteProps {
  element: JSX.Element;
}

const ProtectedRoute = ({ element }: ProtectedRouteProps) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? element : <Navigate to="/" />;
};

export default ProtectedRoute;
