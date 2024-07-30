const AttributesCard = ({ title, value }) => {
  return (
    <div className="flex flex-col">
      <p className="text-[#575757] ">{title}</p>

      <p className="text-[18px] text-black">{value}</p>
    </div>
  );
};

export default AttributesCard;
