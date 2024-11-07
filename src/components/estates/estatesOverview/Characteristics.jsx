import { PhoneIcon } from "lucide-react";
import { cn } from "../../../lib/utils";

const Characteristics = ({ estate }) => {
  return (
    <div className="border rounded-lg p-4 shadow-sm flex flex-col justify-between">
      <div>
        <h2 className="text-2xl font-bold mb-2">{estate.price} ARS</h2>
        <p className="text-gray-600 mb-4">Expensas: {estate.expenses} ARS</p>
      </div>

      <a
        target="_blank"
        rel="noreferrer"
        href={estate.contact}
        className={cn(
          "w-full bg-gray-800 text-white rounded-lg p-2 flex items-center justify-center gap-2 col-span-2",
          {
            "cursor-not-allowed opacity-50": !estate.contact,
          }
        )}
      >
        <PhoneIcon />
        <p>Contactar</p>
      </a>
    </div>
  );
};

export default Characteristics;
