import { cn } from "../../lib/utils";

const Tag = ({ text, type }) => {
  return (
    <div
      className={cn("rounded-full px-3 py-1 text-[13px] flex items-center font-semibold w-fit relative shadow-md", {
        "bg-green-100 text-green-500 border border-green-500 border-opacity-70": type === "sale",
        "bg-blue-100 text-blue-500 border border-blue-500 border-opacity-70": type === "rent",
        "bg-yellow-100 text-yellow-500 border border-yellow-500 border-opacity-70": type === "outstanding",
      })}
    >
      <div
        className={cn("w-1.5 h-1.5 rounded-full mr-2 relative top-[1px]", {
          "bg-green-500": type === "sale",
          "bg-blue-500": type === "rent",
          "bg-yellow-500": type === "outstanding",
        })}
      />
      {text}
    </div>
  );
};

export default Tag;
