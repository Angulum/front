import Skeleton from "../../ui/Skeleton";

const CardGridLoading = () => {
  return (
    <div className="max-w-[80%] mx-auto">
      <div className="grid grid-rows-1 sm:grid-rows-2 lg:grid-rows-3 gap-4 py-4">
        {Array.from({ length: 6 }, (_, index) => (
          <Skeleton key={index} className="h-[300px] w-[80vw]" />
        ))}
      </div>
    </div>
  );
};

export default CardGridLoading;
