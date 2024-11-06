import AttributesCard from "./AtrributesCard";
import Tag from "../../ui/Tag";

import { useLanguage } from "../../../lib/context/useLang";
import { translations } from "../../../lib/translations";

const PublicationCard = ({ publication }) => {
  const { language } = useLanguage();

  return (
    <div className="flex flex-col relative border border-black/20 rounded-lg overflow-hidden">
      <div className="absolute top-4 left-4 flex items-center gap-2">
        {publication.tags.map((t, i) => {
          return <Tag key={i} text={t.text} type={t.type} />;
        })}
      </div>

      <div>
        <img
          src={publication.image}
          alt={publication.title}
          className=" object-fill w-full"
        />
      </div>

      <div className="flex flex-col p-4">
        <h4 className="font-medium text-[20px]">{publication.title}</h4>

        <p className="text-[#575757] text-[16px]">{publication.location}</p>

        <div className="grid grid-cols-2 w-full gap-4 space-y-1 mt-4">
          {publication.attributes.map((a, i) => {
            return <AttributesCard key={i} title={a.label} value={a.value} color={a.color} />;
          })}
        </div>

        <div className="h-0.5 w-full bg-black/10 my-5" />

        <p className="font-medium text-[20px]">
          {translations[language].cardContact}
        </p>

        <div className=" text-[#575757]">
          <p>{publication.vendor}</p>
          <p>{publication.number}</p>
          <p>{publication.email}</p>
        </div>
      </div>
    </div>
  );
};

export default PublicationCard;
