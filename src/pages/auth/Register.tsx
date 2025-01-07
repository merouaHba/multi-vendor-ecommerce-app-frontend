// import React, { useState } from "react";
// import {
//   Eye,
//   EyeOff,
//   Mail,
//   Lock,
//   Github,
//   Apple,
//   ArrowRight,
//   Loader2,
//   User,
// } from "lucide-react";
// import { Card, CardContent, CardHeader } from "@/components/ui/card";
// import { Alert, AlertDescription } from "@/components/ui/alert";
// import { Link } from "react-router-dom";

// const Register = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [fullName, setFullName] = useState("");
//   const [agreeToTerms, setAgreeToTerms] = useState(false);
//   const [error, setError] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const [focusedInput, setFocusedInput] = useState("");

//   const handleSubmit = async (e:React.FormEvent) => {
//     e.preventDefault();
//     setError("");
//     setIsLoading(true);

//     if (
//       !fullName.trim() ||
//       !email.trim() ||
//       !password ||
//       !confirmPassword ||
//       !agreeToTerms
//     ) {
//       setError("Please fill in all fields");
//       setIsLoading(false);
//       return;
//     }

//     if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
//       setError("Please enter a valid email address");
//       setIsLoading(false);
//       return;
//     }

//     if (password.length < 6) {
//       setError("Password must be at least 6 characters");
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
//             <User className="w-8 h-8 text-white" />
//           </div>
//           <h1 className="text-4xl font-bold bg-gradient-to-r from-violet-700 to-indigo-700 bg-clip-text text-transparent mb-2">
//             Create Account
//           </h1>
//           <p className="text-gray-600">
//             Already have an account?{" "}
//             <Link
//               to="/login"
//               className="text-indigo-600 hover:text-indigo-700 font-medium"
//             >
//               Sign in
//             </Link>
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
//             <form onSubmit={handleSubmit} className="space-y-6">
//               {/* Name Input */}
//               <div>
//                 <label className="text-sm font-medium text-gray-700 mb-1 block">
//                   Full Name
//                 </label>
//                 <div
//                   className={`relative rounded-lg transition-all duration-200 ${
//                     focusedInput === "name"
//                       ? "ring-2 ring-violet-600 ring-opacity-50"
//                       : ""
//                   }`}
//                 >
//                   <User
//                     className={`absolute left-3 top-3 h-5 w-5 ${
//                       focusedInput === "name"
//                         ? "text-violet-600"
//                         : "text-gray-400"
//                     }`}
//                   />
//                   <input
//                     type="text"
//                     value={fullName}
//                     onChange={(e) => setFullName(e.target.value)}
//                     onFocus={() => setFocusedInput("name")}
//                     onBlur={() => setFocusedInput("")}
//                     className="pl-10 pr-4 py-3 w-full border border-gray-200 rounded-lg focus:outline-none focus:border-violet-600 transition-colors"
//                     placeholder="John Doe"
//                   />
//                 </div>
//               </div>

//               {/* Email Input */}
//               <div>
//                 <label className="text-sm font-medium text-gray-700 mb-1 block">
//                   Email Address
//                 </label>
//                 <div
//                   className={`relative rounded-lg transition-all duration-200 ${
//                     focusedInput === "email"
//                       ? "ring-2 ring-violet-600 ring-opacity-50"
//                       : ""
//                   }`}
//                 >
//                   <Mail
//                     className={`absolute left-3 top-3 h-5 w-5 ${
//                       focusedInput === "email"
//                         ? "text-violet-600"
//                         : "text-gray-400"
//                     }`}
//                   />
//                   <input
//                     type="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     onFocus={() => setFocusedInput("email")}
//                     onBlur={() => setFocusedInput("")}
//                     className="pl-10 pr-4 py-3 w-full border border-gray-200 rounded-lg focus:outline-none focus:border-violet-600 transition-colors"
//                     placeholder="you@example.com"
//                   />
//                 </div>
//               </div>

