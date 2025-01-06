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




import React, { useState } from "react";
import { Link } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const AuthPages = () => {
  const [currentView, setCurrentView] = useState("customerLogin");
  const [email, setEmail] = useState("");
  const [verificationSent, setVerificationSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  const sendVerificationEmail = () => {
    setVerificationSent(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 mb-8">
          Marketplace Name
        </h2>

        {/* Navigation */}
        <div className="flex justify-center space-x-4 mb-8">
          <button
            onClick={() => setCurrentView("customerLogin")}
            className={`px-4 py-2 rounded-lg ${
              currentView.includes("customer")
                ? "bg-blue-600 text-white"
                : "bg-gray-200"
            }`}
          >
            Customer
          </button>
          <button
            onClick={() => setCurrentView("sellerLogin")}
            className={`px-4 py-2 rounded-lg ${
              currentView.includes("seller")
                ? "bg-blue-600 text-white"
                : "bg-gray-200"
            }`}
          >
            Seller
          </button>
        </div>

        <Card className="bg-white shadow-lg rounded-lg">
          {/* Customer Authentication */}
          {currentView === "customerLogin" && (
            <div>
              <CardHeader>
                <CardTitle>Customer Sign In</CardTitle>
                <CardDescription>
                  Welcome back! Please enter your details
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="login">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="login">Login</TabsTrigger>
                    <TabsTrigger value="register">Register</TabsTrigger>
                  </TabsList>
                  <TabsContent value="login">
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Email
                        </label>
                        <input
                          type="email"
                          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Password
                        </label>
                        <input
                          type="password"
                          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                          required
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-blue-600 text-white rounded-md px-4 py-2 hover:bg-blue-700"
                      >
                        Sign In
                      </button>
                    </form>
                  </TabsContent>
                  <TabsContent value="register">
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Full Name
                        </label>
                        <input
                          type="text"
                          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Email
                        </label>
                        <input
                          type="email"
                          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Password
                        </label>
                        <input
                          type="password"
                          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Confirm Password
                        </label>
                        <input
                          type="password"
                          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                          required
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-blue-600 text-white rounded-md px-4 py-2 hover:bg-blue-700"
                      >
                        Create Account
                      </button>
                    </form>
                  </TabsContent>
                </Tabs>
              </CardContent>
              <CardFooter className="flex justify-between">
                <button
                  onClick={() => setCurrentView("passwordReset")}
                  className="text-sm text-blue-600 hover:underline"
                >
                  Forgot Password?
                </button>
              </CardFooter>
            </div>
          )}

          {/* Seller Authentication */}
          {currentView === "sellerLogin" && (
            <div>
              <CardHeader>
                <CardTitle>Seller Portal</CardTitle>
                <CardDescription>Access your seller dashboard</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="login">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="login">Login</TabsTrigger>
                    <TabsTrigger value="register">Register</TabsTrigger>
                  </TabsList>
                  <TabsContent value="login">
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Email
                        </label>
                        <input
                          type="email"
                          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Password
                        </label>
                        <input
                          type="password"
                          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                          required
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-blue-600 text-white rounded-md px-4 py-2 hover:bg-blue-700"
                      >
                        Sign In
                      </button>
                    </form>
                  </TabsContent>
                  <TabsContent value="register">
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Business Name
                        </label>
                        <input
                          type="text"
                          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Email
                        </label>
                        <input
                          type="email"
                          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Phone
                        </label>
                        <input
                          type="tel"
                          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Password
                        </label>
                        <input
                          type="password"
                          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                          required
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-blue-600 text-white rounded-md px-4 py-2 hover:bg-blue-700"
                      >
                        Register as Seller
                      </button>
                    </form>
                  </TabsContent>
                </Tabs>
              </CardContent>
              <CardFooter className="flex justify-between">
                <button
                  onClick={() => setCurrentView("passwordReset")}
                  className="text-sm text-blue-600 hover:underline"
                >
                  Forgot Password?
                </button>
              </CardFooter>
            </div>
          )}

          {/* Password Reset */}
          {currentView === "passwordReset" && (
            <div>
              <CardHeader>
                <CardTitle>Reset Password</CardTitle>
                <CardDescription>
                  Enter your email to receive a reset link
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white rounded-md px-4 py-2 hover:bg-blue-700"
                  >
                    Send Reset Link
                  </button>
                </form>
              </CardContent>
              <CardFooter>
                <button
                  onClick={() => setCurrentView("customerLogin")}
                  className="text-sm text-blue-600 hover:underline"
                >
                  Back to Login
                </button>
              </CardFooter>
            </div>
          )}

          {/* Email Verification */}
          {currentView === "emailVerification" && (
            <div>
              <CardHeader>
                <CardTitle>Verify Your Email</CardTitle>
                <CardDescription>
                  {verificationSent
                    ? "Check your email for the verification link"
                    : "Click below to receive a verification link"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {verificationSent ? (
                  <Alert>
                    <AlertDescription>
                      A verification link has been sent to {email}. Please check
                      your inbox and spam folder.
                    </AlertDescription>
                  </Alert>
                ) : (
                  <button
                    onClick={sendVerificationEmail}
                    className="w-full bg-blue-600 text-white rounded-md px-4 py-2 hover:bg-blue-700"
                  >
                    Send Verification Email
                  </button>
                )}
              </CardContent>
              <CardFooter className="flex justify-between">
                <button
                  onClick={() => setCurrentView("customerLogin")}
                  className="text-sm text-blue-600 hover:underline"
                >
                  Back to Login
                </button>
                {verificationSent && (
                  <button
                    onClick={sendVerificationEmail}
                    className="text-sm text-blue-600 hover:underline"
                  >
                    Resend Email
                  </button>
                )}
              </CardFooter>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};

export default AuthPages;