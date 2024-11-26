import { useState } from "react";
import Atribute from "./steps/Atribute";
import Docs from "./steps/Docs";
import Temes from "./steps/Terms";
import { useUser } from "../../lib/context/useUser";
import { useBlockUI } from "../../lib/context/useBlockUI";
import { useNavigate } from "react-router-dom";

const NewProperties = () => {
  const navigate = useNavigate();
  const { blockUI, unblockUI } = useBlockUI();
  const { user, token } = useUser();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    ambients: "",
    antiquity: "",
    bathrooms: "",
    contact: "",
    contract: "",
    description: "",
    expenses: "",
    location: "",
    name: "",
    parking: "",
    price: "",
    rooms: "",
    squareFeet: "",
    type: "",
    tags: ["SALE"],
    clicks: 0,
    uniqueClicks: 0,
    contactClicks: 0,
    images: [
      // "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      // "https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    ],
    favoriteCount: 0,
    ownerId: user.id,
  });

  // Función para manejar los cambios en el formulario
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);

    files.forEach((file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = async () => {
        const base64 = reader.result.split(",")[1];

        // Convertir base64 a Blob
        const response = await fetch(`data:image/png;base64,${base64}`);
        const blob = await response.blob();

        // Crear FormData y agregar el archivo
        const formData = new FormData();
        formData.append("image", blob, file.name);

        blockUI("Subiendo imagenes...");

        // Realizar la solicitud de subida
        fetch(import.meta.env.VITE_BACKEND_URL + "/real-estate/upload-image", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        })
          .then((res) => {
            if (!res.ok) throw new Error("Error al subir la imagen");
            return res.json();
          })
          .then((data) => {
            setFormData((prev) => ({
              ...prev,
              images: [...prev.images, data.url],
            }));
          })
          .catch((err) => {
            console.error("Error al subir la imagen:", err);
          })
          .finally(() => {
            unblockUI();
          });
      };
    });
  };

  // Subir documentos
  const handleDocumentUpload = (e) => {
    const files = Array.from(e.target.files);
    setFormData((prev) => ({
      ...prev,
      documentos: [...prev.documentos, ...files],
    }));
  };

  // Funciones de drag & drop para imágenes y documentos
  const handleDragOver = (e) => e.preventDefault();
  const handleDropImages = (e) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    setFormData((prev) => ({
      ...prev,
      imagenes: [...prev.imagenes, ...files],
    }));
  };
  const handleDropDocuments = (e) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    setFormData((prev) => ({
      ...prev,
      documentos: [...prev.documentos, ...files],
    }));
  };

  // Navegación entre pasos
  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      blockUI("Creando propiedad...");
      const response = await fetch(
        import.meta.env.VITE_BACKEND_URL + "/real-estate/create",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        const data = await response.json();
        navigate(`/buy/${data.id}`);
        console.log("Propiedad creada:", data);
      } else if (response.status === 403) {
        console.error(
          "Error 403: Forbidden. Verifica el token o permisos de autenticación."
        );
      } else {
        console.error("Error al crear la propiedad:", response.status);
        const errorData = await response.text();
        console.error("Detalles del error:", errorData);
      }
    } catch (error) {
      console.error("Error al crear la propiedad:", error);
    }
    unblockUI();
  };

  const handleTermsChange = (e) => {
    setFormData({
      ...formData,
      termsAccepted: e.target.checked,
    });
  };

  const removeImage = (index) => {
    setFormData((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-3xl relative overflow-hidden">
        {step === 1 && (
          <Atribute
            nextStep={nextStep}
            formData={formData}
            handleChange={handleChange}
          />
        )}
        {step === 2 && (
          <Docs
            nextStep={nextStep}
            prevStep={prevStep}
            formData={formData}
            handleChange={handleChange}
            handleImageUpload={handleImageUpload}
            handleDocumentUpload={handleDocumentUpload}
            handleDragOver={handleDragOver}
            handleDropImages={handleDropImages}
            handleDropDocuments={handleDropDocuments}
            removeImage={removeImage}
          />
        )}
        {step === 3 && (
          <Temes
            prevStep={prevStep}
            handleSubmit={handleSubmit}
            formData={formData}
            handleTermsChange={handleTermsChange}
          />
        )}
      </div>
    </div>
  );
};

export default NewProperties;
