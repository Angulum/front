import { useState } from "react";
import Atribute from "./steps/Atribute";
import Docs from "./steps/Docs";
import Publicity from "./steps/Publicity";
import Temes from "./steps/Terms";

const NewProperties = () => {
  const [step, setStep] = useState(1); // Estado para controlar el paso
  const [formData, setFormData] = useState({
    calle: '',
    provincia: '',
    codigoPostal: '',
    precioMensual: '',
    expensas: '',
    tipoPropiedad: '',
    banos: '',
    habitaciones: '',
    ambientes: '',
    metrosCubicos: '',
    descripcion: '',
    imagenes: [],
    documentos: [],
    termsAccepted: false,
    mejora: '',
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
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
          <Publicity
            nextStep={nextStep}
            prevStep={prevStep}
            formData={formData}
            handleChange={handleChange}
          />
        )}
        {step === 4 && (
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
