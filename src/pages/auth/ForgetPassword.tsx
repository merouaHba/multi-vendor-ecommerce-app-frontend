import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import FormInput from "@/components/form/formInput";
import {
  CheckCircle2,
  Loader2,
  ArrowLeft,
  ExternalLink,
  Mail,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { axiosErrorHandler } from "@/utils";
import { isAxiosError } from "axios";
import axios from "@/services/api/axios.config";
import { toast } from "react-toastify";

const COOLDOWN_TIME = 60;

const EmailSentSuccess = ({
  email,
  countdown,
  onResend,
  expireDate = "1 hour",
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
            We've sent a password reset link to <strong>{email}</strong>. The
            link will expire in {expireDate}.
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
                  You can request another reset link in {countdown} seconds
                </p>
              ) : (
                <Button
                  onClick={onResend}
                  variant="ghost"
                  className="text-primary hover:underline inline-flex items-center"
                >
                  Click here to resend reset link
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
  );
};

const UnverifiedAccount = () => {
  const navigate = useNavigate();
  return (
    <div className="space-y-6 py-4">
      <div className="flex flex-col items-center justify-center text-center space-y-4">
        <div className="h-12 w-12 rounded-full bg-yellow-100 flex items-center justify-center">
          <Mail className="h-6 w-6 text-yellow-600" />
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-gray-900">
            Account Not Verified
          </h3>
          <p className="text-gray-500 max-w-sm">
            Your account needs to be verified before you can reset your
            password. Please verify your email address first.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <Button
          onClick={() => navigate("/resend-verification")}
          className="w-full space-x-2"
        >
          <Mail className="h-4 w-4" />
          <span>Resend Verification Email</span>
        </Button>

        <div className="space-y-3">
          <Separator className="my-2" />
          <div className="flex flex-col space-y-2 text-center text-sm">
            <p className="text-gray-500">Need help?</p>
            <Link
              to="/support"
              className="text-gray-600 hover:text-gray-500 inline-flex items-center justify-center space-x-1"
            >
              <span>Contact Support</span>
              <ExternalLink className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<
    "idle" | "succeeded" | "failed" | "unverified"
  >("idle");
  const [countdown, setCountdown] = useState(0);
  const [lastEmail, setLastEmail] = useState("");
  const [expireDate, setExpireDate] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
    setValue,
  } = useForm<{ email: string }>({
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const watchedEmail = watch("email");

  useEffect(() => {
    // Load saved state from localStorage
    const savedState = localStorage.getItem("passwordResetState");
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
        localStorage.removeItem("passwordResetState");
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
      const { data } = await axios.post("/auth/forgot-password", { email });
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
      localStorage.setItem("passwordResetState", JSON.stringify(state));

      // Start countdown after saving state
      startCountdown(COOLDOWN_TIME);
    } catch (error) {
      if (isAxiosError(error)) {
        const errorMessage = axiosErrorHandler(error);
        if (errorMessage === "Account is Not Verified") {
          setStatus("unverified");
        } else {
          setStatus("failed");
            toast.error(axiosErrorHandler(error),
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
        }
      } else {
        setStatus("failed");
          toast.error( "Could not send verification email. Please try again.",
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
      }
    } finally {
          setIsLoading(false);
        }
  };

  const onSubmit = async (data: { email: string }) => {
    await handleEmailSend(data.email);
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
          email={lastEmail || watchedEmail}
          countdown={countdown}
          expireDate={expireDate}
          onResend={handleResend}
        />
      );
    }

    if (status === "unverified") {
      return <UnverifiedAccount />;
    }

    return (
      <div className="space-y-6">
       
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <FormInput
            id="email"
            type="email"
            label="Email Address"
            placeholder="Enter your email address"
            error={errors.email?.message}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            disabled={isLoading}
          />

          <Button
            type="submit"
            className="w-full"
            disabled={isLoading || !isValid}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending Reset Link...
              </>
            ) : (
              <>
                <Mail className="mr-2 h-4 w-4" />
                Send Reset Link
              </>
            )}
          </Button>
        </form>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="space-y-2">
          <CardTitle className="text-2xl font-bold text-center text-gray-900">
            Forgot Password
          </CardTitle>
          <CardDescription className="text-center text-gray-600">
            {status === "succeeded"
              ? "Reset instructions sent"
              : status === "unverified"
              ? "Account needs verification"
              : "Enter your email to receive a password reset link"}
          </CardDescription>
        </CardHeader>

        <CardContent>{renderContent()}</CardContent>

        {status !== "succeeded" && status !== "unverified" && (
          <CardFooter className="flex justify-center pb-6">
            <Button
              onClick={() => navigate("/login")}
              variant="ghost"
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Login
            </Button>
          </CardFooter>
        )}
      </Card>
    </div>
  );
};

export default ForgotPassword;