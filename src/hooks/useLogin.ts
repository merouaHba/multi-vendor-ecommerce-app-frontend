import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { actAuthLogin, resetUI } from "@/store/auth/authSlice";
import {  useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInSchema, signInType } from "@/validations/signInSchema";
import { toast } from "react-toastify";

const useLogin = (role: "user" | "seller") => {
  const dispatch = useAppDispatch();

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

  const submitForm: SubmitHandler<signInType> = async (data) => {
     console.log("Form submitted:", data);
  
    const { email, password } = data;

    dispatch(actAuthLogin({role, email, password }))
      .unwrap()
      .then(() => {
        navigate("/");

      }).catch((error) => {
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
    return () => {
      dispatch(resetUI());
    };
  }, [dispatch]);

  return {
    error,
    loading,
    accessToken,
    formErrors,
    unverifiedEmail,
    register,
    handleSubmit,
    submitForm,
  };
};

export default useLogin;
