import React, { useState } from "react";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  Github,
  Apple,
  ArrowRight,
  Loader2,
  User,
} from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Link } from "react-router-dom";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [focusedInput, setFocusedInput] = useState("");

  const handleSubmit = async (e:React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    if (
      !fullName.trim() ||
      !email.trim() ||
      !password ||
      !confirmPassword ||
      !agreeToTerms
    ) {
      setError("Please fill in all fields");
      setIsLoading(false);
      return;
    }

    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setError("Please enter a valid email address");
      setIsLoading(false);
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      setIsLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setIsLoading(false);
      return;
    }

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-indigo-100 flex flex-col justify-center items-center p-4">
      <div className="w-full max-w-md relative">
        {/* Decorative Elements */}
        <div className="absolute -top-10 -left-10 w-20 h-20 bg-violet-600 rounded-full opacity-10 animate-pulse" />
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-indigo-600 rounded-full opacity-10 animate-pulse delay-150" />

        {/* Logo and Header */}
        <div className="mb-8 text-center">
          <div className="mx-auto w-16 h-16 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-xl flex items-center justify-center transform hover:rotate-12 transition-transform duration-300 mb-6">
            <User className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-violet-700 to-indigo-700 bg-clip-text text-transparent mb-2">
            Create Account
          </h1>
          <p className="text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-indigo-600 hover:text-indigo-700 font-medium"
            >
              Sign in
            </Link>
          </p>
        </div>

        <Card className="backdrop-blur-xl bg-white/80 border-0 shadow-xl">
          <CardHeader>
            {error && (
              <Alert variant="destructive" className="mb-4">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">
                  Full Name
                </label>
                <div
                  className={`relative rounded-lg transition-all duration-200 ${
                    focusedInput === "name"
                      ? "ring-2 ring-violet-600 ring-opacity-50"
                      : ""
                  }`}
                >
                  <User
                    className={`absolute left-3 top-3 h-5 w-5 ${
                      focusedInput === "name"
                        ? "text-violet-600"
                        : "text-gray-400"
                    }`}
                  />
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    onFocus={() => setFocusedInput("name")}
                    onBlur={() => setFocusedInput("")}
                    className="pl-10 pr-4 py-3 w-full border border-gray-200 rounded-lg focus:outline-none focus:border-violet-600 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
              </div>

              {/* Email Input */}
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">
                  Email Address
                </label>
                <div
                  className={`relative rounded-lg transition-all duration-200 ${
                    focusedInput === "email"
                      ? "ring-2 ring-violet-600 ring-opacity-50"
                      : ""
                  }`}
                >
                  <Mail
                    className={`absolute left-3 top-3 h-5 w-5 ${
                      focusedInput === "email"
                        ? "text-violet-600"
                        : "text-gray-400"
                    }`}
                  />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={() => setFocusedInput("email")}
                    onBlur={() => setFocusedInput("")}
                    className="pl-10 pr-4 py-3 w-full border border-gray-200 rounded-lg focus:outline-none focus:border-violet-600 transition-colors"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              {/* Password Input */}
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">
                  Password
                </label>
                <div
                  className={`relative rounded-lg transition-all duration-200 ${
                    focusedInput === "password"
                      ? "ring-2 ring-violet-600 ring-opacity-50"
                      : ""
                  }`}
                >
                  <Lock
                    className={`absolute left-3 top-3 h-5 w-5 ${
                      focusedInput === "password"
                        ? "text-violet-600"
                        : "text-gray-400"
                    }`}
                  />
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onFocus={() => setFocusedInput("password")}
                    onBlur={() => setFocusedInput("")}
                    className="pl-10 pr-12 py-3 w-full border border-gray-200 rounded-lg focus:outline-none focus:border-violet-600 transition-colors"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                    )}
                  </button>
                </div>
              </div>

              {/* Confirm Password Input */}
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">
                  Confirm Password
                </label>
                <div
                  className={`relative rounded-lg transition-all duration-200 ${
                    focusedInput === "confirmPassword"
                      ? "ring-2 ring-violet-600 ring-opacity-50"
                      : ""
                  }`}
                >
                  <Lock
                    className={`absolute left-3 top-3 h-5 w-5 ${
                      focusedInput === "confirmPassword"
                        ? "text-violet-600"
                        : "text-gray-400"
                    }`}
                  />
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    onFocus={() => setFocusedInput("confirmPassword")}
                    onBlur={() => setFocusedInput("")}
                    className="pl-10 pr-12 py-3 w-full border border-gray-200 rounded-lg focus:outline-none focus:border-violet-600 transition-colors"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-3"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                    )}
                  </button>
                </div>
              </div>

              {/* Terms Checkbox */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={agreeToTerms}
                  onChange={(e) => setAgreeToTerms(e.target.checked)}
                  className="h-4 w-4 text-violet-600 focus:ring-violet-600 border-gray-300 rounded"
                />
                <label className="ml-2 text-sm text-gray-600">
                  I agree to the{" "}
                  <a href="#" className="text-violet-600 hover:text-violet-700">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-violet-600 hover:text-violet-700">
                    Privacy Policy
                  </a>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white py-3 px-4 rounded-lg font-medium hover:from-violet-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-offset-2 transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50"
              >
                {isLoading ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  <>
                    <span>Create Account</span>
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>

              {/* Social Login */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  className="flex items-center justify-center px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Github className="h-5 w-5 text-gray-700" />
                  <span className="ml-2 text-sm font-medium text-gray-700">
                    GitHub
                  </span>
                </button>
                <button
                  type="button"
                  className="flex items-center justify-center px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Apple className="h-5 w-5 text-gray-700" />
                  <span className="ml-2 text-sm font-medium text-gray-700">
                    Apple
                  </span>
                </button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Register;
