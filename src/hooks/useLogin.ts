import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { actAuthLogin, resetUI } from "@/store/auth/authSlice";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInSchema, signInType } from "@/validations/signInSchema";
import { toast } from "react-toastify";

const useLogin = (role: "user" | "seller") => {
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [unverifiedEmail, setunverifiedEmail] = useState("");

  const { error, loading, accessToken } = useAppSelector((state) => state.auth);

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
    window.location.href = `${baseUrl}/auth/google?role=${role} `;

  };

  const FacebookOAuth = () => {
    const baseUrl = import.meta.env.VITE_API_URL;
    window.location.href = `${baseUrl}/auth/facebook?role=${role} `;
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
    const { email, password } = data;

    dispatch(actAuthLogin({ role, email, password }))
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

      const error = searchParams.get("error");

      if (error) {

          toast.error( decodeURIComponent(error), {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        // Clean URL
        window.history.replaceState({}, document.title, window.location.pathname);
        return;
      }

       return () => {
         dispatch(resetUI());
       };
    }, [searchParams, dispatch]);

  return {
    error,
    loading,
    accessToken,
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