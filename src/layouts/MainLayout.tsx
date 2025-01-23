import { Footer, Header } from "@/components/layout"
import { Outlet } from "react-router-dom"
import { actSetUser } from "@/store/auth/authSlice";
import { useAppDispatch } from "@/store/hooks";
import { useLayoutEffect } from "react";
import {  useSearchParams } from 'react-router-dom';
const MainLayout = () => {
      const dispatch = useAppDispatch();
    const [searchParams, setSearchParams] = useSearchParams();
    useLayoutEffect(() => {
      const cookieSet = searchParams.get("cookieSet");
      if (cookieSet === "true") {
        dispatch(actSetUser());
        setSearchParams({});
      }
    }, [searchParams, setSearchParams, dispatch]);
  return (
    <div className="min-h-screen bg-gray-50 pt-20 md:pt-36 ">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default MainLayout