import  Cookies  from 'js-cookie';
import { authLogin, actAuthLogout } from "@/store/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useSearchParams } from 'react-router-dom';
import axios from "@/services/api/axios.config";
import getCookie from '@/utils/getCookie';

const useHeader = () => {
    const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    const CheckCookies = async() => {
    
        const accessToken = getCookie("accessToken");

        let user;
        try {
          user = JSON.parse(getCookie("user") as string);
          console.log(user, accessToken);
        } catch (error) {
          console.log(error);
          return;
        }
        if (accessToken && user) {
          dispatch(authLogin({ accessToken, user }));
          Cookies.remove("accessToken");
          Cookies.remove("user");
        }
   
    }
    const cookieSet = searchParams.get('cookieSet')
    
    if (cookieSet === "true") {
      const setCookies = async () => {
        await axios.get('/auth/set-cookie')
        
       
        setSearchParams({});
      }
      setCookies()

    }
      CheckCookies();
  }, [searchParams, setSearchParams, dispatch]);
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
