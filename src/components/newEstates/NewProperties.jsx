import { useState } from "react";
import Atribute from "./steps/Atribute";
import Docs from "./steps/Docs";
import Temes from "./steps/Terms";
import { useUser } from "../../lib/context/useUser";

const NewProperties = () => {
  const { token } = useUser();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    price: "",
    expenses: "",
    tags: [],
    type: "",
    contract: "",
    description: "",
    ambients: "",
    rooms: "",
    bathrooms: "",
    squareFeet: "",
    parking: "",
    antiquity: "",
    ownerId: 1,
    images: [],
  });

  // Función para manejar los cambios en el formulario
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Subir imágenes
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);

    files.map((file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const base64 = reader.result.split(",")[1];

        fetch(
          "https://api.imgbb.com/1/upload?key=" +
            import.meta.env.VITE_IMGBB_API_KEY,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              key: "c9c2c3b6f6c1f9d3e6f5b2e2b0c2f4a1",
              image: base64,
            }),
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log("Imagen subida:", data);
          });
      };
    });

    setFormData((prev) => ({
      ...prev,
      images: [...prev.images, ...files],
    }));

    console.log("Imagenes subidas:", formData.images);
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
      console.log("Creando propiedad:", formData);
      const response = await fetch("http://localhost:8080/real-estate/create", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: {
          ...formData,
        },
      });
      console.log("Propiedad creada:", response.data);
    } catch (error) {
      console.error("Error al crear la propiedad:", error);
    }
  };

  const handleTermsChange = (e) => {
    setFormData({
      ...formData,
      termsAccepted: e.target.checked,
    });
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
