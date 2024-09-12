import PropertyList from "./estates/List";

export const AccountEstates = () => {
  return (
    <div className="flex flex-col gap-6">
      <h2 className=" font-semibold text-2xl">Tus propiedades</h2>

      <PropertyList />
    </div>
  );
};
