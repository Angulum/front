import { Link } from "react-router-dom";
import { useUser } from "../../../lib/context/useUser";

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

  return (
    <div className="flex my-auto items-center text-center text-white flex-col z-[17] absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%]">
      <h1 className="text-[50px] font-semibold">
        {translations[language].slogan}
      </h1>
      <h2 className="text-[24px]">{translations[language].heroDesc}</h2>
      <a
        className="mt-10 bg-white text-black px-6 py-2 rounded-lg w-full"
        href="/buy"
      >
        {translations[language].heroButton}
      </a>
      {/* <p className="mt-10">
        {translations[language].heroQuestion}
      </p> */}
      {/* <div className="mt-4 flex gap-6">
        <Link to={"/buy"}>
          <OverviewButton
            label="Alquilar"
            icon={<HomeIcon className="w-7 h-7" />}
          />
        </Link>
        <Link to={"/buy"}>
          <OverviewButton
            label="Comprar"
            icon={<HotelIcon className="w-7 h-7" />}
          />
        </Link>
        <Link to={user ? "/vender" : "/vender"}>
          <OverviewButton
            label="Vender"
            icon={<MegaHomeIcon className="w-7 h-7" />}
          />
        </Link>
      </div> */}
    </div>
  );
};

export default Hero;
