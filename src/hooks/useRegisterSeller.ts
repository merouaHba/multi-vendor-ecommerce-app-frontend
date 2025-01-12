import { useState, useEffect } from "react";
import useRegister from "@/hooks/useRegister";

interface StoreDetails {
  address: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

interface FormData {
  firstname?: string;
  lastname?: string;
  storeName?: string;
  storeDetails?: StoreDetails;
  email?: string;
  mobile?: string;
  password?: string;
  confirmPassword?: string;
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
        address: "",
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

// Type guard to check if a value is StoreDetails
function isStoreDetails(value: unknown): value is StoreDetails {
  if (!value || typeof value !== "object") return false;
  const details = value as Partial<StoreDetails>;
  return (
    typeof details.address === "string" &&
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
  | "storeDetails.address"
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
    const result = await trigger(fieldsToValidate as FormField[]);
    return result;
  };

  const getFormValues = <T extends keyof FormData>(field: T): FormFieldValue<T> => {
    if (field === "storeDetails") {
      return {
        address: getValues("storeDetails.address"),
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
          acc[field] = getFormValues(field) as string & StoreDetails;
          return acc;
        },
        {}
      );

      setStepData((prev) => ({
        ...prev,
        [currentStep]: currentValues,
      }));

      setCurrentStep((prev) => Math.min(prev + 1, FORM_STEPS.length - 1));
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

  return {
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
  };
};


export default useRegisterSeller;