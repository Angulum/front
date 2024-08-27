import { cn } from "../../lib/utils";

const Input = ({ type, placeholder, onClick, className, ...props }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={cn(
        "border border-gray-300 rounded-md p-1 placeholder:p-1 placeholder:text-sm text-sm",
        className
      )}
      onClick={onClick}
      {...props}
    />
  );
};

export default Input;
