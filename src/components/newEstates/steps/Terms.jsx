import Button from "../../ui/Button";

const Temes = ({ prevStep, handleSubmit, formData, handleTermsChange }) => (
  <div className="w-full min-w-full space-y-4">
    <h2 className="text-xl font-semibold mb-6 text-center">Aceptar términos y condiciones</h2>
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="flex items-center">
        <input
          type="checkbox"
          name="termsAccepted"
          checked={formData.termsAccepted}
          onChange={handleTermsChange}
          className="mr-2"
        />
        <label className="text-sm font-medium">Acepto los términos y condiciones</label>
      </div>

      <div className="flex justify-between mt-6">
        <Button type="button" onClick={prevStep} className="bg-gray-300 text-gray-700 py-2 rounded-md mr-2">
          Volver atrás
        </Button>
        <Button type="submit" className="bg-green-600 text-white py-2 px-3 rounded-md ml-2" disabled={!formData.termsAccepted}>
          Publicar
        </Button>
      </div>
    </form>
  </div>
);

export default Temes;
