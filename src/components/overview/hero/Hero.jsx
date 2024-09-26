import HomeIcon from "../../icons/HomeIcon";
import OverviewButton from "./OverviewButton";
import HotelIcon from "../../icons/HotelIcon";
import MegaHomeIcon from "../../icons/MegaHomeIcon";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Input from "../../ui/Input";

const Hero = () => {
  const [isLogged, setIsLogged] = useState(false);

  const hasToken = () => {
    return localStorage.getItem("token") !== null;
  };

  useEffect(() => {
    setIsLogged(hasToken());
  }, []);

  return (
    <div className="flex my-auto items-center text-center text-white flex-col z-[17] absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%]">
      <h1 className="text-[50px] font-semibold">
        Tu hogar, nuestro compromiso
      </h1>
      <h2 className="text-[22px]">
        Busca inmuebles en venta o en alquiler en Rosario
      </h2>
      <Input
        type="text"
        className="w-[80%] mt-6"
        placeholder="Casa, departamento en el centro..."
      />
      <p className="mt-10 text-white">¿Qué estás buscando ahora?</p>
      <div className="mt-6 flex gap-6">
        <Link to={"/buy"}>
          <OverviewButton label="Alquilar" icon={<HomeIcon />} />
        </Link>
        <Link to={"/buy"}>
          <OverviewButton label="Comprar" icon={<HotelIcon />} />
        </Link>
        <Link to={isLogged ? "/vender" : "/vender"}>
          <OverviewButton label="Vender" icon={<MegaHomeIcon />} />
        </Link>
      </div>
    </div>
  );
};

export default Hero;
