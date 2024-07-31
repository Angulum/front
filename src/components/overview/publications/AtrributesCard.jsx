import { cn } from "../../../lib/utils";

const AttributesCard = ({ title, value, color }) => {
  return (
    <div className="flex flex-col">
      <p className="text-[#575757] ">{title}</p>

      <p
        className={cn("text-[18px] text-black", {
          "text-green-500": color === "green",
          "text-blue-500": color === "blue",
          "text-yellow-500": color === "yellow",
        })}
      >
        {value}
      </p>
    </div>
  );
};

export default AttributesCard;
