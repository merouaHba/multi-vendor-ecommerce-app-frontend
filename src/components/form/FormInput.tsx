// import { Eye, EyeOff } from "lucide-react";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import React, {  ForwardedRef, useState } from "react";

// interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
//   id: string;
//   label: string;
//   error?: string; 
//   showPasswordToggle?: boolean; //only if password 
// }

// const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
//   (
//     { id, label, error, showPasswordToggle, ...props },
//     ref: ForwardedRef<HTMLInputElement>
//   ) => {
//     const [showPassword, setShowPassword] = useState(false);

//     return (
//       <div className="space-y-2">
//         <Label htmlFor={id}>{label}</Label>
//         <div className="relative">
//           <Input
//             ref={ref}
//             id={id}
//             type={
//               showPasswordToggle
//                 ? showPassword
//                   ? "text"
//                   : "password"
//                 : props.type
//             }
//             {...props}
//             className={error ? "border-red-500" : ""}
//           />
//           {showPasswordToggle && (
//             <button
//               type="button"
//               onClick={() => setShowPassword(!showPassword)}
//               className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
//               aria-label={showPassword ? "Hide password" : "Show password"}
//             >
//               {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//             </button>
//           )}
//         </div>
//         {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
//       </div>
//     );
//   }
// );
// export default FormInput
import { Eye, EyeOff } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { ForwardedRef, useState, useCallback } from "react";
import {cn} from "@/lib/utils";

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  error?: string;
  showPasswordToggle?: boolean;
  helperText?: string;
  required?: boolean;
  labelClassName?: string;
  inputWrapperClassName?: string;
  rightElement?: React.ReactNode;
  leftElement?: React.ReactNode;
}

const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
  (
    {
      id,
      label,
      error,
      showPasswordToggle,
      helperText,
      required,
      className,
      labelClassName,
      inputWrapperClassName,
      rightElement,
      leftElement,
      disabled,
      ...props
    },
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePassword = useCallback(() => {
      setShowPassword((prev) => !prev);
    }, []);

    const getInputType = useCallback(() => {
      if (!showPasswordToggle) return props.type;
      return showPassword ? "text" : "password";
    }, [showPasswordToggle, showPassword, props.type]);

    return (
      <div className="space-y-2">
        <Label
          htmlFor={id}
          className={cn("flex items-center gap-1", labelClassName)}
        >
          {label}
          {required && <span className="text-red-500">*</span>}
        </Label>

        <div
          className={cn(
            "relative",
            disabled && "opacity-60 cursor-not-allowed",
            inputWrapperClassName
          )}
        >
          {leftElement && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2">
              {leftElement}
            </div>
          )}

          <Input
            ref={ref}
            id={id}
            type={getInputType()}
            aria-invalid={!!error}
            aria-describedby={
              error ? `${id}-error` : helperText ? `${id}-helper` : undefined
            }
            className={cn(
              leftElement && "pl-10",
              (rightElement || showPasswordToggle) && "pr-10",
              error && "border-red-500 focus-visible:ring-red-500",
              className
            )}
            disabled={disabled}
            {...props}
          />

          {(rightElement || showPasswordToggle) && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center">
              {rightElement}
              {showPasswordToggle && (
                <button
                  type="button"
                  onClick={togglePassword}
                  className="text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  disabled={disabled}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              )}
            </div>
          )}
        </div>

        {helperText && !error && (
          <p id={`${id}-helper`} className="text-sm text-gray-500">
            {helperText}
          </p>
        )}

        {error && (
          <p id={`${id}-error`} className="text-sm text-red-500" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }
);

FormInput.displayName = "FormInput";

export default FormInput;