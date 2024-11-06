import PropertyList from "./estates/List";
import { useLanguage } from "../../lib/context/useLang";
import { translations } from "../../lib/translations";

export const AccountEstates = () => {
  const { language } = useLanguage();
  return (
    <div className="flex flex-col gap-6">
      <h2 className=" font-semibold text-2xl">
        {translations[language].tusPropiedades}
      </h2>

      <PropertyList />
    </div>
  );
};
