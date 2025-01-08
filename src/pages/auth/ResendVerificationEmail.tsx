import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import FormInput from "@/components/form/formInput";
import { useForm } from "react-hook-form";
import { isAxiosError } from "axios";
import { axiosErrorHandler } from "@/utils";
import { toast } from "react-toastify";
import axios from "@/services/api/axios.config";

const ResendVerification = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [countdown, setCountdown] = useState(0);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
    },
  });

  useEffect(() => {
    // Load countdown from localStorage when component mounts
    const savedCountdown = localStorage.getItem("emailVerificationCountdown");
    const savedTimestamp = localStorage.getItem("emailVerificationTimestamp");

    if (savedCountdown && savedTimestamp) {
      const elapsedTime = Math.floor(
        (Date.now() - parseInt(savedTimestamp)) / 1000
      );
      const remainingTime = Math.max(0, parseInt(savedCountdown) - elapsedTime);

      if (remainingTime > 0) {
        setCountdown(remainingTime);
        startCountdown(remainingTime);
      }
    }
  }, []);

  const startCountdown = (duration: number) => {
    setCountdown(duration);
    localStorage.setItem("emailVerificationCountdown", duration.toString());
    localStorage.setItem("emailVerificationTimestamp", Date.now().toString());

    const timer = setInterval(() => {
      setCountdown((prevCount) => {
        const newCount = prevCount - 1;
        if (newCount <= 0) {
          clearInterval(timer);
          localStorage.removeItem("emailVerificationCountdown");
          localStorage.removeItem("emailVerificationTimestamp");
          return 0;
        }
        return newCount;
      });
    }, 1000);

    return timer;
  };

  type TFormData = {
    email: string;
  };

  const onSubmit = async (formData: TFormData) => {
    setIsLoading(true);
    try {
      const res = await axios.post("/auth/resend-verification-email", formData);

      toast.success(res.data.msg, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });

      // Start 60-second countdown after successful email send
      startCountdown(60);
    } catch (error) {
      toast.error(
        isAxiosError(error)
          ? axiosErrorHandler(error)
          : "Could not send verification email. Please try again.",
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
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Card className="max-w-md w-full mx-auto">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center text-indigo-600">
            Verify your email
          </CardTitle>
          <CardDescription className="text-center">
            Enter your email to receive a verification link
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <FormInput
              id={register("email").name}
              label="Email address"
              type="email"
              disabled={countdown > 0}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              error={errors.email?.message}
            />

            <Button
              type="submit"
              disabled={isLoading || countdown > 0}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white h-11"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending link...
                </>
              ) : countdown > 0 ? (
                `Resend in ${countdown}s`
              ) : (
                "Send verification link"
              )}
            </Button>

            <p className="text-center text-sm text-gray-600">
              Remember your password?{" "}
              <Link
                to="/login"
                className="text-indigo-600 hover:text-indigo-500 font-medium"
              >
                Sign in
              </Link>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResendVerification;