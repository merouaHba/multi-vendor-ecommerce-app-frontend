import { Button } from "@/components/ui/button";
import { AlertCircle, Loader2, Store } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Link, Navigate, useNavigate } from "react-router-dom";
import useLogin from "@/hooks/useLogin";
import FormInput from "@/components/form/FormInput";
import GoogleIcon from "@/components/common/GoogleIcon";
import FacebookIcon from "@/components/common/FacebookIcon";
import AppleIcon from "@/components/common/AppleIcon";
import OAuthButton from "@/components/common/SocialButton";
import { Alert, AlertDescription } from "@/components/ui/alert";

const SellerLogin = () => {
     const navigate = useNavigate()
  
  const {
    loading,
    accessToken,
    user,
    formErrors,
    unverifiedEmail,
    register,
    handleSubmit,
    GoogleOAuth,
    FacebookOAuth,
    AppleOAuth,
    submitForm,
  } = useLogin("seller");

    if (accessToken && user) {
      if (user.role === "user") {
        return <Navigate to="/" />;
      } else {
        return <Navigate to="/seller/dashboard" />;
      }
    }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Card className="max-w-md w-full mx-auto">
        <CardHeader className="space-y-1">
          <div className="flex justify-center mb-2">
            <Store className="h-12 w-12 text-indigo-600" />
          </div>
          <CardTitle className="text-2xl font-bold text-center text-indigo-600">
            Welcome back, Seller
          </CardTitle>
          <CardDescription className="text-center">
            Login to manage your store
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

          {unverifiedEmail && (
            <Alert
              variant="destructive"
              className="mb-4 bg-yellow-50 border-yellow-200"
            >
              <AlertCircle className="h-4 w-4 text-yellow-600" />
              <AlertDescription className="flex items-center justify-between flex-1">
                <span className="text-sm text-yellow-800">
                  Your seller email is not verified.
                </span>
                <Link
                  to="/seller/resend-verification"
                  className="text-indigo-600 hover:text-indigo-500"
                >
                  resend verification link
                </Link>
              </AlertDescription>
            </Alert>
          )}

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

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id={register("rememberMe").name}
                  {...register("rememberMe")}
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                />
                <Label htmlFor="remember-me" className="ml-2">
                  Remember me
                </Label>
              </div>
              <p
                onClick={() =>
                  navigate("../forgot-password", {
                    state: { from: "/seller/login" },
                  })
                }
                className="text-sm text-indigo-600 hover:text-indigo-500 cursor-pointer"
              >
                Forgot password?
              </p>
            </div>

            <Button
              type="submit"
              disabled={loading === "pending"}
              className="w-full flex justify-center py-2 px-4 border rounded-md shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2"
            >
              {loading === "pending" ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Signing in...
                </>
              ) : (
                "Sign in"
              )}
            </Button>

            <p className="text-center text-sm text-gray-600">
              Don't have a seller account?{" "}
              <Link
                to="/seller/register"
                className="text-indigo-600 hover:text-indigo-500"
              >
                Register as a Seller
              </Link>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default SellerLogin;