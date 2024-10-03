import { cn } from "../../lib/utils";

const Button = ({ variant, className, children, ...props }) => {
  return (
    <button
      className={cn(
        "rounded-md transition-all px-1 py-1.5 text-black shadow disabled:text-[#ACACAC] disabled:bg-[#dddddd]",
        {
          "bg-[#4F4F4F] hover:bg-[#000000]": variant === "primary",
          "bg-black  px-6 text-white": variant === "secondary",
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
