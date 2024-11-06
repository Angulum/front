import Button from "../../ui/Button";

const Atribute = ({ nextStep, formData, handleChange }) => (
  <div className="w-full min-w-full space-y-4">
    <h2 className="text-xl font-semibold mb-6 text-center">Detalles de la Propiedad</h2>
    <form className="space-y-4">
      <div>
        <label className="block text-sm font-medium">Título</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full mt-1 p-2 border rounded-md"
          placeholder="Departamento 2 dormitorios"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium">Ubicación</label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          className="w-full mt-1 p-2 border rounded-md"
          placeholder="España 221"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">Precio</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded-md"
            placeholder="100000"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Expensas</label>
          <input
            type="number"
            name="expenses"
            value={formData.expenses}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded-md"
            placeholder="5000"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium">Tipo de Propiedad</label>
        <select
          name="type"
          value={formData.type}
          onChange={handleChange}
          className="w-full mt-1 p-2 border rounded-md bg-white"
        >
          <option value="" disabled>Selecciona una opción</option>
          <option value="APARTMENT">Departamento</option>
          <option value="HOUSE">Casa</option>
        </select>
      </div>

      <div>
      <label className="block text-sm font-medium">Tipo de Contrato</label>
        <select
          type="text"
          name="contract"
          value={formData.contract}
          onChange={handleChange}
          className="w-full mt-1 p-2 border rounded-md"
          placeholder="Ej. alquiler, venta"
        >
          <option value="" disabled>Selecciona una opción</option>
          <option value="SALE">Venta</option>
          <option value="RENT">Alquiler</option>
        </select>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">Ambientes</label>
          <input
            type="number"
            name="ambients"
            value={formData.ambients}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded-md"
            placeholder="Ej. 3"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Habitaciones</label>
          <input
            type="number"
            name="rooms"
            value={formData.rooms}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded-md"
            placeholder="Ej. 2"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">Baños</label>
          <input
            type="number"
            name="bathrooms"
            value={formData.bathrooms}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded-md"
            placeholder="Ej. 1"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Metros cuadrados</label>
          <input
            type="number"
            name="squareFeet"
            value={formData.squareFeet}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded-md"
            placeholder="Ej. 60"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">Estacionamiento</label>
          <input
            type="number"
            name="parking"
            value={formData.parking}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded-md"
            placeholder="Ej. 1"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Antigüedad</label>
          <input
            type="number"
            step="0.1"
            name="antiquity"
            value={formData.antiquity}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded-md"
            placeholder="Ej. 5.5"
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
