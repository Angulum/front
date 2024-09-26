import { Option, Select } from "@material-tailwind/react";
import Input from "../../ui/Input";

const Sercher = () => {
  return (
    <div className="flex space-x-4 py-4 relative w-[80%] mx-auto ">
      <div className="grid  grid-cols-7 w-full gap-4">
        <Input
          type="text"
          placeholder="¿Qué estás buscando?"
          className="col-span-3 border-[#b0bec5] text-[#b0bec5]"
        />
        <Select label="Tipo de propiedad">
          <Option>Dempartamento</Option>
          <Option>Casa</Option>
          <Option>PH</Option>
        </Select>
        <Select label="Operación">
          <Option>Comprar</Option>
          <Option>Alquilar</Option>
        </Select>
        <Select label="Precio">
          <Option>$1000 - $5000</Option>
          <Option>$5000 - $10000</Option>
        </Select>
        <Select label="Ordenar por">
          <Option>Más recientes</Option>
          <Option>Más antiguos</Option>
          <Option>Más baratos</Option>
          <Option>Más caros</Option>
        </Select>
      </div>
    </div>
  );
};

export default Sercher;
