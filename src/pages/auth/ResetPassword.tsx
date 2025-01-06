// import React, { useState } from "react";
// import {
//   Lock,
//   Eye,
//   EyeOff,
//   ArrowRight,
//   Loader2,
//   CheckCircle2,
//   X,
//   Check,
// } from "lucide-react";
// import { Card, CardContent, CardHeader } from "@/components/ui/card";
// import { Alert, AlertDescription } from "@/components/ui/alert";

// const ResetPassword = () => {
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [error, setError] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const [isSuccess, setIsSuccess] = useState(false);
//   const [focusedInput, setFocusedInput] = useState("");

//   // Password requirements validation
//   const requirements = [
//     { text: "At least 8 characters long", test: (pass) => pass.length >= 8 },
//     { text: "Contains a number", test: (pass) => /\d/.test(pass) },
//     {
//       text: "Contains a special character",
//       test: (pass) => /[!@#$%^&*]/.test(pass),
//     },
//     { text: "Contains uppercase letter", test: (pass) => /[A-Z]/.test(pass) },
//     { text: "Contains lowercase letter", test: (pass) => /[a-z]/.test(pass) },
//   ];

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setIsLoading(true);

//     // Check all requirements
//     const failedRequirements = requirements.filter(
//       (req) => !req.test(password)
//     );
//     if (failedRequirements.length > 0) {
//       setError("Please meet all password requirements");
//       setIsLoading(false);
//       return;
//     }

//     if (password !== confirmPassword) {
//       setError("Passwords do not match");
//       setIsLoading(false);
//       return;
//     }

//     // Simulate API call
//     await new Promise((resolve) => setTimeout(resolve, 1500));
//     setIsLoading(false);
//     setIsSuccess(true);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-violet-50 to-indigo-100 flex flex-col justify-center items-center p-4">
//       <div className="w-full max-w-md relative">
//         {/* Decorative Elements */}
//         <div className="absolute -top-10 -left-10 w-20 h-20 bg-violet-600 rounded-full opacity-10 animate-pulse" />
//         <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-indigo-600 rounded-full opacity-10 animate-pulse delay-150" />

//         {/* Logo and Header */}
//         <div className="mb-8 text-center">
//           <div className="mx-auto w-16 h-16 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-xl flex items-center justify-center transform hover:rotate-12 transition-transform duration-300 mb-6">
//             <Lock className="w-8 h-8 text-white" />
//           </div>
//           <h1 className="text-4xl font-bold bg-gradient-to-r from-violet-700 to-indigo-700 bg-clip-text text-transparent mb-2">
//             Reset Password
//           </h1>
//           <p className="text-gray-600">
//             Create a new secure password for your account
//           </p>
//         </div>

//         <Card className="backdrop-blur-xl bg-white/80 border-0 shadow-xl">
//           <CardHeader>
//             {error && (
//               <Alert variant="destructive" className="mb-4">
//                 <AlertDescription>{error}</AlertDescription>
//               </Alert>
//             )}
//           </CardHeader>
//           <CardContent>
//             {!isSuccess ? (
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 {/* Password Input */}
//                 <div>
//                   <label className="text-sm font-medium text-gray-700 mb-1 block">
//                     New Password
//                   </label>
//                   <div
//                     className={`relative rounded-lg transition-all duration-200 ${
//                       focusedInput === "password"
//                         ? "ring-2 ring-violet-600 ring-opacity-50"
//                         : ""
//                     }`}
//                   >
//                     <Lock
//                       className={`absolute left-3 top-3 h-5 w-5 ${
//                         focusedInput === "password"
//                           ? "text-violet-600"
//                           : "text-gray-400"
//                       }`}
//                     />
//                     <input
//                       type={showPassword ? "text" : "password"}
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                       onFocus={() => setFocusedInput("password")}
//                       onBlur={() => setFocusedInput("")}
//                       className="pl-10 pr-12 py-3 w-full border border-gray-200 rounded-lg focus:outline-none focus:border-violet-600 transition-colors"
//                       placeholder="••••••••"
//                     />
//                     <button
//                       type="button"
//                       onClick={() => setShowPassword(!showPassword)}
//                       className="absolute right-3 top-3"
//                     >
//                       {showPassword ? (
//                         <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
//                       ) : (
//                         <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
//                       )}
//                     </button>
//                   </div>
//                 </div>

