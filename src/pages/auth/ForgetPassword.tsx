// // import React, { useState } from "react";
// // import {
// //   Mail,
// //   ArrowRight,
// //   Loader2,
// //   Lock,
// //   ArrowLeft,
// //   CheckCircle2,
// // } from "lucide-react";
// // import { Card, CardContent, CardHeader } from "@/components/ui/card";
// // import { Alert, AlertDescription } from "@/components/ui/alert";
// // import { Link } from "react-router-dom";

// // const ForgotPassword = () => {
// //   const [email, setEmail] = useState("");
// //   const [error, setError] = useState("");
// //   const [isLoading, setIsLoading] = useState(false);
// //   const [isEmailSent, setIsEmailSent] = useState(false);
// //   const [focusedInput, setFocusedInput] = useState("");

// //   const handleSubmit = async (e:React.FormEvent) => {
// //     e.preventDefault();
// //     setError("");
// //     setIsLoading(true);

// //     if (!email.trim()) {
// //       setError("Please enter your email address");
// //       setIsLoading(false);
// //       return;
// //     }

// //     if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
// //       setError("Please enter a valid email address");
// //       setIsLoading(false);
// //       return;
// //     }

// //     // Simulate API call
// //     await new Promise((resolve) => setTimeout(resolve, 1500));
// //     setIsLoading(false);
// //     setIsEmailSent(true);
// //   };

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-violet-50 to-indigo-100 flex flex-col justify-center items-center p-4">
// //       <div className="w-full max-w-md relative">
// //         {/* Decorative Elements */}
// //         <div className="absolute -top-10 -left-10 w-20 h-20 bg-violet-600 rounded-full opacity-10 animate-pulse" />
// //         <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-indigo-600 rounded-full opacity-10 animate-pulse delay-150" />

// //         {/* Logo and Header */}
// //         <div className="mb-8 text-center">
// //           <div className="mx-auto w-16 h-16 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-xl flex items-center justify-center transform hover:rotate-12 transition-transform duration-300 mb-6">
// //             <Lock className="w-8 h-8 text-white" />
// //           </div>
// //           <h1 className="text-4xl font-bold bg-gradient-to-r from-violet-700 to-indigo-700 bg-clip-text text-transparent mb-2">
// //             Reset Password
// //           </h1>
// //           <p className="text-gray-600">
// //             Enter your email address and we'll send you instructions to reset
// //             your password
// //           </p>
// //         </div>

// //         <Card className="backdrop-blur-xl bg-white/80 border-0 shadow-xl">
// //           <CardHeader>
// //             {error && (
// //               <Alert variant="destructive" className="mb-4">
// //                 <AlertDescription>{error}</AlertDescription>
// //               </Alert>
// //             )}
// //           </CardHeader>
// //           <CardContent>
// //             {!isEmailSent ? (
// //               <form onSubmit={handleSubmit} className="space-y-6">
// //                 {/* Email Input */}
// //                 <div>
// //                   <label className="text-sm font-medium text-gray-700 mb-1 block">
// //                     Email Address
// //                   </label>
// //                   <div
// //                     className={`relative rounded-lg transition-all duration-200 ${
// //                       focusedInput === "email"
// //                         ? "ring-2 ring-violet-600 ring-opacity-50"
// //                         : ""
// //                     }`}
// //                   >
// //                     <Mail
// //                       className={`absolute left-3 top-3 h-5 w-5 ${
// //                         focusedInput === "email"
// //                           ? "text-violet-600"
// //                           : "text-gray-400"
// //                       }`}
// //                     />
// //                     <input
// //                       type="email"
// //                       value={email}
// //                       onChange={(e) => setEmail(e.target.value)}
// //                       onFocus={() => setFocusedInput("email")}
// //                       onBlur={() => setFocusedInput("")}
// //                       className="pl-10 pr-4 py-3 w-full border border-gray-200 rounded-lg focus:outline-none focus:border-violet-600 transition-colors"
// //                       placeholder="you@example.com"
// //                     />
// //                   </div>
// //                 </div>

// //                 {/* Submit Button */}
// //                 <button
// //                   type="submit"
// //                   disabled={isLoading}
// //                   className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white py-3 px-4 rounded-lg font-medium hover:from-violet-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-offset-2 transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50"
// //                 >
// //                   {isLoading ? (
// //                     <Loader2 className="h-5 w-5 animate-spin" />
// //                   ) : (
// //                     <>
// //                       <span>Send Reset Link</span>
// //                       <ArrowRight className="h-4 w-4" />
// //                     </>
// //                   )}
// //                 </button>

// //                 {/* Back to Login Link */}
// //                 <div className="text-center">
// //                   <Link
// //                     to="/login"
// //                     className="inline-flex items-center text-sm text-gray-600 hover:text-violet-600 transition-colors"
// //                   >
// //                     <ArrowLeft className="h-4 w-4 mr-1" />
// //                     Back to login
// //                   </Link>
// //                 </div>
// //               </form>
// //             ) : (
// //               <div className="text-center py-8">
// //                 <div className="flex justify-center mb-4">
// //                   <CheckCircle2 className="h-12 w-12 text-green-500" />
// //                 </div>
// //                 <h3 className="text-xl font-semibold text-gray-900 mb-2">
// //                   Check your email
// //                 </h3>
// //                 <p className="text-gray-600 mb-6">
// //                   We've sent password reset instructions to
// //                   <br />
// //                   <span className="font-medium text-gray-900">{email}</span>
// //                 </p>
// //                 <div className="space-y-4">
// //                   <button
// //                     onClick={() => setIsEmailSent(false)}
// //                     className="w-full bg-gray-100 text-gray-700 py-3 px-4 rounded-lg font-medium hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-offset-2 transition-all duration-200"
// //                   >
// //                     Back to reset password
// //                   </button>
// //                   <div className="text-sm text-gray-600">
// //                     Didn't receive the email?{" "}
// //                     <button
// //                       onClick={handleSubmit}
// //                       className="text-violet-600 hover:text-violet-700 font-medium"
// //                     >
// //                       Click to resend
// //                     </button>
// //                   </div>
// //                 </div>
// //               </div>
// //             )}
// //           </CardContent>
// //         </Card>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ForgotPassword;





// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { useForm } from "react-hook-form";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
//   CardFooter,
// } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Alert, AlertDescription } from "@/components/ui/alert";
// import FormInput from "@/components/form/formInput";
// import {
//   CheckCircle2,
//   XCircle,
//   Loader2,
//   ArrowLeft,
//   ExternalLink,
// } from "lucide-react";
// import { isAxiosError } from "axios";
// import { axiosErrorHandler } from "@/utils";
// import axios from "@/services/api/axios.config";
// import { Separator } from "@/components/ui/separator";

// interface ForgotPasswordFormInputs {
//   email: string;
// }

// const validationSchema = {
//   email: {
//     required: "Email is required",
//     pattern: {
//       value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
//       message: "Invalid email address",
//     },
//   },
// };

// const EmailSentSuccess = ({ email }: { email: string }) => (
//   <div className="space-y-6 py-4">
//     <div className="flex flex-col items-center justify-center text-center space-y-4">
//       <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
//         <CheckCircle2 className="h-6 w-6 text-green-600" />
//       </div>
//       <div className="space-y-2">
//         <h3 className="text-xl font-semibold text-gray-900">
//           Check Your Email
//         </h3>
//         <p className="text-gray-500 max-w-sm">
//           We've sent a password reset link to <strong>{email}</strong>. The link
//           will expire in 1 hour.
//         </p>
//       </div>
//     </div>

//     <div className="space-y-4">
//       <Button
//         onClick={() => (window.location.href = "/login")}
//         variant="outline"
//         className="w-full"
//       >
//         Return to Login
//       </Button>

//       <div className="space-y-3">
//         <Separator className="my-2" />
//         <div className="flex flex-col space-y-2 text-center text-sm">
//           <p className="text-gray-500">Didn't receive the email?</p>
//           <div className="space-y-2">
//             <p className="text-gray-600">
//               Check your spam folder or{" "}
//               <Link
//                 to="/support"
//                 className="text-primary hover:underline inline-flex items-center"
//               >
//                 contact support
//                 <ExternalLink className="h-3 w-3 ml-1" />
//               </Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// );

// const ForgotPassword = () => {
//   const navigate = useNavigate();
//   const [status, setStatus] = useState<
//     "idle" | "pending" | "succeeded" | "failed"
//   >("idle");
//   const [error, setError] = useState("");
//   const {
//     register,
//     handleSubmit,
//     formState: { errors, isValid },
//     watch,
//   } = useForm<ForgotPasswordFormInputs>({
//     mode: "onChange",
//     reValidateMode: "onChange",
//   });

//   const watchedEmail = watch("email");

//   const onSubmit = async (data: ForgotPasswordFormInputs) => {
//     setStatus("pending");
//     setError("");

//     try {
//       await axios.post("/auth/forgot-password", {
//         email: data.email,
//       });
//       setStatus("succeeded");
//     } catch (error) {
//       setStatus("failed");
//       setError(
//         isAxiosError(error)
//           ? axiosErrorHandler(error)
//           : "Failed to send reset email. Please try again later."
//       );
//     }
//   };

//   const renderContent = () => {
//     if (status === "succeeded") {
//       return <EmailSentSuccess email={watchedEmail} />;
//     }

//     return (
//       <div className="space-y-6">
//         {error && (
//           <Alert className="bg-red-50 border-red-200">
//             <XCircle className="h-5 w-5 text-red-500" />
//             <AlertDescription className="text-red-700">
//               {error}
//             </AlertDescription>
//           </Alert>
//         )}
//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//           <FormInput
//             id="email"
//             type="email"
//             label="Email Address"
//             placeholder="Enter your email address"
//             error={errors.email?.message}
//             {...register("email", validationSchema.email)}
//             disabled={status === "pending"}
//           />

//           <Button
//             type="submit"
//             className="w-full"
//             disabled={status === "pending" || !isValid}
//           >
//             {status === "pending" ? (
//               <>
//                 <Loader2 className="mr-2 h-4 w-4 animate-spin" />
//                 Sending Reset Link...
//               </>
//             ) : (
//               "Send Reset Link"
//             )}
//           </Button>
//         </form>
//       </div>
//     );
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
//       <Card className="w-full max-w-md shadow-lg">
//         <CardHeader className="space-y-2">
//           <CardTitle className="text-2xl font-bold text-center text-gray-900">
//             Forgot Password
//           </CardTitle>
//           <CardDescription className="text-center text-gray-600">
//             {status === "succeeded"
//               ? "Reset instructions sent"
//               : "Enter your email to receive a password reset link"}
//           </CardDescription>
//         </CardHeader>

//         <CardContent>{renderContent()}</CardContent>

//         {status !== "succeeded" && (
//           <CardFooter className="flex justify-center pb-6">
//             <Button
//               onClick={() => navigate("/login")}
//               variant="ghost"
//               className="text-sm text-gray-500 hover:text-gray-700"
//             >
//               <ArrowLeft className="mr-2 h-4 w-4" />
//               Back to Login
//             </Button>
//           </CardFooter>
//         )}
//       </Card>
//     </div>
//   );
// };

// export default ForgotPassword;






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