// SellerGuard.js
import { Navigate, useLocation, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const SellerGuard = () => {
  const { isAuthenticated, user } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/seller/login" state={{ from: location }} replace />;
  }

  if (user.role !== "seller") {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default SellerGuard;