import AttributesCard from "./AtrributesCard";
import Tag from "../../ui/Tag";

import { useLanguage } from "../../../lib/context/useLang";
import { translations } from "../../../lib/translations";

const PublicationCard = ({ publication }) => {
  const { language } = useLanguage();

  return (
    <a
      className="flex flex-col relative border border-black/20 rounded-lg overflow-hidden"
      href={`/buy/${publication.id}`}
    >
      <div>
        <img
          src={
            publication.images && publication.images.length > 0
              ? publication.images[0]
              : "/image-not-found.png"
          }
          alt={publication.title}
          className=" object-fill w-full"
        />
      </div>

      <div className="flex flex-col p-4">
        <h4 className="font-medium text-[20px]">{publication.name}</h4>

        <p className="text-[#575757] text-[16px]">{publication.location}</p>
      </div>
    </a>
  );
};

export default PublicationCard;
