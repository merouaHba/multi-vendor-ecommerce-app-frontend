import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {Loader2 } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Link, Navigate } from "react-router-dom";
import useRegister from "@/hooks/useRegister";
import FormInput from "@/components/form/formInput";
import GoogleIcon from "@/components/common/GoogleIcon";
import FacebookIcon from "@/components/common/FacebookIcon";
import AppleIcon from "@/components/common/AppleIcon";
import OAuthButton from "@/components/common/SocialButton";
import RegistrationConfirmation from "@/components/form/RegistrationConfirmation";







 const BuyerRegister = () => {

   const {
     loading,
     //  error,
     accessToken,
     formErrors,
     email,
     resetRegistration,
     submitForm,
     register,
     handleSubmit,
     GoogleOAuth,
     FacebookOAuth,
     AppleOAuth,
   } = useRegister("user");

   if (accessToken) {
     return <Navigate to="/" />;
   }
   if (loading === "succeeded") {
     return <RegistrationConfirmation email={email} resetRegistration = { resetRegistration } />;
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
             <OAuthButton
               icon={<GoogleIcon />}
               onClick={GoogleOAuth}
               className="hover:bg-gray-50 hover:border-gray-400"
             >
               Continue with Google
             </OAuthButton>

             <OAuthButton
               icon={<FacebookIcon />}
               onClick={FacebookOAuth}
               className="hover:bg-blue-50 hover:border-blue-400"
             >
               Continue with Facebook
             </OAuthButton>

             <OAuthButton
               icon={<AppleIcon />}
               onClick={AppleOAuth}
               className="hover:bg-gray-900 hover:text-white hover:border-gray-900"
             >
               Continue with Apple
             </OAuthButton>
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
             <Button
               type="submit"
               disabled={loading === "pending"}
               className="w-full flex justify-center py-2 px-4 border rounded-md shadow-sm text-sm font-medium  focus:outline-none focus:ring-2 focus:ring-offset-2"
             >
               {loading === "pending" ? (
                 <>
                   <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                   Signing up...
                 </>
               ) : (
                 "Sign up"
               )}
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
