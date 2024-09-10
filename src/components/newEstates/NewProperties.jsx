import { useState } from "react";
import Button from "../ui/Button";

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
    termsAccepted: false
  });

  // Manejar el cambio en los campos de los formularios
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setFormData((prev) => ({
      ...prev,
      imagenes: [...prev.imagenes, ...files]
    }));
  };

  const handleDocumentUpload = (e) => {
    const files = Array.from(e.target.files);
    setFormData((prev) => ({
      ...prev,
      documentos: [...prev.documentos, ...files]
    }));
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

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

  // Controlar los pasos
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
        <div
          className={`flex transition-transform duration-800 ease-in-out`}
          style={{ transform: `translateX(-${(step - 1) * 1}%)` }}
        >
          {/* Formulario de Detalles de la Propiedad */}
          {step === 1 && (
            <div className="w-full min-w-full space-y-4">
              <h2 className="text-xl font-semibold mb-6 text-center">Detalles de la Propiedad</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium">Calle</label>
                  <input
                    type="text"
                    name="calle"
                    value={formData.calle}
                    onChange={handleChange}
                    className="w-full mt-1 p-2 border rounded-md"
                    placeholder="España 221"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium">Provincia</label>
                    <input
                      type="text"
                      name="provincia"
                      value={formData.provincia}
                      onChange={handleChange}
                      className="w-full mt-1 p-2 border rounded-md"
                      placeholder="Santa Fe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium">Código postal</label>
                    <input
                      type="text"
                      name="codigoPostal"
                      value={formData.codigoPostal}
                      onChange={handleChange}
                      className="w-full mt-1 p-2 border rounded-md"
                      placeholder="2000"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium">Precio mensual</label>
                    <input
                      type="text"
                      name="precioMensual"
                      value={formData.precioMensual}
                      onChange={handleChange}
                      className="w-full mt-1 p-2 border rounded-md"
                      placeholder="200.000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium">Expensas</label>
                    <input
                      type="text"
                      name="expensas"
                      value={formData.expensas}
                      onChange={handleChange}
                      className="w-full mt-1 p-2 border rounded-md"
                      placeholder="100.000"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium">Tipo de propiedad</label>
                    <select
                      name="tipoPropiedad"
                      value={formData.tipoPropiedad}
                      onChange={handleChange}
                      className="w-full mt-1 p-2 border rounded-md"
                    >
                      <option value="">Tipo propiedad</option>
                      <option value="departamento">Departamento</option>
                      <option value="casa">Casa</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium">Baños</label>
                    <input
                      type="number"
                      name="banos"
                      value={formData.banos}
                      onChange={handleChange}
                      className="w-full mt-1 p-2 border rounded-md"
                      placeholder="2"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium">Habitaciones</label>
                    <input
                      type="number"
                      name="habitaciones"
                      value={formData.habitaciones}
                      onChange={handleChange}
                      className="w-full mt-1 p-2 border rounded-md"
                      placeholder="5"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium">Ambientes</label>
                    <input
                      type="number"
                      name="ambientes"
                      value={formData.ambientes}
                      onChange={handleChange}
                      className="w-full mt-1 p-2 border rounded-md"
                      placeholder="5"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium">Metros cúbicos</label>
                    <input
                      type="text"
                      name="metrosCubicos"
                      value={formData.metrosCubicos}
                      onChange={handleChange}
                      className="w-full mt-1 p-2 border rounded-md"
                      placeholder="300"
                    />
                  </div>
                </div>

                <Button
                  type="button"
                  onClick={nextStep}
                  className="w-full bg-gray-800 text-white py-2 rounded-md mt-4"
                >
                  Siguiente paso
                </Button>
              </form>
            </div>
          )}

          {/* Formulario de Imágenes y Descripción */}
          {step === 2 && (
            <div className="w-full ml-2 min-w-full space-y-4">
              <h2 className="text-xl font-semibold mb-6 text-center">Imágenes y descripción</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium">Descripción</label>
                  <textarea
                    name="descripcion"
                    value={formData.descripcion}
                    onChange={handleChange}
                    className="w-full mt-1 p-2 border rounded-md"
                    placeholder="Escribe una descripción de la propiedad..."
                    rows={4}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div
                    onDragOver={handleDragOver}
                    onDrop={handleDropImages}
                    className="border-dashed border-2 border-gray-300 rounded-md p-4 flex items-center justify-center flex-col text-center"
                  >
                    <p className="mb-2">Sube tus imágenes</p>
                    <p className="text-sm text-gray-500">Arrastra y suelta imágenes aquí</p>
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                      id="imageUpload"
                    />
                    <label
                      htmlFor="imageUpload"
                      className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-md cursor-pointer"
                    >
                      Seleccionar imágenes
                    </label>
                  </div>

                  <div
                    onDragOver={handleDragOver}
                    onDrop={handleDropDocuments}
                    className="border-dashed border-2 border-gray-300 rounded-md p-4 flex items-center justify-center flex-col text-center"
                  >
                    <p className="mb-2">Sube tus documentos</p>
                    <p className="text-sm text-gray-500">Arrastra y suelta documentos aquí</p>
                    <input
                      type="file"
                      multiple
                      accept=".pdf,.doc,.docx"
                      onChange={handleDocumentUpload}
                      className="hidden"
                      id="documentUpload"
                    />
                    <label
                      htmlFor="documentUpload"
                      className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-md cursor-pointer"
                    >
                      Seleccionar documentos
                    </label>
                  </div>
                </div>

                <Button
                  type="button"
                  onClick={nextStep}
                  className="w-full bg-gray-800 text-white py-2 rounded-md mt-4"
                >
                  Siguiente paso
                </Button>
              </form>
            </div>
          )}

          {/* Mejoras de la Publicación */}
          {step === 3 && (
            <div className="w-full ml-2 min-w-full space-y-4">
              <h2 className="text-xl font-semibold mb-6 text-center">Mejoras de la Publicación</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium">¿Quieres destacar tu publicación?</label>
                  <select
                    name="mejora"
                    value={formData.mejora || ""}
                    onChange={handleChange}
                    className="w-full mt-1 p-2 border rounded-md"
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="destacar">Destacar publicación</option>
                    <option value="noDestacar">No destacar</option>
                  </select>
                </div>

                <Button
                  type="button"
                  onClick={nextStep}
                  className="w-full bg-gray-800 text-white py-2 rounded-md mt-4"
                >
                  Siguiente paso
                </Button>
              </form>
            </div>
          )}

          {/* Aceptación de Términos y Condiciones */}
          {step === 4 && (
            <div className="w-full ml-2 min-w-full space-y-4">
              <h2 className="text-xl font-semibold mb-6 text-center">Términos y Condiciones</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium">
                    <input
                      type="checkbox"
                      name="termsAccepted"
                      checked={formData.termsAccepted}
                      onChange={handleTermsChange}
                      className="mr-2"
                    />
                    Acepto los términos y condiciones
                  </label>
                </div>

                <div className="flex justify-between mt-6">
                  <Button
                    type="button"
                    onClick={prevStep}
                    className="w-full bg-gray-300 text-gray-700 py-2 rounded-md mr-2"
                  >
                    Volver atrás
                  </Button>
                  <Button
                    type="submit"
                    className="w-full bg-gray-800 text-white py-2 rounded-md ml-2"
                  >
                    Enviar
                  </Button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewProperties;
