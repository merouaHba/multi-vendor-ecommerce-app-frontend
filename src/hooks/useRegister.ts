import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { actAuthRegister, resetUI } from "@/store/auth/authSlice";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema, signUpType } from "@/validations/signUpSchema";
import { toast } from "react-toastify";

const useRegister = () => {
  const dispatch = useAppDispatch();
const [email,setEmail] = useState('')
 

  const { loading, error, accessToken } = useAppSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    // getFieldState,
    // trigger,
    reset,
    formState: { errors: formErrors },
  } = useForm<signUpType>({
    mode: "onBlur",
    resolver: zodResolver(signUpSchema),
  });

  const submitForm: SubmitHandler<signUpType> = async (data) => {
    const { firstname, lastname, email, password } = data;
    dispatch(actAuthRegister({ firstname, lastname, email, password }))
      .unwrap() // to confirm that the dispatch finich 
      .then(() => {
         setEmail(email);
        reset()
      }).catch((error) => {
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
const resetRegistration = () => {
  dispatch(resetUI());
  reset();
}


  useEffect(() => {
    return () => {
      dispatch(resetUI());
    };
  }, [dispatch]);

  return {
    loading,
    error,
    accessToken,
    formErrors,
    email,
    submitForm,
    register,
    handleSubmit,
    resetRegistration,
  };
};

export default useRegister;
