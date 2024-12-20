import { cn } from "../../lib/utils";

const Input = ({ type, placeholder, onClick, className, ...props }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={cn(
        "w-full text-black bg-white placeholder:text-slate-400 text-slate-700 text-sm border border-black/50 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow",
        className
      )}
      style={{ color: "black" }}
      onClick={onClick}
      {...props}
    />
  );
};

export default Input;