//                 {/* Confirm Password Input */}
//                 <div>
//                   <label className="text-sm font-medium text-gray-700 mb-1 block">
//                     Confirm New Password
//                   </label>
//                   <div
//                     className={`relative rounded-lg transition-all duration-200 ${
//                       focusedInput === "confirmPassword"
//                         ? "ring-2 ring-violet-600 ring-opacity-50"
//                         : ""
//                     }`}
//                   >
//                     <Lock
//                       className={`absolute left-3 top-3 h-5 w-5 ${
//                         focusedInput === "confirmPassword"
//                           ? "text-violet-600"
//                           : "text-gray-400"
//                       }`}
//                     />
//                     <input
//                       type={showConfirmPassword ? "text" : "password"}
//                       value={confirmPassword}
//                       onChange={(e) => setConfirmPassword(e.target.value)}
//                       onFocus={() => setFocusedInput("confirmPassword")}
//                       onBlur={() => setFocusedInput("")}
//                       className="pl-10 pr-12 py-3 w-full border border-gray-200 rounded-lg focus:outline-none focus:border-violet-600 transition-colors"
//                       placeholder="••••••••"
//                     />
//                     <button
//                       type="button"
//                       onClick={() =>
//                         setShowConfirmPassword(!showConfirmPassword)
//                       }
//                       className="absolute right-3 top-3"
//                     >
//                       {showConfirmPassword ? (
//                         <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
//                       ) : (
//                         <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
//                       )}
//                     </button>
//                   </div>
//                 </div>

//                 {/* Password Requirements */}
//                 <div className="space-y-3 bg-gray-50 p-4 rounded-lg">
//                   <h3 className="text-sm font-medium text-gray-700">
//                     Password Requirements
//                   </h3>
//                   <div className="space-y-2">
//                     {requirements.map((req, index) => (
//                       <div key={index} className="flex items-center text-sm">
//                         {req.test(password) ? (
//                           <Check className="h-4 w-4 text-green-500 mr-2" />
//                         ) : (
//                           <X className="h-4 w-4 text-gray-400 mr-2" />
//                         )}
//                         <span
//                           className={
//                             req.test(password)
//                               ? "text-green-700"
//                               : "text-gray-600"
//                           }
//                         >
//                           {req.text}
//                         </span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Submit Button */}
//                 <button
//                   type="submit"
//                   disabled={isLoading}
//                   className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white py-3 px-4 rounded-lg font-medium hover:from-violet-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-offset-2 transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50"
//                 >
//                   {isLoading ? (
//                     <Loader2 className="h-5 w-5 animate-spin" />
//                   ) : (
//                     <>
//                       <span>Reset Password</span>
//                       <ArrowRight className="h-4 w-4" />
//                     </>
//                   )}
//                 </button>
//               </form>
//             ) : (
//               <div className="text-center py-8">
//                 <div className="flex justify-center mb-4">
//                   <CheckCircle2 className="h-12 w-12 text-green-500" />
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-900 mb-2">
//                   Password Reset Successfully
//                 </h3>
//                 <p className="text-gray-600 mb-6">
//                   Your password has been reset successfully. You can now log in
//                   with your new password.
//                 </p>
//                 <a
//                   href="#"
//                   className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white py-3 px-4 rounded-lg font-medium hover:from-violet-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-offset-2 transition-all duration-200 inline-flex items-center justify-center space-x-2"
//                 >
//                   <span>Go to Login</span>
//                   <ArrowRight className="h-4 w-4" />
//                 </a>
//               </div>
//             )}
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default ResetPassword;


import React, { useState, useCallback, useEffect } from "react";
import {
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  Loader2,
  CheckCircle2,
//   X,
//   Check,
//   Shield,
} from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Link } from "react-router-dom";

// Rate limiting helper (should be implemented server-side as well)
const useRateLimit = (limit = 5, windowMs = 60000) => {
  const [attempts, setAttempts] = useState<number[]>([]);

  return useCallback(() => {
    const now = Date.now();
    const windowStart = now - windowMs;
    const recentAttempts = attempts.filter((time) => time > windowStart);

    if (recentAttempts.length >= limit) {
      return false;
    }

    setAttempts([...recentAttempts, now]);
    return true;
  }, [attempts, limit, windowMs]);
};

// Password strength estimator
const estimatePasswordStrength = (password:string) => {
  let strength = 0;
  if (password.length >= 12) strength += 2;
  else if (password.length >= 8) strength += 1;
  if (/[A-Z]/.test(password)) strength += 1;
  if (/[a-z]/.test(password)) strength += 1;
  if (/[0-9]/.test(password)) strength += 1;
  if (/[^A-Za-z0-9]/.test(password)) strength += 1;
  return Math.min(strength, 5);
};

