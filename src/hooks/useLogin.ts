import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { actAuthLogin, resetUI } from "@/store/auth/authSlice";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInSchema, signInType } from "@/validations/signInSchema";
import { toast } from "react-toastify";
import axios from "@/services/api/axios.config";

const useLogin = (role: "user" | "seller") => {
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [unverifiedEmail, setunverifiedEmail] = useState("");

  const { error, loading, accessToken , user} = useAppSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors: formErrors },
  } = useForm<signInType>({
    mode: "onBlur",
    resolver: zodResolver(signInSchema),
  });


  const GoogleOAuth = async () => {
    const baseUrl = import.meta.env.VITE_API_URL;
    window.location.href = `${baseUrl}/auth/google?role=${role}&redirect=login `;

  };

  const FacebookOAuth = () => {
    const baseUrl = import.meta.env.VITE_API_URL;
    window.location.href = `${baseUrl}/auth/facebook?role=${role}&redirect=login `;
  };

  const AppleOAuth = () => {
    toast.warn("This feature is not available yet", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const submitForm: SubmitHandler<signInType> = async (data) => {
    const { email, password,rememberMe } = data;

    dispatch(actAuthLogin({ role, email, password, rememberMe }))
      .unwrap()
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        if (error === "Account not verified") {
          setunverifiedEmail(email);
        }
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

    useEffect(() => {
 const cookieSet = searchParams.get("cookieSet");
      const getError = async () => {
      
        const { data: { error } } = await axios.get(
          "/auth/check-error-cookies"
        );
        if (error) {
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
        }
      }
 if (cookieSet === "true") {
   getError()
    setSearchParams({});
 }
      


       return () => {
         dispatch(resetUI());
       };
    }, [searchParams, dispatch, setSearchParams]);

  return {
    error,
    loading,
    accessToken,
    user,
    formErrors,
    unverifiedEmail,
    register,
    handleSubmit,
    submitForm,
    GoogleOAuth,
    FacebookOAuth,
    AppleOAuth,
  };
};

export default useLogin;