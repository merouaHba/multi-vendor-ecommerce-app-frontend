import { useAppSelector } from "@/store/hooks";
import { Navigate, Outlet } from "react-router-dom";

const GuestGuard = ({
  children,
}: {
  children?: React.ReactNode;
  }) => {
  const {  user } = useAppSelector((state) => state.auth);
  const isSeller =  user && user.role === "seller";
 
  if (isSeller) {
    return <Navigate to="/seller/dashboard"  replace />;
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



export default GuestGuard
