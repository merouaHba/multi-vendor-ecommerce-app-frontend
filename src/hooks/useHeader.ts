import { actAuthLogout, actSetUser, authLogout } from "@/store/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useEffect, useLayoutEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate, useSearchParams } from 'react-router-dom';

const useHeader = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const token = localStorage.getItem("accessToken")
    useEffect(() => {
      if ( token=== null) {
        dispatch(authLogout())
      }
    },[token,dispatch]);
  const [searchParams, setSearchParams] = useSearchParams();
  useLayoutEffect(() => {
  
    const cookieSet = searchParams.get('cookieSet')
    
    if (cookieSet === "true") {
                dispatch(actSetUser());
                setSearchParams({})
    }
  }, [searchParams, setSearchParams, dispatch]);
  const { error, loading, accessToken, user } = useAppSelector(
    (state) => state.auth
  );
  const isAuthenticated = accessToken && user;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const logout = async () => {
    const role = user?.role;
    dispatch(actAuthLogout())
      .unwrap()
      .then(() => {
        if (role === "seller") {
          navigate("/seller/login");
        }else{
          navigate("/login");
        }
      })
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
