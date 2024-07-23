import HomeIcon from "../components/icons/home-icon";
import HotelIcon from "../components/icons/hotel-icon";
import MegaHomeIcon from "../components/icons/mega-home-icon";
import Navbar from "../components/Navbar";
import OverviewButton from "../components/OverviewButton";

const Overview = () => {
  return (
    <div className="relative h-[100vh] max-h-[100vh] overflow-hidden">
      <Navbar />

      <div className="grid lg:grid-cols-2 h-full sm:max-w-[80%] mx-auto ">
        <div className="flex h-[60%] my-auto items-center text-center text-[#333333] flex-col">
          <h1 className="text-[50px] font-semibold">
            Tu hogar, nuestro objetivo.
          </h1>
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
            <OverviewButton label="Alquilar" icon={<HomeIcon />} />
            <OverviewButton label="Comprar" icon={<HotelIcon />} />
            <OverviewButton label="Vender" icon={<MegaHomeIcon />} />
          </div>
        </div>

        <div className="w-full h-full z-[-1] overflow-hidden hidden lg:flex absolute top-0">
          <img
            src="./hero.jpg"
            alt="hero"
            className="object-cover w-full h-full"
          />
          <div className="sm:flex hidden absolute bg-white h-[150vh] rotate-[20deg] w-full top-[-300px] left-[-800px] border border-black/5" />
        </div>
      </div>
    </div>
  );
};

export default Overview;
