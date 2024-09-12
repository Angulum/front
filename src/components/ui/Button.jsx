import { cn } from "../../lib/utils";

const Button = ({ variant, className, children, ...props }) => {
  return (
    <button
      className={cn(
        "rounded-md transition-all px-1 py-2 text-[#F5F5F5] shadow disabled:text-[#ACACAC] disabled:bg-[#dddddd]",
        {
          "bg-[#4F4F4F] hover:bg-[#000000]": variant === "primary",
          "bg-white hover:border hover:border-[#000000]":
            variant === "secondary",
          "bg-transparent border border-[#F5F5F5] text-black": variant === "outline",
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
