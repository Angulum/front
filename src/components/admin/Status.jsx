import { Spinner } from "@material-tailwind/react";
import { useEffect, useState } from "react";

const Status = () => {
  const [loading, setLoading] = useState(false);

  const [statuses, setStatuses] = useState({
    web: { status: false, lastUpdate: new Date() },
    api: { status: false, lastUpdate: new Date() },
    db: { status: false, lastUpdate: new Date() },
  });

  const checkStatus = async (url, key) => {
    try {
      const response = await fetch(url);
      console.log(url, key, response.ok, response.status, response);
      setStatuses((prevStatuses) => ({
        ...prevStatuses,
        [key]: {
          status: response.ok || response.status === 403,
          lastUpdate: new Date(),
        },
      }));
    } catch (error) {
      setStatuses((prevStatuses) => ({
        ...prevStatuses,
        [key]: {
          status: false,
          lastUpdate: new Date(),
        },
      }));
    }
  };

  useEffect(() => {
    const urls = {
      web: import.meta.env.VITE_FRONTEND_URL,
      api: import.meta.env.VITE_BACKEND_URL,
      db: import.meta.env.VITE_DATABASE_URL,
    };

    const checkAllStatuses = async () => {
      setLoading(true);

      await Promise.all([
        checkStatus(urls.web, "web"),
        checkStatus(urls.api, "api"),
        checkStatus(urls.db, "db"),
      ]);
      setLoading(false);
    };

    checkAllStatuses();
  }, []);

  return (
    <div className="container mx-auto max-w-4xl mt-12">
      <h2 className="font-bold text-2xl">Estado del aplicativo</h2>
      <p className="mt-2 text-[#575757]">
        Observa en tiempo real si hay algún problema activo.
      </p>
      <div className="mt-8">
        {loading ? (
          <div className="w-full flex justify-center items-center">
            <Spinner color="blue" size="large" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <StatusCard
              title="Servicio web"
              url={import.meta.env.VITE_FRONTEND_URL}
              status={statuses.web.status}
              lastUpdate={statuses.web.lastUpdate.toLocaleTimeString()}
            />
            <StatusCard
              title="API"
              url={import.meta.env.VITE_BACKEND_URL}
              status={statuses.api.status}
              lastUpdate={statuses.api.lastUpdate.toLocaleTimeString()}
            />
            <StatusCard
              title="Base de datos"
              url={import.meta.env.VITE_DATABASE_URL}
              status={statuses.db.status}
              lastUpdate={statuses.db.lastUpdate.toLocaleTimeString()}
            />
          </div>
        )}
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
            status ? "bg-green-500 text-white" : "bg-red-500 text-white"
          }`}
        >
          {status ? "Activo" : "Inactivo"}
        </span>
        <p className="text-sm text-gray-500">
          Ultima actualización: {lastUpdate}
        </p>
      </div>
    </div>
  );
};

export default Status;
