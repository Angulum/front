import { useEffect, useState } from "react";
import { useUser } from "../../../lib/context/useUser";
import { Link } from "react-router-dom";
import Modal from "../../ui/Modal";
import { useBlockUI } from "../../../lib/context/useBlockUI";
import { useLanguage } from "../../../lib/context/useLang";
import { translations } from "../../../lib/translations";

const PropertyItem = ({ id, location, type, price, handleDelete }) => {
  const { language } = useLanguage();
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  return (
    <>
      {openDeleteModal && (
        <Modal>
          <div className="p-2 bg-white rounded-lg">
            <h2 className="text-lg font-bold mb-4">
              {translations[language].deleteRE}
            </h2>
            <p>{translations[language].deleteREQ}</p>
            <div className="flex justify-end mt-4 gap-2">
              <button
                className="px-4 py-2 text-white bg-red-500 rounded-lg"
                onClick={handleDelete}
              >
                {translations[language].delete}
              </button>
              <button
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
                onClick={() => setOpenDeleteModal(false)}
              >
                {translations[language].cancel}
              </button>
            </div>
          </div>
        </Modal>
      )}
      <div className="flex justify-between items-center bg-white p-4 border border-black/10 rounded-lg my-4">
        <Link
          to={`/buy/${id}`}
          className="flex flex-1 justify-between items-center"
        >
          <div className="flex flex-col">
            <span className="text-gray-700 text-lg">{location}</span>
            <span className="text-gray-500 text-sm">{type}</span>
          </div>
          <div className="text-gray-700 text-lg">$ {price} ARS</div>
        </Link>
        <div className="flex space-x-4">
          <button
            className="text-gray-600 hover:text-gray-800"
            onClick={() => setOpenDeleteModal(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

const PropertyList = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { user } = useUser();
  const { blockUI, unblockUI } = useBlockUI();
  const { language } = useLanguage();

  useEffect(() => {
    fetch(import.meta.env.VITE_BACKEND_URL + "/real-estate/self", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setProperties(data))
      .finally(() => setLoading(false))
      .catch(() => {
        setError("Ocurrió un error al cargar las propiedades");
      });
  }, [user]);

  if (loading) {
    return <p>{translations[language].loadingRE}</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (properties.length === 0) {
    return <p>{translations[language].noRE}</p>;
  }

  const handleDelete = (id) => {
    blockUI("Eliminando propiedad...");
    fetch(import.meta.env.VITE_BACKEND_URL + `/real-estate/delete/id/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    })
      .then((res) => {
        if (res.ok) {
          setProperties((prev) => prev.filter((p) => p.id !== id));
        }
      })
      .catch((error) => {
        console.error("Error deleting property:", error);
        setError("Ocurrió un error al eliminar la propiedad");
        unblockUI();
      })
      .finally(() => unblockUI());
  };

  return (
    <div className="border border-black/10 rounded-lg p-4">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Buscar..."
          className="w-full px-4 py-2 border rounded-lg border-black/10"
        />
      </div>

      {properties.map((property) => (
        <PropertyItem
          key={property.id}
          {...property}
          handleDelete={() => handleDelete(property.id)}
        />
      ))}
    </div>
  );
};

export default PropertyList;
