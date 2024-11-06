import { Option, Select } from "@material-tailwind/react";
import Input from "../../ui/Input";

import { useLanguage } from "../../../lib/context/useLang";
import { translations } from "../../../lib/translations";

const Sercher = () => {
  const { language } = useLanguage()
  return (
    <div className="flex space-x-4 py-4 relative w-[80%] mx-auto ">
      <div className="grid  grid-cols-7 w-full gap-4">
        <Input
          type="text"
          placeholder="¿Qué estás buscando?"
          className="col-span-3 border-[#b0bec5] text-[#b0bec5]"
        />
        <Select label="Tipo de propiedad">
          <Option>{translations[language].dpto}</Option>
          <Option>{translations[language].house}</Option>
          <Option>PH</Option>
        </Select>
        <Select label="Operación">
          <Option>{translations[language].buy}</Option>
          <Option>{translations[language].lease}</Option>
        </Select>
        <Select label="Precio">
          <Option>$1000 - $5000</Option>
          <Option>$5000 - $10000</Option>
        </Select>
        <Select label="Ordenar por">
          <Option>{translations[language].recent}</Option>
          <Option>{translations[language].old}</Option>
          <Option>{translations[language].cheapest}</Option>
          <Option>{translations[language].expensive}</Option>
        </Select>
      </div>
    </div>
  );
};

export default Sercher;