const PasswordStrengthMeter = ({ strength }:{ strength: number }) => {
  const bars = [...Array(5)].map((_, i) => (
    <div
      key={i}
      className={`h-2 w-full rounded ${
        i < strength
          ? strength <= 2
            ? "bg-red-500"
            : strength <= 3
            ? "bg-yellow-500"
            : "bg-green-500"
          : "bg-gray-200"
      }`}
    />
  ));

  return (
    <div className="space-y-2">
      <div className="text-sm font-medium text-gray-700">
        Password Strength:{" "}
        {strength <= 2 ? "Weak" : strength <= 3 ? "Moderate" : "Strong"}
      </div>
      <div className="flex gap-1">{bars}</div>
    </div>
  );
};

// const SecurityNotice = () => (
//   <div className="flex items-start space-x-2 bg-blue-50 p-4 rounded-lg">
//     <Shield className="h-5 w-5 text-blue-500 mt-0.5" />
//     <div className="text-sm text-blue-700">
//       <p className="font-medium mb-1">Security Notice</p>
//       <p>This page is protected with:</p>
//       <ul className="list-disc ml-4 mt-1">
//         <li>Rate limiting</li>
//         <li>HTTPS encryption</li>
//         <li>Session timeout</li>
//         <li>Breach detection</li>
//       </ul>
//     </div>
//   </div>
// );

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [token, setToken] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const checkRateLimit = useRateLimit();

  // Validate reset token from URL on component mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const resetToken = params.get("token");
    if (!resetToken) {
    //   setError("Invalid or expired reset token");
      return;
    }
    setToken(resetToken);
  }, []);

  const handleSubmit = async (e:React.FormEvent) => {
    e.preventDefault();

    // Rate limiting check
    if (!checkRateLimit()) {
    //   setError("Too many attempts. Please try again later.");
      return;
    }

    // Basic validation
    if (!token) {
    //   setError("Invalid reset token");
      return;
    }

    if (password !== confirmPassword) {
    //   setError("Passwords do not match");
      return;
    }

    const strength = estimatePasswordStrength(password);
    if (strength < 3) {
    //   setError("Please choose a stronger password");
      return;
    }

    setIsLoading(true);
    try {
      // Simulated API call with security headers
      const response = await fetch("/api/reset-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-Token": "fetch-from-meta-tag",
        },
        body: JSON.stringify({
          token,
          password: password, // In reality, hash password client-side before sending
        }),
      });

      if (!response.ok) throw new Error("Password reset failed");

      setIsSuccess(true);
    } catch (err) {
    console.log(err);
    //   setError("Failed to reset password. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-indigo-100 flex flex-col justify-center items-center p-4">
      <div className="w-full max-w-md relative">
        {/* Decorative Elements */}
        <div className="absolute -top-10 -left-10 w-20 h-20 bg-violet-600 rounded-full opacity-10 animate-pulse" />
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-indigo-600 rounded-full opacity-10 animate-pulse delay-150" />

        {/* Logo and Header */}
        {/* <SecurityNotice /> */}

        <Card className="backdrop-blur-xl bg-white/80 border-0 shadow-xl">
          <CardHeader>
            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-xl flex items-center justify-center transform hover:rotate-12 transition-transform duration-300 mb-6">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-violet-700 to-indigo-700 bg-clip-text text-transparent mb-2">
                Create Account
              </h1>
              <p className="text-gray-600 mt-2">
                Choose a strong password to protect your account
              </p>
            </div>
          </CardHeader>

          <CardContent>
            {error && (
              <Alert variant="destructive" className="mb-6">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {!isSuccess ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      New Password
                    </label>
                    <div className="mt-1 relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-3 py-2 border rounded-md"
                        required
                        minLength={8}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-2.5"
                      >
                        {showPassword ? (
                          <EyeOff className="h-5 w-5 text-gray-400" />
                        ) : (
                          <Eye className="h-5 w-5 text-gray-400" />
                        )}
                      </button>
                    </div>
                  </div>

                  <PasswordStrengthMeter
                    strength={estimatePasswordStrength(password)}
                  />

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="mt-1 w-full px-3 py-2 border rounded-md"
                      required
                    />
                  </div>
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
                    "Reset Password"
                  )}
                </button>
              
              </form>
            ) : (
              <div className="text-center py-6">
                <CheckCircle2 className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900">
                  Password Reset Successfully
                </h3>
                <p className="text-gray-600 mt-2">
                  Your password has been securely updated. Please log in with
                  your new password.
                </p>
                <Link
                  to="/login"
                  className="mt-4 inline-flex items-center text-violet-600 hover:text-violet-700"
                >
                  Go to Login <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ResetPassword;