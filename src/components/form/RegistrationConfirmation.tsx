import { CheckCircle } from "lucide-react";
import { Alert, AlertDescription } from "../ui/alert";
import { useNavigate } from "react-router-dom";
type RegistrationConfirmationProps = {
  email:string;
  resetRegistration:()=> void;
};
const RegistrationConfirmation = ({
  email,
  resetRegistration,
}: RegistrationConfirmationProps) => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-lg">
        <div className="text-center">
          <CheckCircle className="mx-auto h-12 w-12 text-green-500" />
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            Check Your Email
          </h2>
          <div className="mt-4 text-gray-600">
            <p>We've sent a verification link to:</p>
            <p className="font-medium mt-2">{email}</p>
          </div>
        </div>

        <div className="mt-8 space-y-4">
          <Alert className="bg-blue-50 border-blue-200">
            <AlertDescription>
              Please check your email and click the verification link to
              activate your account. The link will expire in 24 hours.
            </AlertDescription>
          </Alert>

          <div className="text-center space-y-4">
            <p className="text-sm text-gray-600">
              Can't find the email? Check your spam folder.
            </p>

            <div className="space-y-2">
              <button
                onClick={() => navigate("/resend-verification")}
                className="text-blue-600 hover:text-blue-500 text-sm font-medium"
              >
                Didn't receive the email? Click here to resend
              </button>

              <p className="text-xs text-gray-500">
                If you entered the wrong email, you can also{" "}
                <button
                  onClick={resetRegistration}
                  className="text-blue-600 hover:text-blue-500"
                >
                  go back and try again
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationConfirmation