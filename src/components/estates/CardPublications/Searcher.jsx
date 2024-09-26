import Input from "../../ui/Input";

const Sercher = () => {
  return (
    <div className="flex space-x-4 py-4 overflow-hidden relative w-[80%] mx-auto">
      <div className="grid  grid-cols-7 w-full gap-4">
        <Input
          type="text"
          placeholder="¿Qué estás buscando?"
          className="col-span-3"
        />
        <select className="p-2 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="">Tipo de Inmueble</option>
          <option value="">Dempartamento</option>
          <option value="">Casa</option>
          <option value="">PH</option>
        </select>
        <select className="p-2 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="">Comprar</option>
          <option value="">Alquilar</option>
        </select>
        <select className="p-2 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="">Precio</option>
        </select>
        <select className="p-2 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="">Ordenar por</option>
        </select>
      </div>
    </div>
  );
};

export default Sercher;
