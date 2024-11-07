import { useState } from "react";
import { Sun, Moon } from "lucide-react";
import { useUser } from "../../lib/context/useUser";
import { useTheme } from "../../lib/context/useTheme";
import { useLanguage } from "../../lib/context/useLang";
import { translations } from "../../lib/translations";
import Modal from "../ui/Modal";

export const AccountGeneral = () => {
  const [nombre, setNombre] = useState("Peter Jhonson");
  const [usuario, setUsuario] = useState("Peter221");
  const [eliminarCuenta, setEliminarCuenta] = useState(false);

  const { user, token } = useUser();
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();

  const deleteUser = async () => {
    if (token && user?.id) {
      // Verifica token y user.id
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/user/id/${user.id}`, // Asegúrate de que VITE_BACKEND_URL esté configurado
          {
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.ok) {
          alert("Cuenta eliminada");
        } else {
          const errorMessage = await response.text();
          alert(`Error al eliminar la cuenta: ${errorMessage}`);
        }
      } catch (error) {
        console.error("Error eliminando la cuenta:", error);
      }
    } else {
      alert("No se pudo verificar la autenticación del usuario.");
    }
  };

  const handleGuardarCambios = () => {
    alert("Cambios guardados");
  };

  const handleOpenModal = () => {
    setEliminarCuenta(true);
  };

  const handleCloseModal = () => {
    setEliminarCuenta(false);
  };

  return (
    <div>
      <h2 className="font-semibold text-2xl pepe-argento">
        {translations[language].configGeneral}
      </h2>

      {/* Sección de información */}
      <div className="grid grid-cols-1 w-fit gap-8 py-8">
        {/* Tema
        <div className="col-span-1 border border-black/10 p-4 rounded-xl">
          <h3 className="text-lg font-medium mb-4">
            {translations[language].theme}
          </h3>
          <p className="text-gray-500 mb-4">
            {translations[language].themeDescription}
          </p>
          <div className="flex space-x-4">
            <button
              className={`p-4 border rounded-lg ${theme === "light"
                ? "border-gray-800 font-bold bg-gray-100"
                : "border-gray-300"
                }`}
              onClick={() => toggleTheme()}
            >
              <Sun
                className={`w-24 h-12 object-cover ${theme === "light" ? "fill-gray-900" : "fill-white"
                  }`}
              />
              {translations[language].light}
            </button>
            <button
              className={`p-4 border rounded-lg ${theme === "dark"
                ? "border-gray-800 font-bold bg-gray-100"
                : "border-gray-300"
                }`}
              onClick={() => toggleTheme()}
            >
              <Moon
                className={`w-24 h-12 object-cover ${theme === "dark" ? "fill-gray-900" : "fill-white"
                  }`}
              />
              {translations[language].dark}
            </button>
          </div>
        </div> */}

        {/* Idioma */}
        <div className="col-span-1 border border-black/10 p-4 rounded-xl mt-4">
          <h3 className="text-lg font-medium mb-4">
            {translations[language].idioma}
          </h3>
          <p className="text-gray-500 mb-4">
            {translations[language].idiomaDesc}
          </p>
          <div className="flex space-x-4">
            <button
              className={`p-4 border rounded-lg ${
                language === "es"
                  ? "border-gray-800 font-bold bg-gray-100"
                  : "border-gray-300"
              }`}
              onClick={() => toggleLanguage("es")}
            >
              Español
            </button>
            <button
              className={`p-4 border rounded-lg ${
                language === "en"
                  ? "border-gray-800 font-bold bg-gray-100"
                  : "border-gray-300"
              }`}
              onClick={() => toggleLanguage("en")}
            >
              English
            </button>
          </div>
        </div>

        {/* Borrar cuenta */}
        <div className="col-span-1 border border-red-500/40 p-4 rounded-xl">
          {eliminarCuenta && (
            <Modal>
              <div>
                <div className="flex items-center justify-between py-4 md:p-5 border-b border-gray-800 rounded-t">
                  <h3 className="text-xl font-semibold">
                    {translations[language].deleteAccount}
                  </h3>
                  <button
                    type="button"
                    onClick={handleCloseModal}
                    className="text-gray-400 bg-transparent hover:bg-gray-800 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center"
                  >
                    <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span className="sr-only">
                      {translations[language].closeModal}
                    </span>
                  </button>
                </div>

                <div className="p-4 md:p-5 space-y-4">
                  <p className="text-base leading-relaxed">
                    {translations[language].deleteAccountConfirmText}
                  </p>
                </div>

                <div className="flex items-center p-4 md:p-5 border-t border-gray-800 rounded-b">
                  <button
                    onClick={() => {
                      handleCloseModal();
                      deleteUser();
                    }}
                    className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:focus:ring-red-800"
                  >
                    {translations[language].deleteAccount}
                  </button>
                  <button
                    onClick={handleCloseModal}
                    className="py-2.5 px-5 ms-3 text-sm font-medium text-white bg-gray-800 rounded-lg border border-gray-700 hover:bg-gray-700 hover:text-white"
                  >
                    {translations[language].cancel}
                  </button>
                </div>
              </div>
            </Modal>
          )}
          <h3 className="text-lg font-medium mb-4 text-red-600">
            {translations[language].deleteAccount}
          </h3>
          <p className="text-gray-500 mb-4">
            {translations[language].deleteDesc}
          </p>
          <button
            data-modal-target="popup-modal"
            data-modal-toggle="popup-modal"
            className="bg-red-600 text-white px-4 py-2 rounded-lg block hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
            onClick={handleOpenModal}
          >
            {translations[language].deleteButton}
          </button>
        </div>
      </div>
    </div>
  );
};
