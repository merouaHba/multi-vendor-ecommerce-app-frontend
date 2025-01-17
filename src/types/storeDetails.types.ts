import { FieldValues, UseFormRegister, FieldErrors } from "react-hook-form";

export interface StoreDetails {
  street: string;
  city?: string;
  state: string;
  postalCode: number;
  country: string;
}

export interface StoreDetailsFormProps {
  register: UseFormRegister<FieldValues>;
  formErrors: FieldErrors;
}

export interface SellerRegistrationForm extends FieldValues {
  firstname: string;
  lastname: string;
  email: string;
  mobile: string;
  password: string;
  confirmPassword: string;
  storeName: string;
  storeDetails: StoreDetails;
}