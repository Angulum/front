
const Sercher = () => {
    return (
        <div className="flex space-x-4 p-4 w-full">
          <div className=" flex flex-nowrap gap-5">
            <input
                type="text"
                placeholder="¿Qué estás buscando?"
                className="w-[100vh] p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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