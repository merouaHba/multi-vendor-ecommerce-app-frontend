import { useNavigate, useSearchParams, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CheckCircle2, XCircle, Loader2, ArrowLeft, Clock } from "lucide-react";

import { isAxiosError } from "axios";
import { axiosErrorHandler } from "@/utils";
import axios from "@/services/api/axios.config";
import { Button } from "@/components/ui/button";

const EmailVerification = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [verificationStatus, setVerificationStatus] = useState<
    "loading" | "success" | "error"
  >("loading");
  const [errorMessage, setErrorMessage] = useState("");
  const [countdown, setCountdown] = useState(5);

  // Determine login path based on the referrer
  const loginPath =
    location.state?.from === "/seller/login" ? "/seller/login" : "/login";

  const startCountdown = () => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          navigate(loginPath);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  useEffect(() => {
    const verifyEmailToken = async () => {
      const token = searchParams.get("token");

      if (!token) {
        setVerificationStatus("error");
        setErrorMessage(
          "Missing verification token. Please check your verification email and try again."
        );
        return;
      }

      try {
        const response = await axios.get(`/auth/verify-email/${token}`);
        if (response.status === 200) {
          setVerificationStatus("success");
          startCountdown();
        }
      } catch (error) {
        setVerificationStatus("error");

        const message = isAxiosError(error)
          ? axiosErrorHandler(error) === "Invalid token"
            ? "Verification failed. This could be due to an invalid or expired link. Please request a new verification email."
            : axiosErrorHandler(error)
          : "Verification failed. This could be due to a network error. Please try again.";

        setErrorMessage(message);
      }
    };

    verifyEmailToken();
  }, [searchParams, navigate]);

  const renderContent = () => {
    switch (verificationStatus) {
      case "loading":
        return (
          <div className="flex flex-col items-center justify-center space-y-4 py-8">
            <div className="relative">
              <Loader2 className="h-16 w-16 text-indigo-500 animate-spin" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-12 w-12 rounded-full bg-indigo-50" />
              </div>
            </div>
            <p className="text-lg text-gray-600 font-medium">
              Verifying your email address...
            </p>
            <p className="text-sm text-gray-500">This may take a few moments</p>
          </div>
        );

      case "success":
        return (
          <div className="space-y-4">
            <Alert className="bg-green-50 border-green-200 shadow-sm hover:bg-green-100 transition-colors duration-200">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="rounded-full bg-green-100 p-2">
                    <CheckCircle2 className="h-6 w-6 text-green-600" />
                  </div>
                </div>
                <div className="ml-3 flex-1">
                  <AlertTitle className="text-green-800 font-semibold text-lg mb-1">
                    Email Verified Successfully!
                  </AlertTitle>
                  <AlertDescription>
                    <div className="space-y-2">
                      <p className="text-green-700">
                        Your email has been verified and your account is now
                        active.
                      </p>
                      <div className="mt-3 flex items-center space-x-2 text-green-600 bg-green-100 rounded-md p-2">
                        <Clock className="h-4 w-4" />
                        <p className="text-sm font-medium">
                          Redirecting to login in {countdown} seconds
                        </p>
                      </div>
                    </div>
                  </AlertDescription>
                </div>
              </div>
            </Alert>
          </div>
        );

      case "error":
        return (
          <div className="space-y-4">
            <Alert className="bg-red-50 border-red-200 shadow-sm hover:bg-red-100 transition-colors duration-200">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="rounded-full bg-red-100 p-2">
                    <XCircle className="h-6 w-6 text-red-600" />
                  </div>
                </div>
                <div className="ml-3 flex-1">
                  <AlertTitle className="text-red-800 font-semibold text-lg mb-1">
                    Verification Failed
                  </AlertTitle>
                  <AlertDescription>
                    <div className="space-y-2">
                      <p className="text-red-700">{errorMessage}</p>
                    </div>
                  </AlertDescription>
                </div>
              </div>
            </Alert>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="space-y-2">
          <CardTitle className="text-2xl font-bold text-gray-900">
            Email Verification
          </CardTitle>
          <CardDescription className="text-gray-600">
            We're verifying your email address to secure your account
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {renderContent()}

          <div className="flex flex-col gap-4 mt-6">
            {verificationStatus === "success" && (
              <Button
                onClick={() => navigate(loginPath)}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
              >
                Go to Login
              </Button>
            )}

            {verificationStatus === "error" && (
              <div className="space-y-4">
                <Button
                  onClick={() =>
                    navigate("/resend-verification", {
                      state: { from: loginPath },
                    })
                  }
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
                >
                  Resend Verification Email
                </Button>
                <Button
                  onClick={() => navigate(loginPath)}
                  variant="outline"
                  className="w-full"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Login
                </Button>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EmailVerification;
