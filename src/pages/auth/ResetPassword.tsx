import { useState, useEffect } from "react";
import {
  useNavigate,
  useSearchParams,
  Link,
  useLocation,
} from "react-router-dom";
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
import { Alert, AlertDescription } from "@/components/ui/alert";
import FormInput from "@/components/form/FormInput";
import {
  CheckCircle2,
  XCircle,
  Loader2,
  ArrowLeft,
  Mail,
  ExternalLink,
  AlertTriangle,
} from "lucide-react";
import { isAxiosError } from "axios";
import { axiosErrorHandler } from "@/utils";
import axios from "@/services/api/axios.config";
import { Separator } from "@/components/ui/separator";

interface ResetPasswordFormInputs {
  password: string;
  confirmPassword: string;
}

const validationSchema = {
  password: {
    required: "Password is required",
    minLength: {
      value: 8,
      message: "Password must be at least 8 characters long",
    },
    validate: {
      hasUpperCase: (value: string) =>
        /[A-Z]/.test(value) ||
        "Password must contain at least one uppercase letter",
      hasLowerCase: (value: string) =>
        /[a-z]/.test(value) ||
        "Password must contain at least one lowercase letter",
      hasNumber: (value: string) =>
        /[0-9]/.test(value) || "Password must contain at least one number",
      hasSpecialChar: (value: string) =>
        /[!@#$%^&*]/.test(value) ||
        "Password must contain at least one special character (!@#$%^&*)",
    },
  },
  confirmPassword: {
    required: "Please confirm your password",
    validate: (value: string, formValues: ResetPasswordFormInputs) => {
      if (!value) return "Please confirm your password";
      if (value !== formValues.password) return "Passwords do not match";
      return true;
    },
  },
};

const ResetPasswordSuccess = ({
  countdown,
}: {
  countdown: number;
}) => (
  <div className="space-y-6 py-4">
    <div className="flex flex-col items-center justify-center text-center space-y-4">
      <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
        <CheckCircle2 className="h-6 w-6 text-green-600" />
      </div>
      <div className="space-y-2">
        <h3 className="text-xl font-semibold text-gray-900">
          Password Reset Successful!
        </h3>
        <p className="text-gray-500">
          Your password has been successfully reset. You will be redirected to
          login in {countdown} seconds...
        </p>
      </div>
    </div>
  </div>
);

const TokenNotFound = ({ loginPath }: { loginPath: string }) => {
  const navigate = useNavigate();
  return (
    <div className="space-y-6 py-6">
      <div className="flex flex-col items-center justify-center text-center space-y-4">
        <div className="h-12 w-12 rounded-full bg-yellow-100 flex items-center justify-center">
          <AlertTriangle className="h-6 w-6 text-yellow-600" />
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-gray-900">
            Invalid Reset Link
          </h3>
          <p className="text-gray-500 max-w-sm">
            The password reset link is invalid or has expired. Please request a
            new link to reset your password.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <Button
          onClick={() =>
            navigate("/forgot-password", { state: { from: loginPath } })
          }
          className="w-full space-x-2"
        >
          <Mail className="h-4 w-4" />
          <span>Request New Reset Link</span>
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

const ResetPassword = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [status, setStatus] = useState<
    "idle" | "pending" | "succeeded" | "failed"
  >("idle");
  const [error, setError] = useState("");
  const [countdown, setCountdown] = useState(3);
  const token = searchParams.get("token");

  const loginPath =
    location.state?.from === "/seller/login" ? "/seller/login" : "/login";

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<ResetPasswordFormInputs>({
    mode: "onChange",
    reValidateMode: "onChange",
  });

  useEffect(() => {
    if (!token) {
      setStatus("failed");
    }
  }, [token]);

  useEffect(() => {
    let timer: number;
    if (status === "succeeded") {
      timer = window.setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            navigate(loginPath);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [status, navigate, loginPath]);

  const onSubmit = async (data: ResetPasswordFormInputs) => {
    if (!token) {
      setStatus("failed");
      setError(
        "Missing reset token. Please request a new password reset link."
      );
      return;
    }

    setStatus("pending");
    setError("");

    try {
      await axios.post("/auth/reset-password", {
        token,
        password: data.password,
      });
      setStatus("succeeded");
    } catch (error) {
      setStatus("failed");
      setError(
        isAxiosError(error)
          ? axiosErrorHandler(error) === "Invalid token"
            ? "Reset password failed. This could be due to an invalid or expired link. Please request a new password reset email."
            : axiosErrorHandler(error)
          : "Reset password failed. This could be due to a network error. Please try again."
      );
    }
  };

  const renderContent = () => {
    if (status === "succeeded") {
      return (
        <ResetPasswordSuccess countdown={countdown}  />
      );
    }

    if (status === "failed" && !token) {
      return <TokenNotFound loginPath={loginPath} />;
    }

    return (
      <div className="space-y-6">
        {error && (
          <Alert className="bg-red-50 border-red-200">
            <XCircle className="h-5 w-5 text-red-500" />
            <AlertDescription className="text-red-700">
              {error}
            </AlertDescription>
          </Alert>
        )}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <div>
              <FormInput
                id="password"
                label="New Password"
                error={errors.password?.message}
                {...register("password", validationSchema.password)}
                showPasswordToggle
                disabled={status === "pending"}
              />
            </div>

            <FormInput
              id="confirmPassword"
              label="Confirm New Password"
              error={errors.confirmPassword?.message}
              {...register("confirmPassword", validationSchema.confirmPassword)}
              showPasswordToggle
              disabled={status === "pending"}
            />
          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={status === "pending" || !isValid}
          >
            {status === "pending" ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Resetting Password...
              </>
            ) : (
              "Reset Password"
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
            Reset Password
          </CardTitle>
          <CardDescription className="text-center text-gray-600">
            {status === "failed" && !token
              ? "Invalid or Expired Link"
              : "Please enter your new password below"}
          </CardDescription>
        </CardHeader>

        <CardContent>{renderContent()}</CardContent>

        {status !== "succeeded" && status !== "failed" && (
          <CardFooter className="flex justify-center pb-6">
            <Button
              onClick={() => navigate(loginPath)}
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

export default ResetPassword;
