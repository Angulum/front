import Input from "../../ui/Input";

import { useLanguage } from "../../../lib/context/useLang";
import { translations } from "../../../lib/translations";

const Sercher = ({ setSearch, setPropertyType, setOperation }) => {
  const { language } = useLanguage();
  return (
    <div className="flex space-x-4 py-4 relative w-[80%] mx-auto ">
      <div className="grid  grid-cols-2 w-full gap-4 text-black">
        <Input
          type="text"
          placeholder="¿Qué estás buscando?"
          className="col-span-2"
          onChange={(e) => setSearch(e.target.value)}
        />
        {/* <select
          className="p-2 rounded"
          onChange={(e) => setPropertyType(e.target.value)}
        >
          <option value="">Tipo de propiedad</option>
          <option value="APARTMENT">{translations[language].dpto}</option>
          <option value="HOUSE">{translations[language].house}</option>
        </select>
        <select
          className="p-2 rounded"
          onChange={(e) => setOperation(e.target.value)}
        >
          <option value="">Operacion</option>
          <option value="BUY">{translations[language].buy}</option>
          <option value="LEASE">{translations[language].lease}</option>
        </select> */}
      </div>
    </div>
  );
};

export default Sercher;
