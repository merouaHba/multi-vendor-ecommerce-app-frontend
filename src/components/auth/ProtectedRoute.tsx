import { authLogout } from "@/store/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useEffect } from "react";
import { Navigate, useLocation, Outlet } from "react-router-dom";

const ProtectedRoute = ({
  role,
  children,
}: {
  role: string;
  children?: React.ReactNode;
  }) => {
  const dispatch = useAppDispatch();
  const token = localStorage.getItem("accessToken")
  useEffect(() => {
    if ( token=== null) {
      dispatch(authLogout())
    }
  },[token,dispatch]);
  const { accessToken, user } = useAppSelector((state) => state.auth);
  const isAuthenticated = accessToken && user;
  const location = useLocation();
 
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (role && user.role !== role) {
    return <Navigate to="/" replace />;
  }
  if (children) {
    return (
      <>
      { children }
    </>
    )
  }
  return <Outlet />;
};



export default ProtectedRoute
