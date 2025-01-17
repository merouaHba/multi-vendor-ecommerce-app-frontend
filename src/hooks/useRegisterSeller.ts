import { useState, useEffect } from "react";
import useRegister from "@/hooks/useRegister";
import { useCountryData, Country, State, City } from "@/hooks/useCountry";
import { SubmitHandler } from "react-hook-form";
interface StoreDetails {
  street: string;
  city?: string;
  state: string;
  postalCode: string;
  country: string;
}

interface FormData {
  firstname: string;
  lastname: string;
  storeName?: string;
  storeDetails?: StoreDetails;
  email: string;
  mobile?: string;
  password: string;
  confirmPassword: string;
}

interface SubmitFormData extends FormData {
  terms: boolean;
}

interface Step {
  title: string;
  description: string;
  fields: (keyof FormData)[];
  initialData: Partial<FormData>;
}
interface StepDataType {
  [key: number]: Partial<FormData>;
}

const FORM_STEPS: Step[] = [
  {
    title: "Personal Information",
    description: "Start with your basic details",
    fields: ["firstname", "lastname"],
    initialData: {
      firstname: "",
      lastname: "",
    },
  },
  {
    title: "Store Information",
    description: "Tell us about your store",
    fields: ["storeName", "storeDetails"],
    initialData: {
      storeName: "",
      storeDetails: {
        street: "",
        city: "",
        state: "",
        postalCode: "",
        country: "",
      },
    },
  },
  {
    title: "Contact Details",
    description: "How can we reach you?",
    fields: ["email", "mobile"],
    initialData: {
      email: "",
      mobile: "",
    },
  },
  {
    title: "Account Security",
    description: "Set up your account credentials",
    fields: ["password", "confirmPassword"],
    initialData: {
      password: "",
      confirmPassword: "",
    },
  },
];

function isStoreDetails(value: unknown): value is StoreDetails {
  if (!value || typeof value !== "object") return false;
  const details = value as Partial<StoreDetails>;
  return (
    typeof details.street === "string" &&
    typeof details.city === "string" &&
    typeof details.state === "string" &&
    typeof details.postalCode === "string" &&
    typeof details.country === "string"
  );
}

type FormField =
  | "firstname"
  | "lastname"
  | "storeName"
  | "storeDetails.street"
  | "storeDetails.city"
  | "storeDetails.state"
  | "storeDetails.postalCode"
  | "storeDetails.country"
  | "email"
  | "mobile"
  | "password"
  | "confirmPassword";

type FormFieldValue<T extends keyof FormData> = FormData[T];

