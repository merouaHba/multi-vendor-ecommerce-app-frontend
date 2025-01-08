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
// } from "lucide-react";
// import {
//   Card,
//   CardContent,
// //   CardDescription,
//   CardFooter,
//   CardHeader,
// //   CardTitle,
// } from "@/components/ui/card";
// import { Alert, AlertDescription } from "@/components/ui/alert";
// import { Link } from "react-router-dom";

// const Login = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [rememberMe, setRememberMe] = useState(false);
//   const [error, setError] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const [focusedInput, setFocusedInput] = useState("");

//   const validateEmail = (email:string) => {
//     return email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
//   };

//   const handleSubmit = async (e:React.FormEvent) => {
//     e.preventDefault();
//     setError("");
//     setIsLoading(true);

//     if (!validateEmail(email)) {
//       setError("Please enter a valid email address");
//       setIsLoading(false);
//       return;
//     }

//     if (password.length < 6) {
//       setError("Password must be at least 6 characters long");
//       setIsLoading(false);
//       return;
//     }

//     // Simulate API call
//     await new Promise((resolve) => setTimeout(resolve, 1500));
//     setIsLoading(false);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
//       <div className="relative sm:mx-auto sm:w-full sm:max-w-md">
//         {/* Decorative elements */}
//         <div className="absolute -top-12 -left-12 w-24 h-24 bg-indigo-900 rounded-full opacity-10 animate-pulse" />
//         <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-indigo-900 rounded-full opacity-10 animate-pulse delay-150" />

//         {/* Logo */}
//         <div className="mx-auto w-16 h-16 bg-gradient-to-r from-indigo-800 to-indigo-900 rounded-2xl flex items-center justify-center transform hover:rotate-12 transition-transform duration-300">
//           <Lock className="w-8 h-8 text-white" />
//         </div>

//         <h2 className="mt-6 text-center text-4xl font-extrabold bg-gradient-to-r from-indigo-800 to-indigo-900 bg-clip-text text-transparent">
//           Welcome back
//         </h2>
//         <p className="mt-3 text-center text-sm text-gray-600">
//           Don't have an account?{" "}
//           <Link
//             to="/register"
//             className="font-medium text-indigo-900 hover:text-indigo-800 transition-colors duration-200"
//           >
//             Sign up for free
//           </Link>
//         </p>
//       </div>

//       <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
//         <Card className="bg-white/80 backdrop-blur-lg shadow-xl border-0">
//           <CardHeader>
//             {error && (
//               <Alert variant="destructive" className="mb-4 animate-shake">
//                 <AlertDescription>{error}</AlertDescription>
//               </Alert>
//             )}
//           </CardHeader>
//           <CardContent>
//             <form onSubmit={handleSubmit} className="space-y-6">
//               {/* Email Input */}
//               <div className="space-y-1">
//                 <label
//                   htmlFor="email"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Email address
//                 </label>
//                 <div
//                   className={`relative rounded-lg transition-all duration-200 ${
//                     focusedInput === "email"
//                       ? "ring-2 ring-indigo-900 ring-opacity-50"
//                       : ""
//                   }`}
//                 >
//                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                     <Mail
//                       className={`h-5 w-5 transition-colors duration-200 ${
//                         focusedInput === "email"
//                           ? "text-indigo-900"
//                           : "text-gray-400"
//                       }`}
//                     />
//                   </div>
//                   <input
//                     id="email"
//                     type="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     onFocus={() => setFocusedInput("email")}
//                     onBlur={() => setFocusedInput("")}
//                     className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg leading-5 bg-white bg-opacity-50 backdrop-blur-sm placeholder-gray-400 focus:outline-none focus:border-indigo-900 transition-colors duration-200"
//                     placeholder="you@example.com"
//                     required
//                   />
//                 </div>
//               </div>

//               {/* Password Input */}
//               <div className="space-y-1">
//                 <label
//                   htmlFor="password"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Password
//                 </label>
//                 <div
//                   className={`relative rounded-lg transition-all duration-200 ${
//                     focusedInput === "password"
//                       ? "ring-2 ring-indigo-900 ring-opacity-50"
//                       : ""
//                   }`}
//                 >
//                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                     <Lock
//                       className={`h-5 w-5 transition-colors duration-200 ${
//                         focusedInput === "password"
//                           ? "text-indigo-900"
//                           : "text-gray-400"
//                       }`}
//                     />
//                   </div>
//                   <input
//                     id="password"
//                     type={showPassword ? "text" : "password"}
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     onFocus={() => setFocusedInput("password")}
//                     onBlur={() => setFocusedInput("")}
//                     className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg leading-5 bg-white bg-opacity-50 backdrop-blur-sm placeholder-gray-400 focus:outline-none focus:border-indigo-900 transition-colors duration-200"
//                     placeholder="••••••••"
//                     required
//                   />
//                   <button
//                     type="button"
//                     onClick={() => setShowPassword(!showPassword)}
//                     className="absolute inset-y-0 right-0 pr-3 flex items-center focus:outline-none"
//                   >
//                     {showPassword ? (
//                       <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors duration-200" />
//                     ) : (
//                       <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors duration-200" />
//                     )}
//                   </button>
//                 </div>
//               </div>

//               {/* Remember Me & Forgot Password */}
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center">
//                   <div className="relative">
//                     <input
//                       id="remember-me"
//                       type="checkbox"
//                       checked={rememberMe}
//                       onChange={(e) => setRememberMe(e.target.checked)}
//                       className="h-4 w-4 text-indigo-900 focus:ring-indigo-900 border-gray-300 rounded"
//                     />
//                     <div
//                       className={`absolute inset-0 bg-indigo-900 scale-0 rounded transition-transform duration-200 ${
//                         rememberMe ? "scale-75" : "scale-0"
//                       }`}
//                     />
//                   </div>
//                   <label
//                     htmlFor="remember-me"
//                     className="ml-2 block text-sm text-gray-700"
//                   >
//                     Remember me
//                   </label>
//                 </div>

//                 <Link
//                   to="/forget-password"
//                   className="text-sm font-medium text-indigo-900 hover:text-indigo-800 transition-colors duration-200"
//                 >
//                   Forgot your password?
//                 </Link>
//               </div>

//               {/* Submit Button */}
//               <button
//                 type="submit"
//                 disabled={isLoading}
//                 className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg text-sm font-medium text-white bg-indigo-900 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-900 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed group"
//               >
//                 {isLoading ? (
//                   <Loader2 className="h-5 w-5 animate-spin" />
//                 ) : (
//                   <>
//                     Sign in
//                     <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-200" />
//                   </>
//                 )}
//               </button>
//             </form>

//             {/* Social Login Section */}
//             <div className="mt-8">
//               <div className="relative">
//                 <div className="absolute inset-0 flex items-center">
//                   <div className="w-full border-t border-gray-300" />
//                 </div>
//                 <div className="relative flex justify-center text-sm">
//                   <span className="px-2 bg-white text-gray-500">
//                     Or continue with
//                   </span>
//                 </div>
//               </div>

//               <div className="mt-6 grid grid-cols-2 gap-3">
//                 <button
//                   type="button"
//                   className="w-full inline-flex justify-center items-center py-3 px-4 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-700 border border-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-900 transition-all duration-200"
//                 >
//                   <Github className="h-5 w-5" />
//                   <span className="ml-2">GitHub</span>
//                 </button>
//                 <button
//                   type="button"
//                   className="w-full inline-flex justify-center items-center py-3 px-4 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-700 border border-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-900 transition-all duration-200"
//                 >
//                   <Apple className="h-5 w-5" />
//                   <span className="ml-2">Apple</span>
//                 </button>
//               </div>
//             </div>
//           </CardContent>
//           <CardFooter>
//             <p className="text-xs text-center text-gray-500 mt-4 w-full">
//               By signing in, you agree to our{" "}
//               <a
//                 href="#"
//                 className="text-indigo-900 hover:text-indigo-800 transition-colors duration-200"
//               >
//                 Terms of Service
//               </a>{" "}
//               and{" "}
//               <a
//                 href="#"
//                 className="text-indigo-900 hover:text-indigo-800 transition-colors duration-200"
//               >
//                 Privacy Policy
//               </a>
//             </p>
//           </CardFooter>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default Login;




// import React, { useState } from "react";
// import { Link } from "lucide-react";
// import { Alert, AlertDescription } from "@/components/ui/alert";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// const AuthPages = () => {
//   const [currentView, setCurrentView] = useState("customerLogin");
//   const [email, setEmail] = useState("");
//   const [verificationSent, setVerificationSent] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission
//   };

//   const sendVerificationEmail = () => {
//     setVerificationSent(true);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
//       <div className="sm:mx-auto sm:w-full sm:max-w-md">
//         <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 mb-8">
//           Marketplace Name
//         </h2>

//         {/* Navigation */}
//         <div className="flex justify-center space-x-4 mb-8">
//           <button
//             onClick={() => setCurrentView("customerLogin")}
//             className={`px-4 py-2 rounded-lg ${
//               currentView.includes("customer")
//                 ? "bg-blue-600 text-white"
//                 : "bg-gray-200"
//             }`}
//           >
//             Customer
//           </button>
//           <button
//             onClick={() => setCurrentView("sellerLogin")}
//             className={`px-4 py-2 rounded-lg ${
//               currentView.includes("seller")
//                 ? "bg-blue-600 text-white"
//                 : "bg-gray-200"
//             }`}
//           >
//             Seller
//           </button>
//         </div>

//         <Card className="bg-white shadow-lg rounded-lg">
//           {/* Customer Authentication */}
//           {currentView === "customerLogin" && (
//             <div>
//               <CardHeader>
//                 <CardTitle>Customer Sign In</CardTitle>
//                 <CardDescription>
//                   Welcome back! Please enter your details
//                 </CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <Tabs defaultValue="login">
//                   <TabsList className="grid w-full grid-cols-2">
//                     <TabsTrigger value="login">Login</TabsTrigger>
//                     <TabsTrigger value="register">Register</TabsTrigger>
//                   </TabsList>
//                   <TabsContent value="login">
//                     <form onSubmit={handleSubmit} className="space-y-4">
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700">
//                           Email
//                         </label>
//                         <input
//                           type="email"
//                           className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
//                           required
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700">
//                           Password
//                         </label>
//                         <input
//                           type="password"
//                           className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
//                           required
//                         />
//                       </div>
//                       <button
//                         type="submit"
//                         className="w-full bg-blue-600 text-white rounded-md px-4 py-2 hover:bg-blue-700"
//                       >
//                         Sign In
//                       </button>
//                     </form>
//                   </TabsContent>
//                   <TabsContent value="register">
//                     <form onSubmit={handleSubmit} className="space-y-4">
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700">
//                           Full Name
//                         </label>
//                         <input
//                           type="text"
//                           className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
//                           required
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700">
//                           Email
//                         </label>
//                         <input
//                           type="email"
//                           className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
//                           required
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700">
//                           Password
//                         </label>
//                         <input
//                           type="password"
//                           className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
//                           required
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700">
//                           Confirm Password
//                         </label>
//                         <input
//                           type="password"
//                           className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
//                           required
//                         />
//                       </div>
//                       <button
//                         type="submit"
//                         className="w-full bg-blue-600 text-white rounded-md px-4 py-2 hover:bg-blue-700"
//                       >
//                         Create Account
//                       </button>
//                     </form>
//                   </TabsContent>
//                 </Tabs>
//               </CardContent>
//               <CardFooter className="flex justify-between">
//                 <button
//                   onClick={() => setCurrentView("passwordReset")}
//                   className="text-sm text-blue-600 hover:underline"
//                 >
//                   Forgot Password?
//                 </button>
//               </CardFooter>
//             </div>
//           )}

//           {/* Seller Authentication */}
//           {currentView === "sellerLogin" && (
//             <div>
//               <CardHeader>
//                 <CardTitle>Seller Portal</CardTitle>
//                 <CardDescription>Access your seller dashboard</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <Tabs defaultValue="login">
//                   <TabsList className="grid w-full grid-cols-2">
//                     <TabsTrigger value="login">Login</TabsTrigger>
//                     <TabsTrigger value="register">Register</TabsTrigger>
//                   </TabsList>
//                   <TabsContent value="login">
//                     <form onSubmit={handleSubmit} className="space-y-4">
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700">
//                           Email
//                         </label>
//                         <input
//                           type="email"
//                           className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
//                           required
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700">
//                           Password
//                         </label>
//                         <input
//                           type="password"
//                           className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
//                           required
//                         />
//                       </div>
//                       <button
//                         type="submit"
//                         className="w-full bg-blue-600 text-white rounded-md px-4 py-2 hover:bg-blue-700"
//                       >
//                         Sign In
//                       </button>
//                     </form>
//                   </TabsContent>
//                   <TabsContent value="register">
//                     <form onSubmit={handleSubmit} className="space-y-4">
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700">
//                           Business Name
//                         </label>
//                         <input
//                           type="text"
//                           className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
//                           required
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700">
//                           Email
//                         </label>
//                         <input
//                           type="email"
//                           className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
//                           required
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700">
//                           Phone
//                         </label>
//                         <input
//                           type="tel"
//                           className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
//                           required
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700">
//                           Password
//                         </label>
//                         <input
//                           type="password"
//                           className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
//                           required
//                         />
//                       </div>
//                       <button
//                         type="submit"
//                         className="w-full bg-blue-600 text-white rounded-md px-4 py-2 hover:bg-blue-700"
//                       >
//                         Register as Seller
//                       </button>
//                     </form>
//                   </TabsContent>
//                 </Tabs>
//               </CardContent>
//               <CardFooter className="flex justify-between">
//                 <button
//                   onClick={() => setCurrentView("passwordReset")}
//                   className="text-sm text-blue-600 hover:underline"
//                 >
//                   Forgot Password?
//                 </button>
//               </CardFooter>
//             </div>
//           )}

