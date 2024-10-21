import { useState } from "react";
import { Switch } from "@material-tailwind/react";

const Services = () => {
  const [mainPage, setMainPage] = useState(false);
  const [shoppingIntegration, setShoppingIntegration] = useState(false);
  const [dataScraping, setDataScraping] = useState(false);
  const [userRegistration, setUserRegistration] = useState(false);

  const handleSwitchChange = async (service, value) => {
    switch (service) {
      case "mainPage":
        setMainPage(value);
        break;
      case "shoppingIntegration":
        setShoppingIntegration(value);
        break;
      case "dataScraping":
        setDataScraping(value);
        break;
      case "userRegistration":
        setUserRegistration(value);
        break;
      default:
        break;
    }

    try {
      const response = await fetch("/api/service", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ service, value }),
      });

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
            checked={mainPage}
            onChange={(e) => handleSwitchChange("mainPage", e.target.checked)}
          />
        </div>

        <div className="flex justify-between w-full items-center mb-4">
          <p>Integración de compras</p>
          <Switch
            color="blue"
            checked={shoppingIntegration}
            onChange={(e) =>
              handleSwitchChange("shoppingIntegration", e.target.checked)
            }
          />
        </div>

        <div className="flex justify-between w-full items-center mb-4">
          <p>Scrapping de datos</p>
          <Switch
            color="blue"
            checked={dataScraping}
            onChange={(e) =>
              handleSwitchChange("dataScraping", e.target.checked)
            }
          />
        </div>

        <div className="flex justify-between w-full items-center mb-4">
          <p>Inicio y registro de usuarios</p>
          <Switch
            color="blue"
            checked={userRegistration}
            onChange={(e) =>
              handleSwitchChange("userRegistration", e.target.checked)
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
