import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../../../lib/context/useUser";
import { useState, useEffect } from "react";

import HomeIcon from "../../icons/HomeIcon";
import OverviewButton from "./OverviewButton";
import HotelIcon from "../../icons/HotelIcon";
import MegaHomeIcon from "../../icons/MegaHomeIcon";
import Input from "../../ui/Input";

import { useLanguage } from "../../../lib/context/useLang";
import { translations } from "../../../lib/translations";
import { Button, Spinner } from "@material-tailwind/react";

const Hero = () => {
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isFocused, setIsFocused] = useState(false);

  const { language } = useLanguage();
  const { user } = useUser();
  const router = useNavigate();

  useEffect(() => {
    if (searchTerm) {
      setLoading(true);
      const debounceFetch = setTimeout(() => {
        fetch(
          `${
            import.meta.env.VITE_BACKEND_URL
          }/real-estate/page?search=${searchTerm}`
        )
          .then((res) => res.json())
          .then((data) => {
            setSearchResults(data.content);
          })
          .finally(() => {
            setLoading(false);
          });
      }, 1000);

      return () => clearTimeout(debounceFetch);
    } else {
      setSearchResults([]);
      setLoading(false);
    }
  }, [searchTerm]);

  const handleSearch = () => {
    router(`/buy?search=${searchTerm}`);
  };

  const handleClickCard = (id) => {
    router(`/buy/${id}`);
  };

  return (
    <div className="flex my-auto items-center text-center text-white flex-col z-[17] absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%]">
      <h1 className="text-[50px] font-semibold">
        {translations[language].slogan}
      </h1>
      <h2 className="text-[24px]">{translations[language].heroDesc}</h2>
      <div className="relative mt-4 w-full max-w-md">
        <div className="flex">
          <Input
            type="text"
            className="w-full px-4 py-2 rounded-l-lg rounded-r-none placeholder:text-gray-700"
            placeholder="Buscar dirección, nombre, descripción..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          <Button
            className="px-4 py-2 rounded-l-none rounded-r-lg"
            onClick={handleSearch}
          >
            Buscar
          </Button>
        </div>
        {isFocused && Array.isArray(searchResults) && (
          <ul className="absolute left-0 right-0 bg-white text-black mt-2 rounded-lg shadow-lg max-h-60 overflow-y-auto">
            {loading ? (
              <li className="px-4 py-2">
                <Spinner size="sm" className="mx-auto" />
              </li>
            ) : searchResults.length > 0 ? (
              searchResults.map((result) => (
                <li
                  onMouseDown={() => handleClickCard(result.id)}
                  key={result.id}
                  className="grid grid-cols-3 cursor-pointer hover:bg-gray-100"
                >
                  <img src={result.images[0]} className="w-full col-span-1" />
                  <div
                    key={result.id}
                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer col-span-2 flex text-start flex-col"
                  >
                    <p>
                      <strong>{result.name}</strong>
                    </p>
                    <p>{result.location}</p>
                  </div>
                </li>
              ))
            ) : (
              <li className="px-4 py-2 text-gray-500">
                No se encontraron resultados
              </li>
            )}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Hero;
