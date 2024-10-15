const Status = () => {
  return (
    <div className="container mx-auto max-w-4xl mt-12">
      <h2 className="font-bold text-2xl">Estado del aplicativo</h2>
      <p className="mt-2 text-[#575757]">
        Observa en tiempo real si hay algún problema activo.{" "}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <StatusCard
          title="Servicio web"
          url="www.angulum.online"
          status="Activo"
          lastUpdate="12:00 PM"
        />
        <StatusCard
          title="API"
          url="api.angulum.online"
          status="Activo"
          lastUpdate="12:00 PM"
        />
        <StatusCard
          title="Base de datos"
          url="db.angulum.online"
          status="Activo"
          lastUpdate="12:00 PM"
        />
        <StatusCard
          title="Background Workers"
          url="workers.angulum.online"
          status="Activo"
          lastUpdate="12:00 PM"
        />
      </div>
    </div>
  );
};

const StatusCard = ({ title, url, status, lastUpdate }) => {
  return (
    <div className="w-full border border-black/10 rounded-lg p-6 shadow-lg">
      <h3 className="font-bold text-lg">{title}</h3>
      <p className="text-sm text-gray-600">{url}</p>

      <div className="flex justify-between items-center gap-8 mt-5">
        <span
          className={`rounded-full px-3 py-1 text-xs ${
            status === "Activo"
              ? "bg-green-500 text-white"
              : "bg-red-500 text-white"
          }`}
        >
          {status}
        </span>
        <p className="text-sm text-gray-500">Last update: {lastUpdate}</p>
      </div>
    </div>
  );
};

export default Status;