//           {/* Password Reset */}
//           {currentView === "passwordReset" && (
//             <div>
//               <CardHeader>
//                 <CardTitle>Reset Password</CardTitle>
//                 <CardDescription>
//                   Enter your email to receive a reset link
//                 </CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <form onSubmit={handleSubmit} className="space-y-4">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700">
//                       Email
//                     </label>
//                     <input
//                       type="email"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                       className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
//                       required
//                     />
//                   </div>
//                   <button
//                     type="submit"
//                     className="w-full bg-blue-600 text-white rounded-md px-4 py-2 hover:bg-blue-700"
//                   >
//                     Send Reset Link
//                   </button>
//                 </form>
//               </CardContent>
//               <CardFooter>
//                 <button
//                   onClick={() => setCurrentView("customerLogin")}
//                   className="text-sm text-blue-600 hover:underline"
//                 >
//                   Back to Login
//                 </button>
//               </CardFooter>
//             </div>
//           )}

//           {/* Email Verification */}
//           {currentView === "emailVerification" && (
//             <div>
//               <CardHeader>
//                 <CardTitle>Verify Your Email</CardTitle>
//                 <CardDescription>
//                   {verificationSent
//                     ? "Check your email for the verification link"
//                     : "Click below to receive a verification link"}
//                 </CardDescription>
//               </CardHeader>
//               <CardContent>
//                 {verificationSent ? (
//                   <Alert>
//                     <AlertDescription>
//                       A verification link has been sent to {email}. Please check
//                       your inbox and spam folder.
//                     </AlertDescription>
//                   </Alert>
//                 ) : (
//                   <button
//                     onClick={sendVerificationEmail}
//                     className="w-full bg-blue-600 text-white rounded-md px-4 py-2 hover:bg-blue-700"
//                   >
//                     Send Verification Email
//                   </button>
//                 )}
//               </CardContent>
//               <CardFooter className="flex justify-between">
//                 <button
//                   onClick={() => setCurrentView("customerLogin")}
//                   className="text-sm text-blue-600 hover:underline"
//                 >
//                   Back to Login
//                 </button>
//                 {verificationSent && (
//                   <button
//                     onClick={sendVerificationEmail}
//                     className="text-sm text-blue-600 hover:underline"
//                   >
//                     Resend Email
//                   </button>
//                 )}
//               </CardFooter>
//             </div>
//           )}
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default AuthPages;





import React from "react";
import { Button } from "@/components/ui/button";
import  FormInput  from "@/components/common/formInput";
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
import useLogin from "@/hooks/useLogin";
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
  <Button
    variant="outline"
    className="w-full flex items-center justify-center gap-2"
    {...props}
  >
    {icon}
    {children}
  </Button>
);
 const BuyerLogin = () => {
const {
  // error,
  // loading,
  accessToken,
  formErrors,
  // searchParams,
  register,
  handleSubmit,
  submitForm,
} = useLogin("user");
  
if (accessToken) {
  return <Navigate to="/" />;
}
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Card className="max-w-md w-full mx-auto">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center text-indigo-600">
            Welcome back
          </CardTitle>
          <CardDescription className="text-center">
            Login to access your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-4">
            <SocialButton icon={<GoogleIcon />}>
              Continue with Google
            </SocialButton>
            <SocialButton icon={<FacebookIcon />}>
              Continue with Facebook
            </SocialButton>
            <SocialButton icon={<AppleIcon />}>
              Continue with Apple
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
            {/* <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div> */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                />
                <Label htmlFor="remember-me" className="ml-2">
                  Remember me
                </Label>
              </div>
              <Link
                to="/forgot-password"
                className="text-sm text-indigo-600 hover:text-indigo-500"
              >
                Forgot password?
              </Link>
            </div>
            <Button className="w-full" type="submit">
              Sign in
            </Button>
            <p className="text-center text-sm text-gray-600">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="text-indigo-600 hover:text-indigo-500"
              >
                Sign up
              </Link>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
export default BuyerLogin;
