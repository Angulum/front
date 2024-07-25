import { ArrowRightIcon } from "lucide-react";

const OfferButton = ({ offer, onClick, href }) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className="flex items-center justify-between w-full p-4 bg-[#F2F2F2] rounded-[10px] text-[#333333] border border-black/20 gap-6"
    >
      <p>{offer}</p>

      <ArrowRightIcon className="mr-2" />
    </a>
  );
};

export default OfferButton;