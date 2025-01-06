// import { LottieHandler } from "@/components/feedback";
// import { Link ,useRouteError,isRouteErrorResponse,ErrorResponse} from "react-router-dom";


// const Error = () => {
//   const error = useRouteError() as ErrorResponse;
//   return (
//     <div className="container">
//       <div
//         className="d-flex flex-column align-items-center"
//         style={{ marginTop: "15%" }}
//       >
//         {
//           error?.status === 404?
//           <LottieHandler type="notFound" />:
//           <LottieHandler type="error" />
//         }
//         <Link to="/" replace={true}>
//           How about going back to safety?
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Error;


// import React from "react";
import { useRouteError, isRouteErrorResponse } from "react-router-dom";
// import {
//   AlertTriangle,
//   WifiOff,
//   Search,
//   ArrowLeft,
//   RefreshCcw,
// } from "lucide-react";

// const ErrorPage = () => {
//   const error = useRouteError();
//   const [isRetrying, setIsRetrying] = React.useState(false);
// console.log(error)
//   // Handle retry action
//   const handleRetry = () => {
//     setIsRetrying(true);
//     window.location.reload();
//   };

//   // Handle go back action
//   const handleGoBack = () => {
//     window.history.back();
//   };

//   // Handle go home action
//   const handleGoHome = () => {
//     window.location.href = "/";
//   };

//   // Render different error states based on the error type
//   const renderErrorContent = () => {
//     // Handle Route Errors (404, etc.)
//     if (isRouteErrorResponse(error)) {
//       if (error.status === 404) {
//         return (
//           <div className="text-center">
//             <Search className="mx-auto h-16 w-16 text-gray-400 mb-6" />
//             <h1 className="text-4xl font-bold text-gray-900 mb-4">
//               Page Not Found
//             </h1>
//             <p className="text-lg text-gray-600 mb-8">
//               Sorry, we couldn't find the page you're looking for.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <button
//                 onClick={handleGoBack}
//                 className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//               >
//                 <ArrowLeft className="w-5 h-5 mr-2" />
//                 Go Back
//               </button>
//               <button
//                 onClick={handleGoHome}
//                 className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//               >
//                 Go to Homepage
//               </button>
//             </div>
//           </div>
//         );
//       }

//       // Handle other HTTP errors
//       return (
//         <div className="text-center">
//           <AlertTriangle className="mx-auto h-16 w-16 text-yellow-400 mb-6" />
//           <h1 className="text-4xl font-bold text-gray-900 mb-4">
//             Error {error.status}
//           </h1>
//           <p className="text-lg text-gray-600 mb-4">{error.statusText}</p>
//           <p className="text-gray-500 mb-8">
//             {error.data?.message || "An unexpected error occurred."}
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button
//               onClick={handleRetry}
//               disabled={isRetrying}
//               className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
//             >
//               <RefreshCcw
//                 className={`w-5 h-5 mr-2 ${isRetrying ? "animate-spin" : ""}`}
//               />
//               {isRetrying ? "Retrying..." : "Try Again"}
//             </button>
//             <button
//               onClick={handleGoBack}
//               className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//             >
//               Go Back
//             </button>
//           </div>
//         </div>
//       );
//     }

//     // Handle connection errors
//     if (error instanceof Error && error.message.includes("Failed to fetch")) {
//       return (
//         <div className="text-center">
//           <WifiOff className="mx-auto h-16 w-16 text-red-400 mb-6" />
//           <h1 className="text-4xl font-bold text-gray-900 mb-4">
//             Connection Error
//           </h1>
//           <p className="text-lg text-gray-600 mb-4">
//             Please check your internet connection and try again.
//           </p>
//           <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8 mx-auto max-w-md">
//             <ul className="text-left text-sm text-yellow-700 space-y-2">
//               <li>• Check your internet connection</li>
//               <li>• Verify that the website is not down</li>
//               <li>• Try disabling VPN if you're using one</li>
//               <li>• Clear your browser cache and cookies</li>
//             </ul>
//           </div>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button
//               onClick={handleRetry}
//               disabled={isRetrying}
//               className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
//             >
//               <RefreshCcw
//                 className={`w-5 h-5 mr-2 ${isRetrying ? "animate-spin" : ""}`}
//               />
//               {isRetrying ? "Connecting..." : "Try Again"}
//             </button>
//           </div>
//         </div>
//       );
//     }

