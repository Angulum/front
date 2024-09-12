import { useState } from "react";

export const AccountGeneral = () => {
  const [nombre, setNombre] = useState("Peter Jhonson");
  const [usuario, setUsuario] = useState("Peter221");
  const [tema, setTema] = useState("light");

  const handleGuardarCambios = () => {
    alert("Cambios guardados");
  };

  const handleEliminarCuenta = () => {
    alert("Cuenta eliminada");
  };

  return (
    <div>
      <h2 className=" font-semibold text-2xl">Configuración general</h2>

      {/* Sección de información */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
        {/* Tu información */}
        <div className="col-span-1 border border-black/10 p-4 rounded-xl">
          <h3 className="text-lg font-medium mb-4">Tu información</h3>
          <p className="text-gray-500 mb-4">
            Cualquier cambio en esta sección no modificará nada que no sea
            visual.
          </p>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">
              Nombre y apellido
            </label>
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">
              Nombre de usuario
            </label>
            <input
              type="text"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>
          <button
            onClick={handleGuardarCambios}
            className="bg-gray-800 text-white px-4 py-2 rounded-lg"
          >
            Guardar cambios
          </button>
        </div>

        {/* Tema */}
        <div className="col-span-1 border border-black/10 p-4 rounded-xl">
          <h3 className="text-lg font-medium mb-4">Tema</h3>
          <p className="text-gray-500 mb-4">
            Cambia el color del panel en su totalidad.
          </p>
          <div className="flex space-x-4">
            <button
              className={`p-4 border rounded-lg ${
                tema === "light" ? "border-gray-800" : "border-gray-300"
              }`}
              onClick={() => setTema("light")}
            >
              <img
                src="light_theme.png"
                alt="Light Theme"
                className="w-24 h-12 object-cover"
              />
              Light
            </button>
            <button
              className={`p-4 border rounded-lg ${
                tema === "dark" ? "border-gray-800" : "border-gray-300"
              }`}
              onClick={() => setTema("dark")}
            >
              <img
                src="dark_theme.png"
                alt="Dark Theme"
                className="w-24 h-12 object-cover"
              />
              Dark
            </button>
          </div>
        </div>

        {/* Borrar cuenta */}
        <div className="col-span-1 border border-red-500/40 p-4 rounded-xl">
          <h3 className="text-lg font-medium mb-4 text-red-600">
            Borrar cuenta
          </h3>
          <p className="text-gray-500 mb-4">
            Esta acción eliminará toda tu información, incluyendo las
            propiedades y estadísticas que tengas hasta ahora.
          </p>
          <button
            onClick={handleEliminarCuenta}
            className="bg-red-600 text-white px-4 py-2 rounded-lg"
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};
