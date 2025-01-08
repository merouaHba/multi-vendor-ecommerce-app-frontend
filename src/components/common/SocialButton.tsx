type socialProps = {
  children: React.ReactNode;
  icon: React.ReactNode;
  variant?: "outline" | "default" | "destructive" | "secondary" | "ghost" | "link" | null | undefined;
  loading?: boolean;
  onClick: () => void;
  className: string;
};

// const SocialButton = ({ icon, children, ...props }: socialProps) => (
//   <button className="w-full flex items-center justify-center gap-2" {...props}>
//     {icon}
//     {children}
//   </button>
// );
// export default SocialButton;
import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const OAuthButton = ({
  children,
  icon,
  variant = "outline",
  loading = false,
  onClick,
  className,
  ...props
}: socialProps) => {
  return (
    <Button
      variant={variant}
      className={cn(
        "w-full bg-white hover:bg-gray-50 text-gray-700 font-medium relative h-11",
        "transition-all duration-200 ease-in-out",
        "border border-gray-300 hover:border-gray-400",
        "flex items-center justify-center gap-3",
        "group",
        className
      )}
      onClick={onClick}
      disabled={loading}
      {...props}
    >
      <span className="absolute left-4 flex items-center justify-center w-5 h-5">
        {icon}
      </span>
      <span className="text-sm">{children}</span>
    </Button>
  );
};

export default OAuthButton;