//     // Handle all other unexpected errors
//     return (
//       <div className="text-center">
//         <AlertTriangle className="mx-auto h-16 w-16 text-red-400 mb-6" />
//         <h1 className="text-4xl font-bold text-gray-900 mb-4">
//           Unexpected Error
//         </h1>
//         <p className="text-lg text-gray-600 mb-4">
//           Something went wrong. We're working on fixing it.
//         </p>
//         <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-8 mx-auto max-w-md">
//           <p className="text-sm text-gray-700 font-mono break-all">
//             {error instanceof Error ? error.message : "Unknown error occurred"}
//           </p>
//         </div>
//         <div className="flex flex-col sm:flex-row gap-4 justify-center">
//           <button
//             onClick={handleRetry}
//             disabled={isRetrying}
//             className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
//           >
//             <RefreshCcw
//               className={`w-5 h-5 mr-2 ${isRetrying ? "animate-spin" : ""}`}
//             />
//             {isRetrying ? "Retrying..." : "Try Again"}
//           </button>
//           <button
//             onClick={handleGoHome}
//             className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//           >
//             Go to Homepage
//           </button>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className="min-h-screen bg-white px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
//       <div className="max-w-max mx-auto">{renderErrorContent()}</div>
//     </div>
//   );
// };

// export default ErrorPage;






import { WifiOff, AlertCircle, FileWarning, Ban, Home } from "lucide-react";

// Error Boundary Component for Routes
const RouteErrorBoundary = () => {
  const error = useRouteError();
  const isOnline = navigator.onLine;

  // Handle connection errors
  if (!isOnline) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
          <div className="flex justify-center mb-4">
            <WifiOff className="h-16 w-16 text-red-500" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Connection Error
          </h2>
          <p className="text-gray-600 mb-6">
            Oops! It seems you're offline. Please check your internet connection
            and try again.
          </p>
          <div className="space-y-4">
            <button
              onClick={() => window.location.reload()}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
            >
              Retry Connection
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Handle route errors (404, unauthorized, etc.)
  if (isRouteErrorResponse(error)) {
    switch (error.status) {
      case 404:
        return (
          <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
              <div className="flex justify-center mb-4">
                <FileWarning className="h-16 w-16 text-yellow-500" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Page Not Found
              </h2>
              <p className="text-gray-600 mb-6">
                The page you're looking for doesn't exist or has been moved.
              </p>
              <div className="space-y-4">
                <a
                  href="/"
                  className="block w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                >
                  <span className="flex items-center justify-center gap-2">
                    <Home className="w-4 h-4" />
                    Return Home
                  </span>
                </a>
              </div>
            </div>
          </div>
        );

      case 401:
      case 403:
        return (
          <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
              <div className="flex justify-center mb-4">
                <Ban className="h-16 w-16 text-red-500" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Access Denied
              </h2>
              <p className="text-gray-600 mb-6">
                You don't have permission to access this page. Please log in or
                contact support.
              </p>
              <div className="space-y-4">
                <a
                  href="/login"
                  className="block w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Go to Login
                </a>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
              <div className="flex justify-center mb-4">
                <AlertCircle className="h-16 w-16 text-red-500" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Something Went Wrong
              </h2>
              <p className="text-gray-600 mb-6">
                An unexpected error occurred. Please try again later.
              </p>
              <div className="space-y-4">
                <button
                  onClick={() => window.location.reload()}
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Retry
                </button>
              </div>
            </div>
          </div>
        );
    }
  }

  // Handle other errors
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
        <div className="flex justify-center mb-4">
          <AlertCircle className="h-16 w-16 text-yellow-500" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Unexpected Error
        </h2>
        <p className="text-gray-600 mb-6">
          We've encountered an unexpected error. Our team has been notified.
        </p>
        <div className="space-y-4">
          <button
            onClick={() => window.location.reload()}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
          >
            Retry
          </button>
          {import.meta.env.NODE_ENV === "development" && error instanceof Error && (
            <div className="mt-4 p-4 bg-gray-100 rounded-md text-left">
              <p className="text-sm font-mono text-gray-700 break-all">
                {error.message}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RouteErrorBoundary
