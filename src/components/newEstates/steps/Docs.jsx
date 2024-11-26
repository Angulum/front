import React from "react";
import Button from "../../ui/Button";

const enableButton = (formData) => {
  return formData.descripcion;
};

const Docs = ({
  nextStep,
  prevStep,
  formData,
  handleImageUpload,
  handleDocumentUpload,
  handleChange,
  handleDragOver,
  handleDropImages,
  handleDropDocuments,
  removeImage,
}) => (
  <div className="w-full min-w-full space-y-4">
    <h2 className="text-xl font-semibold mb-6 text-center">
      Imágenes y descripción
    </h2>
    <form className="space-y-4">
      <div>
        <label className="block text-sm font-medium">Descripción</label>
        <textarea
          name="descripcion"
          value={formData.descripcion}
          onChange={(e) => handleChange(e)}
          className="w-full mt-1 p-2 border rounded-md"
          placeholder="Escribe una descripción de la propiedad..."
          rows={4}
        />
      </div>

      <div
        onDragOver={handleDragOver}
        onDrop={handleDropImages}
        className="border-dashed border-2 border-gray-300 rounded-md p-4 flex items-center justify-center flex-col text-center"
      >
        <p className="mb-2">Sube tus imágenes</p>
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

      <div className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {formData.images &&
          formData.images.map((image, index) => (
            <div key={index} className="relative">
              <img
                src={image}
                alt={`Preview ${index}`}
                className="w-full h-32 object-cover rounded-md"
              />
              <button
                type="button"
                onClick={() => removeImage(index)}
                className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full"
              >
                &times;
              </button>
            </div>
          ))}
      </div>

      <div className="flex justify-between">
        <Button onClick={prevStep}>Anterior</Button>
        <Button onClick={nextStep} disabled={!enableButton(formData)}>
          Siguiente
        </Button>
      </div>
    </form>
  </div>
);

export default Docs;
