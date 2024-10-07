import { cn } from "../../lib/utils";

const Button = ({ variant = "default", className, children, ...props }) => {
  return (
    <button
      className={cn(
        "rounded-md transition-all px-1 py-1.5 shadow disabled:text-[#ACACAC] disabled:bg-[#dddddd]",
        {
          "bg-[#4F4F4F] text-white hover:bg-[#000000]": variant === "primary",
          "bg-black px-6 text-white hover:bg-[#333333]": variant === "secondary",
          "bg-white text-black border border-gray-300 hover:bg-gray-100": variant === "outline",
          "bg-blue-500 text-white hover:bg-blue-700": variant === "success",
          "bg-red-500 text-white hover:bg-red-700": variant === "danger",
          "bg-yellow-500 text-white hover:bg-yellow-600": variant === "warning",
          "bg-gray-200 text-black hover:bg-gray-300": variant === "default",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;