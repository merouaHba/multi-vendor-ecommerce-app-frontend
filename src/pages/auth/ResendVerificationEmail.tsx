import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  // CardFooter,
} from "@/components/ui/card";
// import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Loader2,
  Mail,
  CheckCircle2,
  // ArrowLeft,
  ExternalLink,
} from "lucide-react";
import FormInput from "@/components/form/formInput";
import { useForm } from "react-hook-form";
import { isAxiosError } from "axios";
import { axiosErrorHandler } from "@/utils";
import { toast } from "react-toastify";
import axios from "@/services/api/axios.config";
import { Separator } from "@/components/ui/separator";

const COOLDOWN_TIME = 60;

const EmailSentSuccess = ({
 email,
  countdown,
  onResend,
   expireDate="24 hour",
}: {
  email: string;
    countdown: number;
   expireDate?: string;
  onResend: () => void;
  }) => {
   const navigate = useNavigate();
  return (
    <div className="space-y-6 py-4">
      <div className="flex flex-col items-center justify-center text-center space-y-4">
        <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
          <CheckCircle2 className="h-6 w-6 text-green-600" />
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-gray-900">
            Check Your Email
          </h3>
          <p className="text-gray-500 max-w-sm">
            We've sent a verification link to <strong>{email}</strong>. The link
            will expire in {expireDate}.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <Button
          onClick={() => navigate("/login")}
          variant="outline"
          className="w-full"
        >
          Return to Login
        </Button>

        <div className="space-y-3">
          <Separator className="my-2" />
          <div className="flex flex-col space-y-2 text-center text-sm">
            <p className="text-gray-500">Didn't receive the email?</p>
            <div className="space-y-2">
              {countdown > 0 ? (
                <p className="text-gray-600">
                  You can request another verification email in {countdown}{" "}
                  seconds
                </p>
              ) : (
                <Button
                  onClick={onResend}
                  variant="ghost"
                  className="text-primary hover:underline inline-flex items-center"
                >
                  Click here to resend verification email
                </Button>
              )}
              <p className="text-gray-600">
                Make sure to check your spam folder or{" "}
                <Link
                  to="/support"
                  className="text-primary hover:underline inline-flex items-center"
                >
                  contact support
                  <ExternalLink className="h-3 w-3 ml-1" />
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );};

const ResendVerification = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [status, setStatus] = useState<"idle" | "succeeded">("idle");
  const [lastEmail, setLastEmail] = useState("");
   const [expireDate, setExpireDate] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setValue,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      email: "",
    },
  });


  
  useEffect(() => {
    // Load saved state from localStorage
    const savedState = localStorage.getItem("verificationState");
    if (savedState) {
      const { countdown, timestamp, email, status, expireDate } =
        JSON.parse(savedState);
      const elapsedTime = Math.floor((Date.now() - timestamp) / 1000);
      const remainingTime = Math.max(0, countdown - elapsedTime);

      if (remainingTime > 0) {
        setCountdown(remainingTime);
        startCountdown(remainingTime);
        setValue("email", email);
        setLastEmail(email);
        setStatus(status);
        setExpireDate(expireDate);
      } else {
        localStorage.removeItem("verificationState");
      }
    }
  }, [setValue]);

  const startCountdown = (duration: number) => {
    setCountdown(duration);

    const timer = setInterval(() => {
      setCountdown((prevCount) => {
        const newCount = prevCount - 1;
        if (newCount <= 0) {
          clearInterval(timer);
          localStorage.removeItem("verificationState");
          return 0;
        }
        return newCount;
      });
    }, 1000);

    return timer;
  };

  const handleEmailSend = async (email: string) => {
    setIsLoading(true);
    try {
      const { data } = await axios.post("/auth/resend-verification-email", {
        email,
      });

      setExpireDate(data.expireDate);
      setStatus("succeeded");
      setLastEmail(email);

      // Save state to localStorage only after successful API call
      const state = {
        countdown: COOLDOWN_TIME,
        timestamp: Date.now(),
        email: email,
        status: "succeeded",
        expireDate: data.expireDate,
      };
      localStorage.setItem("verificationState", JSON.stringify(state));

      // Start countdown after saving state
      startCountdown(COOLDOWN_TIME);

      toast.success(data.msg || "Verification email sent successfully!", {
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
        isAxiosError(error)
          ? axiosErrorHandler(error)
          : "Could not send verification email. Please try again.",
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
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


  const onSubmit = async (formData: { email: string }) => {
    await handleEmailSend(formData.email);
  };

  const handleResend = async () => {
    if (countdown === 0 && lastEmail) {
      await handleEmailSend(lastEmail);
    }
  };

  const renderContent = () => {
    if (status === "succeeded") {
      return (
        <EmailSentSuccess
          email={lastEmail}
          countdown={countdown}
          onResend={handleResend}
          expireDate={expireDate}
        />
      );
    }

    return (
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <FormInput
          id="email"
          label="Email address"
          type="email"
          placeholder="Enter your email address"
          disabled={isLoading || countdown > 0}
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
          className="w-full"
          disabled={isLoading || countdown > 0 || !isValid}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending verification link...
            </>
          ) : countdown > 0 ? (
            <>
              <Mail className="mr-2 h-4 w-4" />
              Resend in {countdown}s
            </>
          ) : (
            <>
              <Mail className="mr-2 h-4 w-4" />
              Send Verification Link
            </>
          )}
        </Button>

        <div className="space-y-3">
          <Separator className="my-2" />
          <p className="text-center text-sm text-gray-600">
            Already verified?{" "}
            <Link
              to="/login"
              className="text-primary hover:underline font-medium"
            >
              Sign in
            </Link>
          </p>
        </div>
      </form>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="space-y-2">
          <CardTitle className="text-2xl font-bold text-center text-gray-900">
            Verify Your Email
          </CardTitle>
          <CardDescription className="text-center text-gray-600">
            {status === "succeeded"
              ? "Verification link sent"
              : "Enter your email to receive a verification link"}
          </CardDescription>
        </CardHeader>

        <CardContent>{renderContent()}</CardContent>
      </Card>
    </div>
  );
};

export default ResendVerification;