import Button from "../../ui/Button";

const Publicity = ({ nextStep, prevStep, formData, handleChange }) => (
  <div className="w-full min-w-full space-y-4">
    <h2 className="text-xl font-semibold mb-6 text-center">Publicidad de la propiedad</h2>
    <form className="space-y-4">
      <div>
        <label className="block text-sm font-medium">¿Qué quieres mejorar de la propiedad?</label>
        <input
          type="text"
          name="mejora"
          value={formData.mejora}
          onChange={handleChange}
          className="w-full mt-1 p-2 border rounded-md"
          placeholder="Pintura, mantenimiento, etc."
        />
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

export default Publicity;
