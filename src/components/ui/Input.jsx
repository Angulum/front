import { cn } from "../../lib/utils";

const LoginInput = ({ type, placeholder, onClick, className, ...props }) => {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        className={cn(
          "border border-gray-300 rounded-md p-1 placeholder:px-1",
          className
        )}
        onClick={onClick}
        {...props}
      />
    </>
  );
};

export default LoginInput;
