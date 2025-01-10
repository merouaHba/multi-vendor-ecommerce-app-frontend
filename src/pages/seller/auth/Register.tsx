import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Loader2, Store, ArrowLeft, ArrowRight } from "lucide-react";
import { Link, Navigate } from "react-router-dom";
import FormInput from "@/components/form/formInput";
import RegistrationConfirmation from "@/components/form/RegistrationConfirmation";
import StepIndicator from "@/components/vendor/StepIndicator";
import  useRegisterSeller  from "@/hooks/useRegisterSeller";






const SellerRegister = () => {
  const {
    currentStep,
    FORM_STEPS,
    loading,
    accessToken,
    user,
    formErrors,
    email,
    resetRegistration,
    submitForm,
    register,
    handleSubmit,
    handleNext,
    handleBack,
  } = useRegisterSeller();



  // Navigation checks
  if (accessToken && user) {
    return user.role === "user" ? (
      <Navigate to="/" />
    ) : (
      <Navigate to="/seller/dashboard" />
    );
  }

  if (loading === "succeeded") {
    return (
      <RegistrationConfirmation
        email={email}
        resetRegistration={resetRegistration}
      />
    );
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-4">
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
          </div>
        );
      case 1:
        return (
          <div className="space-y-4">
            <FormInput
              id={register("storeName").name}
              label="Store name"
              {...register("storeName")}
              error={formErrors.storeName?.message}
            />
            <Card className="w-full">
              <CardHeader>
                <CardTitle className="text-lg font-medium">
                  Store Details
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <FormInput
                    id={register("storeDetails.address").name}
                    label="Street Address"
                    {...register("storeDetails.address", {
                      required: "Address is required",
                    })}
                    error={formErrors.storeDetails?.address?.message}
                    placeholder="123 Main St"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <FormInput
                      id={register("storeDetails.city").name}
                      label="City"
                      {...register("storeDetails.city", {
                        required: "City is required",
                      })}
                      error={formErrors.storeDetails?.city?.message}
                      placeholder="New York"
                    />
                    <FormInput
                      id={register("storeDetails.state").name}
                      label="State"
                      {...register("storeDetails.state", {
                        required: "State is required",
                      })}
                      error={formErrors.storeDetails?.state?.message}
                      placeholder="NY"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <FormInput
                      id={register("storeDetails.postalCode").name}
                      label="Postal Code"
                      type="number"
                      {...register("storeDetails.postalCode")}
                      error={formErrors.storeDetails?.postalCode?.message}
                      placeholder="10001"
                    />
                    <FormInput
                      id={register("storeDetails.country").name}
                      label="Country"
                      {...register("storeDetails.country", {
                        required: "Country is required",
                      })}
                      error={formErrors.storeDetails?.country?.message}
                      placeholder="United States"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <FormInput
              id={register("email").name}
              label="Email address"
              type="email"
              {...register("email")}
              error={formErrors.email?.message}
            />
            <FormInput
              id={register("mobile").name}
              label="mobile number"
              type="tel"
              {...register("mobile")}
              error={formErrors.mobile?.message}
            />
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
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
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Card className="max-w-md w-full mx-auto">
        <CardHeader className="space-y-1">
          <div className="flex justify-center mb-2">
            <Store className="h-12 w-12 text-indigo-600" />
          </div>
          <CardTitle className="text-2xl font-bold text-center text-indigo-600">
            Register as a Seller
          </CardTitle>
          <CardDescription className="text-center">
            {FORM_STEPS[currentStep].description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-8">
            <div className="relative flex justify-between items-center">
              {FORM_STEPS.map((step, index) => (
                <StepIndicator
                  key={step.title}
                  step={step}
                  currentStep={currentStep}
                  index={index}
                  isLast={index === FORM_STEPS.length - 1}
                />
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit(submitForm)} className="space-y-6">
            {renderStepContent()}

            <div className="flex justify-between space-x-4">
              {currentStep > 0 && (
                <Button
                  type="button"
                  onClick={handleBack}
                  variant="outline"
                  className="flex items-center"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
              )}

              {currentStep < FORM_STEPS.length - 1 ? (
                <Button
                  type="button"
                  onClick={handleNext}
                  className="flex items-center ml-auto"
                >
                  Next
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              ) : (
                <Button
                  type="submit"
                  disabled={loading === "pending"}
                  className="flex items-center ml-auto"
                >
                  {loading === "pending" ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Creating account...
                    </>
                  ) : (
                    "Create seller account"
                  )}
                </Button>
              )}
            </div>
          </form>

          <p className="text-center text-sm text-gray-600 mt-6">
            Already have a seller account?{" "}
            <Link
              to="/seller/login"
              className="text-indigo-600 hover:text-indigo-500"
            >
              Sign in
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default SellerRegister;