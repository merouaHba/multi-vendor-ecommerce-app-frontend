// import React from "react";
// import { Eye, EyeOff, Store } from "lucide-react";
// import { useState } from "react";

// const SellerLogin = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//     rememberMe: false,
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle login logic here
//     console.log("Login attempt:", formData);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col justify-center">
//       <div className="max-w-md w-full mx-auto">
//         <div className="text-center mb-8">
//           <Store className="mx-auto h-12 w-12 text-indigo-600" />
//           <h2 className="mt-6 text-3xl font-bold text-gray-900">
//             Seller Login
//           </h2>
//           <p className="mt-2 text-sm text-gray-600">
//             Access your seller dashboard
//           </p>
//         </div>

//         <div className="bg-white py-8 px-4 shadow-lg rounded-lg sm:px-10">
//           <form className="space-y-6" onSubmit={handleSubmit}>
//             <div>
//               <label
//                 htmlFor="email"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Email address
//               </label>
//               <div className="mt-1">
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   autoComplete="email"
//                   required
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400
//                            focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
//                   placeholder="your@email.com"
//                   value={formData.email}
//                   onChange={(e) =>
//                     setFormData({ ...formData, email: e.target.value })
//                   }
//                 />
//               </div>
//             </div>

//             <div>
//               <label
//                 htmlFor="password"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Password
//               </label>
//               <div className="mt-1 relative">
//                 <input
//                   id="password"
//                   name="password"
//                   type={showPassword ? "text" : "password"}
//                   autoComplete="current-password"
//                   required
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400
//                            focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
//                   placeholder="••••••••"
//                   value={formData.password}
//                   onChange={(e) =>
//                     setFormData({ ...formData, password: e.target.value })
//                   }
//                 />
//                 <button
//                   type="button"
//                   className="absolute inset-y-0 right-0 pr-3 flex items-center"
//                   onClick={() => setShowPassword(!showPassword)}
//                 >
//                   {showPassword ? (
//                     <EyeOff className="h-5 w-5 text-gray-400" />
//                   ) : (
//                     <Eye className="h-5 w-5 text-gray-400" />
//                   )}
//                 </button>
//               </div>
//             </div>

//             <div className="flex items-center justify-between">
//               <div className="flex items-center">
//                 <input
//                   id="remember-me"
//                   name="remember-me"
//                   type="checkbox"
//                   className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
//                   checked={formData.rememberMe}
//                   onChange={(e) =>
//                     setFormData({ ...formData, rememberMe: e.target.checked })
//                   }
//                 />
//                 <label
//                   htmlFor="remember-me"
//                   className="ml-2 block text-sm text-gray-700"
//                 >
//                   Remember me
//                 </label>
//               </div>

//               <div className="text-sm">
//                 <a
//                   href="#"
//                   className="font-medium text-indigo-600 hover:text-indigo-500"
//                 >
//                   Forgot password?
//                 </a>
//               </div>
//             </div>

//             <div>
//               <button
//                 type="submit"
//                 className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm
//                          font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2
//                          focus:ring-offset-2 focus:ring-indigo-500"
//               >
//                 Sign in
//               </button>
//             </div>
//           </form>

//           <div className="mt-6">
//             <div className="relative">
//               <div className="absolute inset-0 flex items-center">
//                 <div className="w-full border-t border-gray-300" />
//               </div>
//               <div className="relative flex justify-center text-sm">
//                 <span className="px-2 bg-white text-gray-500">
//                   New to the platform?
//                 </span>
//               </div>
//             </div>

//             <div className="mt-6">
//               <a
//                 href="#"
//                 className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm
//                          font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2
//                          focus:ring-offset-2 focus:ring-indigo-500"
//               >
//                 Register as a Seller
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SellerLogin;




import React from "react";
import { Eye, EyeOff, Store } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";


export const SellerLogin = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Card className="max-w-md w-full mx-auto">
        <CardHeader className="space-y-1">
          <div className="flex justify-center mb-2">
            <Store className="h-12 w-12 text-indigo-600" />
          </div>
          <CardTitle className="text-2xl font-bold text-center text-indigo-600">
            Seller Login
          </CardTitle>
          <CardDescription className="text-center">
            Login to manage your store
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email address</Label>
              <Input id="email" type="email" required />
            </div>
            <div className="space-y-2">
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
            </div>
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
              <a
                href="/seller/forgot-password"
                className="text-sm text-indigo-600 hover:text-indigo-500"
              >
                Forgot password?
              </a>
            </div>
            <Button className="w-full" type="submit">
              Sign in
            </Button>
            <p className="text-center text-sm text-gray-600">
              Don't have a seller account?{" "}
              <a
                href="/seller/register"
                className="text-indigo-600 hover:text-indigo-500"
              >
                Register here
              </a>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default SellerLogin