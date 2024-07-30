const Person = ({ image, name, role }) => {
  return (
    <div className="w-full">
      <img src={image} alt={name} />
      <h4 className="font-medium text-[21px] mt-2">{name}</h4>
      <p className="text-[#575757]">{role}</p>
    </div>
  );
};

export default Person;
