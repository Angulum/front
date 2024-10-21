

const Contact = () => {
    return (
        <div className="border rounded-lg p-4 shadow-sm">
          <h3 className="text-lg font-bold mb-2">Contacto</h3>
          <div className="flex items-center mb-4">
            <img
              src="https://via.placeholder.com/40"
              alt="Agente"
              className="rounded-full mr-3"
            />
            <div>
              <p className="font-semibold">Johnson Perez</p>
              <p className="text-sm text-gray-500">RE/MAX Premium</p>
            </div>
          </div>
          <p className="text-sm mb-4">341 319 2475</p>
          <p className="text-sm mb-4">jonesperez@gmail.com</p>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Nombre y apellido"
              className="w-full border rounded-lg p-2"
            />
            <input
              type="text"
              placeholder="Teléfono"
              className="w-full border rounded-lg p-2"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border rounded-lg p-2"
            />
            <textarea
              placeholder="Mensaje"
              className="w-full border rounded-lg p-2"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-gray-800 text-white rounded-lg p-2"
            >
              Enviar
            </button>
          </form>
        </div>
      );
    };
    
    export default Contact;