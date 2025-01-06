// AuthGuard.js
import { Navigate, useLocation, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const AuthGuard = ({ role }) => {
  const { isAuthenticated, user } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (role && user.role !== role) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};



export default AuthGuard
