import HomeIcon from "../../icons/HomeIcon";
import OverviewButton from "./OverviewButton";
import HotelIcon from "../../icons/HotelIcon";
import MegaHomeIcon from "../../icons/MegaHomeIcon";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex my-auto items-center text-center text-[#333333] flex-col z-[17]">
      <h1 className="text-[50px] font-semibold">Tu hogar, nuestro objetivo.</h1>
      <h2 className="text-[22px]">
        Busca inmuebles en venta o en alquiler en Rosario
      </h2>
      <input
        type="text"
        className="border border-black/20 rounded-md w-[70%] py-1 placeholder:px-3 mt-6"
        placeholder="Casa, departamento en el centro..."
      />
      <p className="mt-10 text-black">¿Qué estás buscando ahora?</p>
      <div className="mt-6 flex gap-6">
        <Link to={("/buy")}>
          <OverviewButton label="Alquilar" icon={<HomeIcon />} />
        </Link>
        <Link to={("/buy")}>
          <OverviewButton label="Comprar" icon={<HotelIcon />} />
        </Link>
        <Link to={("/sell")}>
          <OverviewButton label="Vender" icon={<MegaHomeIcon />} />
        </Link>
      </div>
    </div>
  );
};

export default Hero;
