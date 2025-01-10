
import {
  CheckCircle2,
} from "lucide-react";


const StepIndicator = ({
  step,
  index,
  currentStep,
  isLast = false,
}: {
  step: { title: string; description: string };
  currentStep: number;
  index: number;
  isLast?: boolean;
}) => {
  const isActive = currentStep === index;
  const isCompleted = currentStep > index;

  return (
    <>
      <div className="relative flex flex-col items-center group">
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200
            ${
              isCompleted
                ? "bg-green-500"
                : isActive
                ? "bg-indigo-600"
                : "bg-gray-200"
            }
            ${isActive ? "ring-4 ring-indigo-100" : ""}
          `}
        >
          {isCompleted ? (
            <CheckCircle2 className="w-6 h-6 text-white" />
          ) : (
            <span
              className={`text-sm font-semibold ${
                isActive ? "text-white" : "text-gray-600"
              }`}
            >
              {index + 1}
            </span>
          )}
        </div>
        <div className="mt-2 absolute top-12 invisible group-hover:visible bg-white border shadow-lg rounded-lg p-2 w-48 z-10">
          <p className="font-semibold text-sm text-gray-900">{step.title}</p>
          <p className="text-xs text-gray-500">{step.description}</p>
        </div>
        <span className="text-xs mt-2 font-medium hidden sm:block">
          {step.title}
        </span>
      </div>
      {!isLast && (
        <div className="flex-1 min-w-[2rem] h-px sm:h-1 mx-2">
          <div
            className={`h-full transition-all duration-300 ${
              isCompleted ? "bg-green-500" : "bg-gray-200"
            }`}
            style={{
              width: isActive ? "50%" : isCompleted ? "100%" : "0%",
            }}
          />
        </div>
      )}
    </>
  );
};
export default StepIndicator;