//               {/* Password Input */}
//               <div>
//                 <label className="text-sm font-medium text-gray-700 mb-1 block">
//                   Password
//                 </label>
//                 <div
//                   className={`relative rounded-lg transition-all duration-200 ${
//                     focusedInput === "password"
//                       ? "ring-2 ring-violet-600 ring-opacity-50"
//                       : ""
//                   }`}
//                 >
//                   <Lock
//                     className={`absolute left-3 top-3 h-5 w-5 ${
//                       focusedInput === "password"
//                         ? "text-violet-600"
//                         : "text-gray-400"
//                     }`}
//                   />
//                   <input
//                     type={showPassword ? "text" : "password"}
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     onFocus={() => setFocusedInput("password")}
//                     onBlur={() => setFocusedInput("")}
//                     className="pl-10 pr-12 py-3 w-full border border-gray-200 rounded-lg focus:outline-none focus:border-violet-600 transition-colors"
//                     placeholder="••••••••"
//                   />
//                   <button
//                     type="button"
//                     onClick={() => setShowPassword(!showPassword)}
//                     className="absolute right-3 top-3"
//                   >
//                     {showPassword ? (
//                       <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
//                     ) : (
//                       <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
//                     )}
//                   </button>
//                 </div>
//               </div>

//               {/* Confirm Password Input */}
//               <div>
//                 <label className="text-sm font-medium text-gray-700 mb-1 block">
//                   Confirm Password
//                 </label>
//                 <div
//                   className={`relative rounded-lg transition-all duration-200 ${
//                     focusedInput === "confirmPassword"
//                       ? "ring-2 ring-violet-600 ring-opacity-50"
//                       : ""
//                   }`}
//                 >
//                   <Lock
//                     className={`absolute left-3 top-3 h-5 w-5 ${
//                       focusedInput === "confirmPassword"
//                         ? "text-violet-600"
//                         : "text-gray-400"
//                     }`}
//                   />
//                   <input
//                     type={showConfirmPassword ? "text" : "password"}
//                     value={confirmPassword}
//                     onChange={(e) => setConfirmPassword(e.target.value)}
//                     onFocus={() => setFocusedInput("confirmPassword")}
//                     onBlur={() => setFocusedInput("")}
//                     className="pl-10 pr-12 py-3 w-full border border-gray-200 rounded-lg focus:outline-none focus:border-violet-600 transition-colors"
//                     placeholder="••••••••"
//                   />
//                   <button
//                     type="button"
//                     onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                     className="absolute right-3 top-3"
//                   >
//                     {showConfirmPassword ? (
//                       <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
//                     ) : (
//                       <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
//                     )}
//                   </button>
//                 </div>
//               </div>

//               {/* Terms Checkbox */}
//               <div className="flex items-center">
//                 <input
//                   type="checkbox"
//                   checked={agreeToTerms}
//                   onChange={(e) => setAgreeToTerms(e.target.checked)}
//                   className="h-4 w-4 text-violet-600 focus:ring-violet-600 border-gray-300 rounded"
//                 />
//                 <label className="ml-2 text-sm text-gray-600">
//                   I agree to the{" "}
//                   <a href="#" className="text-violet-600 hover:text-violet-700">
//                     Terms of Service
//                   </a>{" "}
//                   and{" "}
//                   <a href="#" className="text-violet-600 hover:text-violet-700">
//                     Privacy Policy
//                   </a>
//                 </label>
//               </div>

//               {/* Submit Button */}
//               <button
//                 type="submit"
//                 disabled={isLoading}
//                 className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white py-3 px-4 rounded-lg font-medium hover:from-violet-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-offset-2 transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50"
//               >
//                 {isLoading ? (
//                   <Loader2 className="h-5 w-5 animate-spin" />
//                 ) : (
//                   <>
//                     <span>Create Account</span>
//                     <ArrowRight className="h-4 w-4" />
//                   </>
//                 )}
//               </button>

//               {/* Social Login */}
//               <div className="relative">
//                 <div className="absolute inset-0 flex items-center">
//                   <div className="w-full border-t border-gray-200" />
//                 </div>
//                 <div className="relative flex justify-center text-sm">
//                   <span className="px-2 bg-white text-gray-500">
//                     Or continue with
//                   </span>
//                 </div>
//               </div>

//               <div className="grid grid-cols-2 gap-4">
//                 <button
//                   type="button"
//                   className="flex items-center justify-center px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
//                 >
//                   <Github className="h-5 w-5 text-gray-700" />
//                   <span className="ml-2 text-sm font-medium text-gray-700">
//                     GitHub
//                   </span>
//                 </button>
//                 <button
//                   type="button"
//                   className="flex items-center justify-center px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
//                 >
//                   <Apple className="h-5 w-5 text-gray-700" />
//                   <span className="ml-2 text-sm font-medium text-gray-700">
//                     Apple
//                   </span>
//                 </button>
//               </div>
//             </form>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default Register;



import React from "react";
// import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";

import { Separator } from "@/components/ui/separator";
import { Link, Navigate } from "react-router-dom";
import useRegister from "@/hooks/useRegister";
import FormInput from "@/components/common/formInput";
// Social Icons Components
const GoogleIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24">
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      fill="#EA4335"
    />
  </svg>
);

const FacebookIcon = () => (
  <svg className="h-5 w-5" fill="#1877F2" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const AppleIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M14.94 5.19A4.38 4.38 0 0 0 16 2a4.38 4.38 0 0 0-3 1.52 4.09 4.09 0 0 0-1.07 3.19 3.62 3.62 0 0 0 3.01-1.52zm3.55 14.44c.82-.96 1.22-1.97 1.22-3.03-.05-1.95-1.35-3.38-3.92-4.29-.92-.34-2.15-.51-3.69-.51s-2.78.17-3.69.51c-2.57.92-3.87 2.34-3.92 4.29 0 1.06.4 2.07 1.22 3.03.81.96 1.85 1.44 3.12 1.44.74 0 1.67-.35 2.79-1.06 1.12.71 2.05 1.06 2.79 1.06 1.27 0 2.31-.48 3.13-1.44z"/>
  </svg>
);
type socialProps = {
  children: React.ReactNode;
  icon: React.ReactNode;
};

const SocialButton = ({ icon, children, ...props }: socialProps) => (
  <button className="w-full flex items-center justify-center gap-2" {...props}>
    {icon}
    {children}
  </button>
);



 const BuyerRegister = () => {
  // const [showPassword, setShowPassword] = React.useState(false);
  const {
    // loading,
    // error,
    accessToken,
    formErrors,
    // emailAvailabilityStatus,
    submitForm,
    register,
    handleSubmit,
    // emailOnBlurHandler,
  } = useRegister();

  if (accessToken) {
    return <Navigate to="/" />;
  }
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Card className="max-w-md w-full mx-auto">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center text-indigo-600">
            Create an account
          </CardTitle>
          <CardDescription className="text-center">
            Sign up to start shopping
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-4">
            <SocialButton icon={<GoogleIcon />}>
              Sign up with Google
            </SocialButton>
            <SocialButton  icon={<FacebookIcon />}>
              Sign up with Facebook
            </SocialButton>
            <SocialButton  icon={<AppleIcon />}>
              Sign up with Apple
            </SocialButton>
          </div>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <Separator />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>

          <form onSubmit={handleSubmit(submitForm)} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <FormInput
                id={register("firstname").name}
                label="First name"
                {...register("firstname")}
                error={formErrors.firstname?.message}
              />
              <FormInput
                id={register("lastname").name}
                label="Last name"
                {...register("lastname")}
                error={formErrors.lastname?.message}
              />
            </div>

            <FormInput
              id={register("email").name}
              label="Email address"
              type="email"
              {...register("email")}
              error={formErrors.email?.message}
            />

            <FormInput
              id={register("password").name}
              label="Password"
              showPasswordToggle
              {...register("password")}
              error={formErrors.password?.message}
            />

            <FormInput
              id={register("confirmPassword").name}
              label="Confirm Password"
              showPasswordToggle
              {...register("confirmPassword")}
              error={formErrors.confirmPassword?.message}
            />
            <div className="flex items-center">
              <input
                id="terms"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                required
              />
              <Label htmlFor="terms" className="ml-2">
                I agree to the{" "}
                <Link
                  to="/terms"
                  className="text-indigo-600 hover:text-indigo-500"
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  to="/privacy"
                  className="text-indigo-600 hover:text-indigo-500"
                >
                  Privacy Policy
                </Link>
              </Label>
            </div>
            <Button className="w-full" type="submit">
              Sign up
            </Button>

            <p className="text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-indigo-600 hover:text-indigo-500"
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

export default BuyerRegister;
