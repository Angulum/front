import Navbar from "../components/navbar/Navbar";
import Characteristics from "../components/estates/estatesOverview/Characteristics";
import Contact from "../components/estates/estatesOverview/Contact";
import Description from "../components/estates/estatesOverview/Description";
import Gallery from "../components/estates/estatesOverview/Gallery";
import Map from "../components/estates/estatesOverview/Map";
import { Heart, PhoneIcon } from "lucide-react";
import { cn } from "../lib/utils";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Skeleton from "../components/ui/Skeleton";

const OverviewEstates = () => {
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [favorite, setFavorite] = useState(false);
  const [setColorChecked] = useState("fill-red-500");
  const [estate, setEstate] = useState({});

  const handleFavoriteClick = () => {
    setFavorite((value) => !value);
    setColorChecked(favorite ? "" : "");
  };

  useEffect(() => {
    setLoading(true);
    fetch(`${import.meta.env.VITE_BACKEND_URL}/real-estate/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setEstate(data);
      })
      .catch((error) => {
        console.error("Error fetching estate:", error);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return (
    <>
      <Navbar />
      {loading ? (
        <div className="text-center mt-[7rem] max-w-[80%] mx-auto">
          <Skeleton className={"w-full mx-auto h-[400px]"} />
          <div className="flex gap-8 grid-cols-2 mt-4">
            <Skeleton className={"w-full h-12"} />
            <Skeleton className={"w-full h-12"} />
          </div>
          <Skeleton className={"w-full h-[200px] mt-4"} />
        </div>
      ) : (
        <div className="max-w-[80%] mx-auto py-4 mt-20">
          <div className="flex flex-row justify-between">
            <h1 className="font-bold text-xl">{estate.name}</h1>
            <button onClick={handleFavoriteClick}>
              <Heart
                className={cn("", {
                  "fill-red-500 text-red-500": favorite,
                })}
              />
            </button>
          </div>
          <div className="mt-8">
            <Gallery images={estate.images}  />
          </div>
          <div className="mx-auto py-4 my-12">
            <div className="grid grid-cols-1 w-full md:grid-cols-2 gap-8   ">
              <Characteristics />
              <Description />
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
          </div>
          <div className="mt-2 mb-2">
            <Map location={estate.location} />
          </div>
        </div>
      )}
    </>
  );
};

export default OverviewEstates;
