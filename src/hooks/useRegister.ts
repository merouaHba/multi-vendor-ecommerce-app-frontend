import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { actAuthRegister, resetUI } from "@/store/auth/authSlice";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema, signUpType } from "@/validations/signUpSchema";
import { toast } from "react-toastify";

const useRegister = (role: "user" | "seller") => {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState("");

  const { loading, error, accessToken, user } = useAppSelector(
    (state) => state.auth
  );

  const {
    register,
    handleSubmit,
    reset,
    trigger,
    getValues,
    setValue,
    formState: { errors: formErrors },
  } = useForm<signUpType>({
    mode: "onBlur",
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      isSeller: role === "seller",
      storeDetails:
        role === "seller"
          ? {
              address: "",
              city: "",
              state: "",
              postalCode: "",
              country: "",
            }
          : undefined,
    },
  });

  const submitForm: SubmitHandler<signUpType> = async (data) => {
    try {
      const {
        firstname,
        lastname,
        email,
        password,
        mobile,
        storeName,
        storeDetails,
        terms
      } = data;

      // Prepare registration data based on role
      const registrationData =
        role === "seller"
          ? {
              firstname,
              lastname,
              email,
              password,
              mobile,
              storeName,
              storeDetails,
              role: "seller",
              terms,
            }
          : {
              firstname,
              lastname,
              email,
              password,
              terms,
            };

      await dispatch(actAuthRegister(registrationData)).unwrap();
      setEmail(email);
      reset();

      // Show success message
      toast.success("Registration successful!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } catch (error) {
      toast.error(
        error as string,
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        }
      );
    }
  };

  const resetRegistration = () => {
    dispatch(resetUI());
    reset();
  };

  const GoogleOAuth = async () => {
    const baseUrl = import.meta.env.VITE_API_URL;
    window.location.href = `${baseUrl}/auth/google?role=${role}`;
  };

  const FacebookOAuth = () => {
    const baseUrl = import.meta.env.VITE_API_URL;
    window.location.href = `${baseUrl}/auth/facebook?role=${role}`;
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

  useEffect(() => {
    return () => {
      dispatch(resetUI());
    };
  }, [dispatch]);

  return {
    loading,
    error,
    accessToken,
    user,
    formErrors,
    email,
    getValues,
    setValue,
    trigger,
    submitForm,
    register,
    handleSubmit,
    GoogleOAuth,
    FacebookOAuth,
    AppleOAuth,
    resetRegistration,
  };
};

export default useRegister;