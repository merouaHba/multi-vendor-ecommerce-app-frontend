import  Cookies  from 'js-cookie';
import { authLogin, actAuthLogout } from "@/store/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useSearchParams } from 'react-router-dom';
import axios from "@/services/api/axios.config";

const useHeader = () => {
    const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    const CheckCookies = () => {
    
      const accessToken = Cookies.get("accessToken");
      const user = Cookies.get("user");
      if (accessToken && user) {
        authLogin({ accessToken, user })
        Cookies.remove("accessToken");
        Cookies.remove("user");
      }
    }
const cookieSet = searchParams.get('cookieSet')
    if (cookieSet === "true") {
      const setCookies = async () => {
        await axios.get('/auth/set-cookie')
    
        CheckCookies()
        setSearchParams({  });
      }
      setCookies()
}
  }, [searchParams, setSearchParams]);
  const { error, loading, accessToken, user } = useAppSelector(
    (state) => state.auth
  );
  const isAuthenticated = accessToken && user;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const logout = async () => {
    dispatch(actAuthLogout())
      .unwrap()
      .then(() => {})
      .catch((error: string) => {
        toast.error(error, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      });
  };

  return {
    error,
    loading,
    accessToken,
    user,
    logout,
    isMenuOpen,
    setIsMenuOpen,
    searchQuery,
    setSearchQuery,
    isAuthenticated,
  };
};

export default useHeader;
