import { useState } from "react";
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
import { Alert, AlertDescription } from "@/components/ui/alert";
import FormInput from "@/components/form/formInput";
import {
  CheckCircle2,
  XCircle,
  Loader2,
  ArrowLeft,
  ExternalLink,
  Mail,
} from "lucide-react";
import { isAxiosError } from "axios";
import { axiosErrorHandler } from "@/utils";
import axios from "@/services/api/axios.config";
import { Separator } from "@/components/ui/separator";

interface ForgotPasswordFormInputs {
  email: string;
}

const validationSchema = {
  email: {
    required: "Email is required",
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: "Invalid email address",
    },
  },
};

const EmailSentSuccess = ({ email }: { email: string }) => (
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
          We've sent a password reset link to <strong>{email}</strong>. The link
          will expire in 1 hour.
        </p>
      </div>
    </div>

    <div className="space-y-4">
      <Button
        onClick={() => (window.location.href = "/login")}
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
            <p className="text-gray-600">
              Check your spam folder or{" "}
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

const UnverifiedAccount = () => {
  const navigate = useNavigate();
  return(
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
          Your account needs to be verified before you can reset your password.
          Please verify your email address first.
        </p>
      </div>
    </div>

    <div className="space-y-4">
      <Button
        onClick={() =>navigate("/resend-verification")}
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
)};

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState<
    "idle" | "pending" | "succeeded" | "failed" | "unverified"
  >("idle");
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm<ForgotPasswordFormInputs>({
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const watchedEmail = watch("email");

  const onSubmit = async (data: ForgotPasswordFormInputs) => {
    setStatus("pending");
    setError("");

    try {
      await axios.post("/auth/forgot-password", {
        email: data.email,
      });
      setStatus("succeeded");
    } catch (error) {
      if (isAxiosError(error)) {
        const errorMessage = axiosErrorHandler(error);
        if (errorMessage === "Account is Not Verified") {
          setStatus("unverified");
        } else {
          setStatus("failed");
          setError(errorMessage);
        }
      } else {
        setStatus("failed");
        setError("Failed to send reset email. Please try again later.");
      }
    }
  };

  const renderContent = () => {
    if (status === "succeeded") {
      return <EmailSentSuccess email={watchedEmail} />;
    }

    if (status === "unverified") {
      return <UnverifiedAccount  />;
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
          <FormInput
            id="email"
            type="email"
            label="Email Address"
            placeholder="Enter your email address"
            error={errors.email?.message}
            {...register("email", validationSchema.email)}
            disabled={status === "pending"}
          />

          <Button
            type="submit"
            className="w-full"
            disabled={status === "pending" || !isValid}
          >
            {status === "pending" ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending Reset Link...
              </>
            ) : (
              "Send Reset Link"
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