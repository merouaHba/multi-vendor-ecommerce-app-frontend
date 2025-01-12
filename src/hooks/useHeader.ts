import { authLogin, actAuthLogout } from "@/store/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useState } from "react";
import { toast } from "react-toastify";
import getCookie from '@/utils/getCookie';
import Cookies from "js-cookie";

const useHeader = () => {
  const dispatch = useAppDispatch();
  const CheckCookies = () => {

    const accessToken = getCookie("accessToken");

    let user;
      try {
         user = JSON.parse(
          getCookie("user") as string
        );
                  console.log(user, accessToken);
      } catch (error) {
    
        console.log(error);
        return
      }
    if (accessToken && user) {
        
       dispatch (authLogin({ accessToken, user }))
        Cookies.remove("accessToken");
        Cookies.remove("user");
      }
    
  }
  CheckCookies()

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
