import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Heart } from "lucide-react";
import Tag from "../../ui/Tag";
import { cn } from "../../../lib/utils";

import { useLanguage } from "../../../lib/context/useLang";
import { translations } from "../../../lib/translations";
import { useUser } from "../../../lib/context/useUser";

const Card = ({ property }) => {
  const { language } = useLanguage();

  const navigate = useNavigate();
  const { user, setUser } = useUser();
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    if (user) {
      if (user.favorites.includes(parseInt(property.id))) {
        setFavorite(true);
      } else {
        setFavorite(false);
      }
    }
  }, [property.id, user]);

  const handleFavoriteClick = (event) => {
    event.stopPropagation();
    fetch(
      `${import.meta.env.VITE_BACKEND_URL}/real-estate/favorite/${property.id}`,
      {
        method: favorite ? "DELETE" : "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    setFavorite(!favorite);
    setUser((prev) => ({
      ...prev,
      favorites: favorite
        ? prev.favorites.filter((fav) => fav !== parseInt(property.id))
        : [...prev.favorites, parseInt(property.id)],
    }));
  };

  const handleCardClick = () => {
    navigate(`/buy/${property.id}`);
  };

  return (
    <div
      className="bg-white border border-black/10 rounded-lg overflow-hidden flex cursor-pointer"
      onClick={handleCardClick}
    >
      <div className="w-[30%] relative">
        <img
          className="w-full h-full object-cover"
          src={
            property.images && property.images.length > 0
              ? property.images[0]
              : "/image-not-found.png"
          }
          alt="Casa"
        />
      </div>
      <div className="p-4 flex-1">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold">{property.name}</h3>
          <div className="flex items-center space-x-2">
            {user && user.id != property.ownerId && (
              <button className="z-50" onClick={handleFavoriteClick}>
                <Heart
                  className={cn("", {
                    "fill-red-500 text-red-500": favorite,
                  })}
                />
              </button>
            )}
          </div>
        </div>
        <p className="text-gray-500">{property.location}</p>
        <div className="flex space-x-4 my-2">
          <div className="flex items-center">
            <span className="text-gray-600">
              {translations[language].rooms}:
            </span>
            <span className="ml-1 text-gray-800 font-semibold">
              {property.rooms}
            </span>
          </div>
          <div className="flex items-center">
            <span className="text-gray-600">
              {translations[language].bathrooms}:
            </span>
            <span className="ml-1 text-gray-800 font-semibold">
              {property.bathrooms}
            </span>
          </div>
          <div className="flex items-center">
            <span className="text-gray-600">
              {translations[language].squarem}:
            </span>
            <span className="ml-1 text-gray-800 font-semibold">
              {property.squareFeet}
            </span>
          </div>
        </div>
        <div className="text-lg text-gray-800 font-bold mb-2">
          {property.price} {translations[language].price}
        </div>
        <p className="text-gray-700 mb-4">{property.description}</p>
        <div className="border-t pt-4">
          <h4 className="text-gray-600 font-semibold">
            {translations[language].cardContact}
          </h4>
          <div className="flex items-center mt-2">
            <p className="text-gray-600">{property.contact}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