const useRegisterSeller = () => {
  const {
    loading,
    accessToken,
    user,
    formErrors,
    email,
    reset,
    resetRegistration,
    submitForm,
    register,
    handleSubmit,
    trigger,
    getValues,
    setValue,
  } = useRegister("seller");

  const [currentStep, setCurrentStep] = useState(0);
  const [stepData, setStepData] = useState<StepDataType>(() => {
    return FORM_STEPS.reduce<StepDataType>((acc, step, index) => {
      acc[index] = step.initialData;
      return acc;
    }, {});
  });
  const { userCountry, countries } = useCountryData();
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [selectedCountryPhoneCode, setSelectedCountryPhoneCode] =
    useState<Country | null>(null);
  const [selectedState, setSelectedState] = useState<State | null>(null);
  const [selectedCity, setSelectedCity] = useState<City | null>(null);
  const [onSubmitStatus, setOnSubmitStatus] = useState(false);
  useEffect(() => {
    const formCountry = getValues("storeDetails.country");
    const formState = getValues("storeDetails.state");
    const formCity = getValues("storeDetails.city");

    if (formCountry && !selectedCountry) {
      const country = countries.find((c) => c.name === formCountry);
      if (country) {
        setSelectedCountry(country);
        if (formState && country.states) {
          const state = country.states.find((s: State) => s.name === formState);
          if (state) {
            setSelectedState(state);

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

  useEffect(() => {
    if (userCountry && !selectedCountry && !getValues("mobile")) {
      setSelectedCountryPhoneCode(userCountry);
    }
    if (userCountry && !selectedCountry && !getValues("storeDetails.country")) {
      setSelectedCountry(userCountry);

      setValue("storeDetails.country", userCountry.name);
    }
  }, [userCountry, setValue, getValues]);

  const handleLocationChange = {
    country: (country: Country | null) => {
      setSelectedCountry(country);
      setSelectedState(null);
      setSelectedCity(null);
      setValue("storeDetails.country", country?.name || "", {
        shouldValidate: true,
      });
      setValue("storeDetails.state", "", { shouldValidate: true });
      setValue("storeDetails.city", undefined, { shouldValidate: true });
    },
    state: (state: State | null) => {
      setSelectedState(state);
      setSelectedCity(null);
      setValue("storeDetails.state", state?.name || "", {
        shouldValidate: true,
      });
      setValue("storeDetails.city", undefined, { shouldValidate: true });
    },
    city: (city: City | null) => {
      setSelectedCity(city);
      setValue("storeDetails.city", city?.name || undefined, {
        shouldValidate: true,
      });
    },
  };


  useEffect(() => {
    const currentStepData = stepData[currentStep];
    Object.entries(currentStepData).forEach(([field, value]) => {
      if (field === "storeDetails" && isStoreDetails(value)) {
        Object.entries(value).forEach(([detailField, detailValue]) => {
          setValue(`storeDetails.${detailField}` as FormField, detailValue);
        });
      } else {
        setValue(field as keyof FormData, value as string);
      }
    });
  }, [currentStep, setValue, stepData]);

  const validateStep = async () => {
    const fieldsToValidate = FORM_STEPS[currentStep].fields;
    if (currentStep === 2) {
      const mobileValue = getValues("mobile");
      if (!mobileValue || !/^\+?(\d{1,4})\d{6,14}$/.test(mobileValue)) {
        setValue("mobile", mobileValue || "", { shouldValidate: true });
        await trigger(["mobile", "email"]);
        return false;
      }
    }

    const result = await trigger(fieldsToValidate as FormField[]);
    return result;
  };

  const getFormValues = <T extends keyof FormData>(
    field: T
  ): FormFieldValue<T> => {
    if (field === "storeDetails") {
      return {
        street: getValues("storeDetails.street"),
        city: getValues("storeDetails.city"),
        state: getValues("storeDetails.state"),
        postalCode: getValues("storeDetails.postalCode"),
        country: getValues("storeDetails.country"),
      } as FormFieldValue<T>;
    }
    return getValues(field) as FormFieldValue<T>;
  };

  const handleNext = async () => {

    const isValid = await validateStep();
    if (isValid) {
      const currentStepFields = FORM_STEPS[currentStep].fields;
      const currentValues = currentStepFields.reduce<Partial<FormData>>(
        (acc, field) => {
          const value = getFormValues(field);
          if (value !== undefined && value !== "") {
            acc[field] = value as string & StoreDetails;
          }
          return acc;
        },
        {}
      );

      setStepData((prev) => ({
        ...prev,
        [currentStep]: currentValues,
      }));
        if (currentStep < FORM_STEPS.length - 1) {
          setCurrentStep((prev) => prev + 1);
        }
    }
  };

  const handleBack = () => {
    const currentStepFields = FORM_STEPS[currentStep].fields;
    const currentValues = currentStepFields.reduce<Partial<FormData>>(
      (acc, field) => {
        acc[field] = getFormValues(field) as string & StoreDetails;
        return acc;
      },
      {}
    );

    setStepData((prev) => ({
      ...prev,
      [currentStep]: currentValues,
    }));

    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };
    const handleStepNext = async () => {
      if (selectedCountry) {
        setValue("storeDetails.country", selectedCountry.name);
        if (selectedState) {
          setValue("storeDetails.state", selectedState.name);
          if (selectedCity) {
            setValue("storeDetails.city", selectedCity.name);
          }
        }
      }
       if (currentStep < FORM_STEPS.length - 1) {
         await handleNext();
       }
    };

    const handleStepBack = () => {
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
      setOnSubmitStatus(false);
    };

 

  const handleSubmitForm = handleSubmit((data: SubmitFormData) => {
    if (currentStep === FORM_STEPS.length - 1) {
      if (!onSubmitStatus) {
        setOnSubmitStatus(true);
        return;
      }
      const submitData = submitForm(data);
      handleSubmit(submitData as SubmitHandler<SubmitFormData>);
    }
  });
  const resetSellerRegestration = async () => {
    setStepData(
      FORM_STEPS.reduce<StepDataType>((acc, step, index) => {
        acc[index] = step.initialData;
        return acc;
      }, {})
    );

    setCurrentStep(0);
    setSelectedCountry(userCountry);
    setSelectedState(null);
    setSelectedCity(null);
    setSelectedCountryPhoneCode(userCountry);
    reset({
      firstname: "",
      lastname: "",
      email: "",
      mobile: "",
      password: "",
      confirmPassword: "",
      storeName: "",
      storeDetails: {
        street: "",
        city: "",
        state: "",
        postalCode: "",
        country: "",
      },
      terms: false,
    });

    resetRegistration();
  };
  return {
    currentStep,
    FORM_STEPS,
    loading,
    accessToken,
    user,
    formErrors,
    email,
    resetRegistration: resetSellerRegestration,
    register,
    setValue,
    getValues,
    handleSubmitForm,
    handleStepNext,
    handleStepBack,
    selectedCountryPhoneCode,
    handleLocationChange,
    setSelectedCountryPhoneCode,
    selectedCountry,
    selectedState,
    selectedCity,
  };
};

export default useRegisterSeller;
