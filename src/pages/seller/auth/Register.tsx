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
import FormInput from "@/components/form/FormInput";
import PhoneInput from "@/components/form/PhoneInput";
import RegistrationConfirmation from "@/components/form/RegistrationConfirmation";
import StepIndicator from "@/components/vendor/StepIndicator";
import  useRegisterSeller  from "@/hooks/useRegisterSeller";
import { useCountryData, Country, State, City } from '@/hooks/useCountry';
import { useEffect, useState } from "react";
import { LocationSelector } from "@/components/form/LocationSelector";



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
    setValue,
    getValues,
    handleSubmit,
    handleNext,
    handleBack,
  } = useRegisterSeller();

  const { userCountry, countries } = useCountryData();
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [selectedState, setSelectedState] = useState<State | null>(null);
  const [selectedCity, setSelectedCity] = useState<City | null>(null);
  // Initialize location values from form state
  useEffect(() => {
    const formCountry = getValues("storeDetails.country");
    const formState = getValues("storeDetails.state");
    const formCity = getValues("storeDetails.city");

    // Restore country selection
    if (formCountry && !selectedCountry) {
      const country = countries.find((c) => c.name === formCountry);
      if (country) {
        setSelectedCountry(country);

        // Restore state selection
        if (formState && country.states) {
          const state = country.states.find((s: State) => s.name === formState);
          if (state) {
            setSelectedState(state);

            // Restore city selection
            if (formCity && state.cities) {
              const city = state.cities.find((c: City) => c.name === formCity);
              if (city) {
                setSelectedCity(city);
              }
            }
          }
        }
      }
    }
  }, [getValues, countries, currentStep]);

  // Set default country based on user's location
  useEffect(() => {
    if (userCountry && !selectedCountry && !getValues("storeDetails.country")) {
      setSelectedCountry(userCountry);
      setValue("storeDetails.country", userCountry.name);
    }
  }, [userCountry, selectedCountry, setValue, getValues]);

  const handleLocationChange = {
    country: (country: Country | null) => {
      setSelectedCountry(country);
      setSelectedState(null);
      setSelectedCity(null);
      setValue("storeDetails.country", country?.name || "", {
        shouldValidate: true,
      });
      setValue("storeDetails.state", "", { shouldValidate: true });
      setValue("storeDetails.city", "", { shouldValidate: true });
    },
    state: (state: State | null) => {
      setSelectedState(state);
      setSelectedCity(null);
      setValue("storeDetails.state", state?.name || "", {
        shouldValidate: true,
      });
      setValue("storeDetails.city", "", { shouldValidate: true });
    },
    city: (city: City | null) => {
      setSelectedCity(city);
      setValue("storeDetails.city", city?.name || "", { shouldValidate: true });
    },
  };

  // Extend handleNext to ensure location data is saved
  const handleStepNext = async () => {
    // Save current location data explicitly before moving to next step
    if (selectedCountry) {
      setValue("storeDetails.country", selectedCountry.name);
      if (selectedState) {
        setValue("storeDetails.state", selectedState.name);
        if (selectedCity) {
          setValue("storeDetails.city", selectedCity.name);
        }
      }
    }
    handleNext();
  };

  // Extend handleBack to ensure location data is saved
  const handleStepBack = () => {
    // Save current location data explicitly before moving to previous step
    if (selectedCountry) {
      setValue("storeDetails.country", selectedCountry.name);
      if (selectedState) {
        setValue("storeDetails.state", selectedState.name);
        if (selectedCity) {
          setValue("storeDetails.city", selectedCity.name);
        }
      }
    }
    handleBack();
  };


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
            <div className="grid gap-4">
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
          <div className="space-y-6">
            <FormInput
              id={register("storeName").name}
              label="Store name"
              {...register("storeName")}
              error={formErrors.storeName?.message}
              placeholder="Enter your store name"
              className="text-lg"
            />
            <Card className="w-full shadow-md">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-indigo-600">
                  Store Location
                </CardTitle>
                <CardDescription>
                  Please provide your store's physical location details
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <FormInput
                    id={register("storeDetails.address").name}
                    label="Street Address"
                    {...register("storeDetails.address", {
                      required: "Street address is required",
                    })}
                    error={formErrors.storeDetails?.address?.message}
                    placeholder="123 Main St"
                    className="text-lg"
                  />

                  <div className="bg-gray-50 p-6 rounded-lg space-y-6">
                    <LocationSelector
                      selectedCountry={selectedCountry}
                      onCountryChange={handleLocationChange.country}
                      selectedState={selectedState}
                      onStateChange={handleLocationChange.state}
                      selectedCity={selectedCity}
                      onCityChange={handleLocationChange.city}
                      errors={{
                        country: formErrors.storeDetails?.country?.message,
                        state: formErrors.storeDetails?.state?.message,
                        city: formErrors.storeDetails?.city?.message,
                      }}
                    />
                  </div>

                  <FormInput
                    id={register("storeDetails.postalCode").name}
                    label="Postal Code"
                    type="text"
                    {...register("storeDetails.postalCode", {
                      required: "Postal code is required",
                      pattern: {
                        value: /^[0-9]{5,10}$/,
                        message: "Please enter a valid postal code",
                      },
                    })}
                    error={formErrors.storeDetails?.postalCode?.message}
                    placeholder="10001"
                    className="text-lg"
                  />
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
            <PhoneInput
              value={getValues("mobile") as string}
              onChange={(value) => setValue("mobile", value)}
              error={formErrors.mobile?.message}
              selectedCountry={selectedCountry}
              onCountryChange={setSelectedCountry}
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
                id={register("terms").name}
                {...register("terms")}
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
                  onClick={handleStepBack}
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
                  onClick={handleStepNext}
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