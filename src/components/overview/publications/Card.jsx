import AttributesCard from "./AtrributesCard";

const PublicationCard = ({ publication }) => {
  return (
    <div className="flex flex-col relative border border-black/20 rounded-lg overflow-hidden">
      <div className="absolute top-4 left-0">[TAGS]</div>

      <div>
        <img src={publication.image} alt={publication.title} />
      </div>

      <div className="flex flex-col p-4">
        <h4 className="font-medium text-[22px]">{publication.title}</h4>

        <p className="text-[#575757] text-[18px]">{publication.location}</p>

        <div className="grid grid-cols-2 w-full gap-4 space-y-1 mt-4">
          {publication.attributes.map((a, i) => {
            return <AttributesCard key={i} title={a.label} value={a.value} />;
          })}
        </div>

        <div className="h-0.5 w-full bg-black/10 my-5" />

        <p className="font-medium text-[22px]">Contacto del vendedor</p>

        <div className="text-[18px] text-[#575757]">
          <p>{publication.vendor}</p>
          <p>{publication.number}</p>
          <p>{publication.email}</p>
        </div>
      </div>
    </div>
  );
};

export default PublicationCard;
