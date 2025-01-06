import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Mail, Loader2, CheckCircle2, XCircle, ArrowLeft } from "lucide-react";

const ResendVerification = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle, submitting, success, error
  const [message, setMessage] = useState("");
  const [countdown, setCountdown] = useState(0);

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setStatus("error");
      setMessage("Please enter a valid email address");
      return;
    }

    setStatus("submitting");

    try {
      // Simulate API call
      // In real implementation, you would make an API call like:
      // await axios.post('/api/resend-verification', { email })
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setStatus("success");
      setMessage("Verification email has been sent successfully!");
      setCountdown(60);

      // Start countdown timer
      const timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } catch (error) {
      setStatus("error");
      setMessage("Failed to send verification email. Please try again.");
    }
  };

  const renderStatusAlert = () => {
    if (status === "success") {
      return (
        <Alert className="bg-green-50 border-green-200 mb-4">
          <CheckCircle2 className="h-5 w-5 text-green-500" />
          <AlertDescription className="text-green-800">
            {message}
          </AlertDescription>
        </Alert>
      );
    }

    if (status === "error") {
      return (
        <Alert className="bg-red-50 border-red-200 mb-4">
          <XCircle className="h-5 w-5 text-red-500" />
          <AlertDescription className="text-red-800">
            {message}
          </AlertDescription>
        </Alert>
      );
    }

    return null;
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <div className="flex items-start mb-2">
            <Mail className="h-8 w-8 text-blue-500 mr-2" />
            <div>
              <CardTitle>Resend Verification Email</CardTitle>
              <CardDescription className="mt-2">
                Enter your email address and we'll send you a new verification
                link
              </CardDescription>
            </div>
          </div>
        </CardHeader>

        <CardContent>
          {renderStatusAlert()}

          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={status === "submitting" || countdown > 0}
                  className="w-full"
                />
              </div>

              <Button
                type="submit"
                className="w-full"
                disabled={status === "submitting" || countdown > 0}
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin mr-2" />
                    Sending...
                  </>
                ) : countdown > 0 ? (
                  `Resend in ${countdown}s`
                ) : (
                  "Send Verification Email"
                )}
              </Button>
            </div>
          </form>
        </CardContent>

        <CardFooter className="flex justify-center border-t pt-6">
          <Button
            variant="ghost"
            onClick={() => (window.location.href = "/login")}
            className="text-sm"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Login
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ResendVerification;
