import Button from "../../ui/Button";

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
}) => (
  <div className="w-full min-w-full space-y-4">
    <h2 className="text-xl font-semibold mb-6 text-center">Imágenes y descripción</h2>
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

      <div className="grid grid-cols-2 gap-4">
        <div onDragOver={handleDragOver} onDrop={handleDropImages} className="border-dashed border-2 border-gray-300 rounded-md p-4 flex items-center justify-center flex-col text-center">
          <p className="mb-2">Sube tus imágenes</p>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
            id="imageUpload"
          />
          <label htmlFor="imageUpload" className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-md cursor-pointer">
            Seleccionar imágenes
          </label>
        </div>

        <div onDragOver={handleDragOver} onDrop={handleDropDocuments} className="border-dashed border-2 border-gray-300 rounded-md p-4 flex items-center justify-center flex-col text-center">
          <p className="mb-2">Sube tus documentos</p>
          <input
            type="file"
            multiple
            accept=".pdf,.doc,.docx"
            onChange={handleDocumentUpload}
            className="hidden"
            id="documentUpload"
          />
          <label htmlFor="documentUpload" className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-md cursor-pointer">
            Seleccionar documentos
          </label>
        </div>
      </div>

      <div className="flex justify-between mt-6">
        <Button type="button" onClick={prevStep} className="bg-gray-300 text-gray-700 py-2 rounded-md mr-2">
          Volver atrás
        </Button>
        <Button type="button" onClick={nextStep} className="bg-gray-800 text-white py-2 rounded-md ml-2">
          Siguiente paso
        </Button>
      </div>
    </form>
  </div>
);

export default Docs;
