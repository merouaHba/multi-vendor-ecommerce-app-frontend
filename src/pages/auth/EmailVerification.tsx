import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CheckCircle2, XCircle, Loader2 } from "lucide-react";

const EmailVerification = () => {
  const [verificationStatus, setVerificationStatus] = useState("verifying"); // verifying, success, error
  const [message, setMessage] = useState("");

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        // Get token from URL parameters
        const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get("token");

        if (!token) {
          setVerificationStatus("error");
          setMessage("Verification token is missing");
          return;
        }

        // Simulate API call to verify token
        // In real implementation, you would make an API call like:
        // await axios.post('/api/verify-email', { token })
        await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate API delay

        setVerificationStatus("success");
        setMessage("Your email has been successfully verified!");
      } catch (error) {
        setVerificationStatus("error");
        setMessage(
          "Failed to verify email. The link may be expired or invalid."
        );
      }
    };

    verifyEmail();
  }, []);

  const renderContent = () => {
    switch (verificationStatus) {
      case "verifying":
        return (
          <div className="flex flex-col items-center justify-center space-y-4 py-8">
            <Loader2 className="h-16 w-16 text-blue-500 animate-spin" />
            <p className="text-lg text-gray-600">
              Verifying your email address...
            </p>
          </div>
        );

      case "success":
        return (
          <Alert className="bg-green-50 border-green-200">
            <CheckCircle2 className="h-5 w-5 text-green-500" />
            <AlertDescription className="text-green-800">
              {message}
            </AlertDescription>
          </Alert>
        );

      case "error":
        return (
          <Alert className="bg-red-50 border-red-200">
            <XCircle className="h-5 w-5 text-red-500" />
            <AlertDescription className="text-red-800">
              {message}
            </AlertDescription>
          </Alert>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Email Verification</CardTitle>
          <CardDescription>
            We're verifying your email address to secure your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          {renderContent()}

          {verificationStatus === "success" && (
            <div className="mt-6 text-center">
              <a
                href="/login"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Proceed to Login
              </a>
            </div>
          )}

          {verificationStatus === "error" && (
            <div className="mt-6 text-center">
              <a
                href="/resend-verification"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Resend Verification Email
              </a>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default EmailVerification;
