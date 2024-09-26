import Button from "../../ui/Button";

const Atribute = ({ nextStep, formData, handleChange }) => (
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

      <Button type="button" onClick={nextStep} className="w-full bg-gray-800 text-white py-2 rounded-md mt-4">
        Siguiente paso
      </Button>
    </form>
  </div>
);

export default Atribute;
