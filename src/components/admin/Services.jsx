import { useState, useEffect } from "react";
import { Spinner, Switch } from "@material-tailwind/react";

const Services = () => {
  const [register, setRegister] = useState(false);
  const [front, setFront] = useState(false);
  const [logs, setLogs] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchServiceStatus = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          import.meta.env.VITE_BACKEND_URL + "/services"
        );
        if (response.ok) {
          const data = await response.json();
          setRegister(data.register);
          setFront(data.front);
          setLogs(data.logs);
        } else {
          throw new Error(
            "Hubo un problema obteniendo el estado de los servicios"
          );
        }
      } catch (error) {
        console.error("Error obteniendo el estado de los servicios:", error);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };

    fetchServiceStatus();
  }, []);

  const handleSwitchChange = async (service, value) => {
    switch (service) {
      case "register":
        setRegister(value);
        break;
      case "front":
        setFront(value);
        break;
      case "logs":
        setLogs(value);
        break;
      default:
        break;
    }

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/services`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            register: service === "register" ? value : register,
            front: service === "front" ? value : front,
            logs: service === "logs" ? value : logs,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Hubo un problema actualizando el servicio");
      }
    } catch (error) {
      console.error("Error actualizando el servicio:", error);
    }
  };

  return (
    <div className="flex mx-auto mt-12 max-w-3xl flex-col">
      <h2 className="font-bold text-2xl">Servicios</h2>
      <p className="mt-2 text-[#575757]">
        Podrás manejar el funcionamiento completo de los componentes agregados
      </p>

      {loading ? (
        <div className="w-full flex justify-center items-center mt-5">
          <Spinner color="blue" size="large" />
        </div>
      ) : (
        <div className="w-full border border-black/10 rounded-lg p-8 mt-8">
          <div className="flex justify-between w-full items-center mb-4">
            <p>
              Página principal{" "}
              <span className="bg-red-500 text-white rounded-full px-2 py-1 text-xs">
                ¡Cuidado!
              </span>
            </p>
            <Switch
              color="blue"
              checked={front}
              onChange={(e) => handleSwitchChange("front", e.target.checked)}
            />
          </div>

          <div className="flex justify-between w-full items-center mb-4">
            <p>Registro de usuarios</p>
            <Switch
              color="blue"
              checked={register}
              onChange={(e) => handleSwitchChange("register", e.target.checked)}
            />
          </div>

          <div className="flex justify-between w-full items-center mb-4">
            <p>Logs</p>
            <Switch
              color="blue"
              checked={logs}
              onChange={(e) => handleSwitchChange("logs", e.target.checked)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
