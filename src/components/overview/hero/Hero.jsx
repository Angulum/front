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
import { Button } from "@material-tailwind/react";

const Hero = () => {
  const { language } = useLanguage();
  const { user } = useUser();

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isFocused, setIsFocused] = useState(false);

  const router = useNavigate();

  useEffect(() => {
    if (searchTerm) {
      fetch(
        `${
          import.meta.env.VITE_BACKEND_URL
        }/real-estate/page?search=${searchTerm}`
      )
        .then((res) => res.json())
        .then((data) => {
          setSearchResults(data.content);
        });
    } else {
      setSearchResults([]);
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
            {searchResults.length > 0 ? (
              searchResults.map((result) => (
                <li
                  key={result.id}
                  className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  onMouseDown={() => handleClickCard(result.id)}
                >
                  {result.name}
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
