import { useState } from "react";
import Atribute from "./steps/Atribute";
import Docs from "./steps/Docs";
import Temes from "./steps/Terms";
import { useUser } from "../../lib/context/useUser";

const NewProperties = () => {

  const { token } = useUser();
  const [step, setStep] = useState(1); 
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    price: '',
    expenses: '',
    tags: [],
    type: '',
    contract: '',
    description: '',
    ambients: '',
    rooms: '',
    bathrooms: '',
    squareFeet: '',
    parking: '',
    antiquity: '',
    ownerId: 1,
  });
  

  // Función para manejar los cambios en el formulario
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Subir imágenes
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setFormData((prev) => ({
      ...prev,
      imagenes: [...prev.imagenes, ...files]
    }));
  };

  // Subir documentos
  const handleDocumentUpload = (e) => {
    const files = Array.from(e.target.files);
    setFormData((prev) => ({
      ...prev,
      documentos: [...prev.documentos, ...files]
    }));
  };

  // Funciones de drag & drop para imágenes y documentos
  const handleDragOver = (e) => e.preventDefault();
  const handleDropImages = (e) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    setFormData((prev) => ({
      ...prev,
      imagenes: [...prev.imagenes, ...files]
    }));
  };
  const handleDropDocuments = (e) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    setFormData((prev) => ({
      ...prev,
      documentos: [...prev.documentos, ...files]
    }));
  };

  // Navegación entre pasos
  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      console.log("Creando propiedad:", formData);
    const response = await fetch("http://localhost:8080/real-estate/create",{
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: {
        ...formData,
      }
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
