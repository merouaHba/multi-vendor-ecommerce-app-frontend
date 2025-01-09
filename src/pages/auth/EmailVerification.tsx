import { useNavigate, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  CheckCircle2,
  XCircle,
  Loader2,
  ArrowLeft,
  Clock,
} from "lucide-react";

import { isAxiosError } from "axios";
import { axiosErrorHandler } from "@/utils";
import axios from "@/services/api/axios.config";
import { Button } from "@/components/ui/button";

const EmailVerification = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [verificationStatus, setVerificationStatus] = useState<
    "loading" | "success" | "error"
  >("loading");
  const [errorMessage, setErrorMessage] = useState("");
  const [countdown, setCountdown] = useState(5);
 const startCountdown = () => {
   const timer = setInterval(() => {
     setCountdown((prev) => {
       if (prev <= 1) {
         clearInterval(timer);
         navigate("/login");
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
       
        const message =        isAxiosError(error) ? (axiosErrorHandler(error) === "Invalid token"? "Verification failed. This could be due to an invalid or expired link. Please request a new verification email.": axiosErrorHandler(error))
                  : "Verification failed. This could be due to a network error. Please try again."
          
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
             <p className="text-sm text-gray-500">
               This may take a few moments
             </p>
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
                 onClick={() => navigate("/login")}
                 className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
               >
                 Go to Login
               </Button>
             )}

             {verificationStatus === "error" && (
               <div className="space-y-4">
                 <Button
                   onClick={() => navigate("/resend-verification")}
                   className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
                 >
                   Resend Verification Email
                 </Button>
                 <Button
                   onClick={() => navigate("/login")}
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


// import { useNavigate, useSearchParams } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardHeader,
//   CardTitle,
//   CardFooter,
// } from "@/components/ui/card";
// import { Alert, AlertDescription } from "@/components/ui/alert";
// import { Progress } from "@/components/ui/progress";
// import { Loader2, CheckCircle, AlertCircle } from "lucide-react";
// import { isAxiosError } from "axios";
// import { axiosErrorHandler } from "@/utils";
// import axios from "@/services/api/axios.config";

// const VerifyEmail = () => {
//   const [searchParams] = useSearchParams();
//   const navigate = useNavigate();
//   const [status, setStatus] = useState<"loading" | "success" | "error">(
//     "loading"
//   );
//   const [message, setMessage] = useState("");
//   const [progress, setProgress] = useState(100);
//   type Timer = ReturnType<typeof setTimeout>;
  
//   useEffect(() => {
//     let timer: Timer;
//     if (status === "success" && progress > 0) {
//       timer = setInterval(() => {
//         setProgress((prev) => Math.max(0, prev - 20));
//       }, 1000);
//     }
//     return () => clearInterval(timer);
//   }, [status, progress]);

//   useEffect(() => {
//     if (progress === 0) {
//       navigate("/login");
//     }
//   }, [progress, navigate]);

//   useEffect(() => {
//     const verifyEmail = async () => {
//       const token = searchParams.get("token");
//       if (!token) {
//         setStatus("error");
//         setMessage("Missing verification token. Please check your email link.");
//         return;
//       }

//       try {
//         await axios.get(`/auth/verify-email/${token}`);
//         setStatus("success");
//         setMessage("Your email has been verified successfully!");
//       } catch (error) {
//         setStatus("error");
//         setMessage(
//           isAxiosError(error)
//             ? axiosErrorHandler(error)
//             : "Verification failed. Please try again or contact support."
//         );
//       }
//     };

//     verifyEmail();
//   }, [searchParams]);

//   const statusConfig = {
//     loading: {
//       icon: <Loader2 className="h-8 w-8 animate-spin text-blue-500" />,
//       title: "Verifying Your Email",
//       theme: "text-blue-500",
//     },
//     success: {
//       icon: <CheckCircle className="h-8 w-8 text-green-500" />,
//       title: "Email Verified",
//       theme: "text-green-500",
//     },
//     error: {
//       icon: <AlertCircle className="h-8 w-8 text-amber-500" />,
//       title: "Verification Notice",
//       theme: "text-amber-500",
//     },
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center p-4">
//       <Card className="w-full max-w-md">
//         <CardHeader className="space-y-2">
//           <div className="flex items-center gap-3 justify-center">
//             {statusConfig[status].icon}
//             <CardTitle className={`text-xl ${statusConfig[status].theme}`}>
//               {statusConfig[status].title}
//             </CardTitle>
//           </div>
//         </CardHeader>

//         <CardContent className="space-y-4">
//           {status === "loading" ? (
//             <div className="flex justify-center">
//               <span className="text-sm text-gray-500">
//                 Please wait while we verify your email...
//               </span>
//             </div>
//           ) : (
//             <Alert variant={status === "success" ? "default" : "destructive"}>
//               <AlertDescription>{message}</AlertDescription>
//             </Alert>
//           )}

//           {status === "success" && (
//             <div className="space-y-2">
//               <Progress value={progress} className="h-2" />
//               <p className="text-sm text-center text-gray-500">
//                 Redirecting to login in {Math.ceil(progress / 20)} seconds...
//               </p>
//             </div>
//           )}
//         </CardContent>

//         <CardFooter className="flex justify-center">
//           {status !== "loading" && (
//             <Button
//               onClick={() => navigate("/login")}
//               variant={status === "success" ? "default" : "secondary"}
//               className="w-full sm:w-auto"
//             >
//               Go to Login
//             </Button>
//           )}
//         </CardFooter>
//       </Card>
//     </div>
//   );
// };

// export default VerifyEmail;


// import { useState, useEffect } from "react";
// import { useNavigate, useSearchParams } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardHeader,
//   CardTitle,
//   CardDescription,
// } from "@/components/ui/card";
// import { Loader2, CheckCircle, XCircle } from "lucide-react";
// import { isAxiosError } from "axios";
// import { axiosErrorHandler } from "@/utils";
// import axios from "@/services/api/axios.config";

// // Define status type to improve type safety
// type VerificationStatus = "loading" | "success" | "error";

// interface StatusConfig {
//   title: string;
//   description: string;
//   icon: React.ReactNode;
//   titleColor?: string;
// }

// const VerifyEmail = () => {
//   const [searchParams] = useSearchParams();
//   const navigate = useNavigate();
//   const [verificationStatus, setVerificationStatus] =
//     useState<VerificationStatus>("loading");
//   const [errorMessage, setErrorMessage] = useState("");
//   const [countdown, setCountdown] = useState(5);

//   // Add countdown timer effect
//   useEffect(() => {
//     let timer: NodeJS.Timeout;
//     if (verificationStatus === "success" && countdown > 0) {
//       timer = setInterval(() => {
//         setCountdown((prev) => prev - 1);
//       }, 1000);
//     }
//     return () => clearInterval(timer);
//   }, [verificationStatus, countdown]);

//   // Separate verification logic
//   useEffect(() => {
//     const verifyEmailToken = async () => {
//       const token = searchParams.get("token");
//       if (!token) {
//         setVerificationStatus("error");
//         setErrorMessage("Verification token is missing");
//         return;
//       }

//       try {
//         const response = await axios.get(`/auth/verify-email/${token}`);
//         if (response.status === 200) {
//           setVerificationStatus("success");
//           // Navigate after countdown reaches 0
//           setTimeout(() => {
//             navigate("/login");
//           }, 5000);
//         }
//       } catch (error) {
//         setVerificationStatus("error");
//         setErrorMessage(
//           isAxiosError(error)
//             ? axiosErrorHandler(error)
//             : "Email verification failed. Please try again."
//         );
//       }
//     };

//     verifyEmailToken();
//   }, [searchParams, navigate]);

//   // Status configuration map for cleaner rendering
//   const statusConfigs: Record<VerificationStatus, StatusConfig> = {
//     loading: {
//       title: "Verifying your email",
//       description: "Please wait while we verify your email address...",
//       icon: <Loader2 className="h-12 w-12 animate-spin text-indigo-600" />,
//     },
//     success: {
//       title: "Email Verified Successfully!",
//       description: `Your email has been verified. You will be redirected to login in ${countdown} seconds.`,
//       icon: <CheckCircle className="h-12 w-12 text-green-600" />,
//       titleColor: "text-green-600",
//     },
//     error: {
//       title: "Verification Failed",
//       description: errorMessage,
//       icon: <XCircle className="h-12 w-12 text-red-600" />,
//       titleColor: "text-red-600",
//     },
//   };

//   const currentStatus = statusConfigs[verificationStatus];

//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
//       <Card className="max-w-md w-full mx-auto">
//         <CardHeader className="space-y-1">
//           <CardTitle
//             className={`text-2xl font-bold text-center ${
//               currentStatus.titleColor || ""
//             }`}
//           >
//             {currentStatus.title}
//           </CardTitle>
//           <CardDescription className="text-center mt-2">
//             {currentStatus.description}
//           </CardDescription>
//           <div className="flex justify-center mt-6">{currentStatus.icon}</div>
//         </CardHeader>

//         <CardContent className="flex justify-center">
//           {verificationStatus !== "loading" && (
//             <Button
//               onClick={() => navigate("/login")}
//               variant="default"
//               className="mt-4"
//             >
//               Go to Login
//             </Button>
//           )}
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default VerifyEmail;