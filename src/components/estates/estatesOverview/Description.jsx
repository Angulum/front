const Description = ({ estate }) => {
  return (
    <div className="border rounded-lg p-4 shadow-sm">
      <h2 className="text-xl font-semibold mb-2">Descripción</h2>
      <p className="text-gray-700 mb-4">{estate.description}</p>
      <ul className="text-sm text-gray-600 space-y-1">
        <li>
          <strong>Superficie total:</strong> {estate.squareFeet} m²
        </li>

        <li>
          <strong>Ambientes:</strong> {estate.ambients}
        </li>
        <li>
          <strong>Baños:</strong> {estate.bathrooms}
        </li>
        <li>
          <strong>Cocheras:</strong> {estate.parking}
        </li>
        <li>
          <strong>Expensas:</strong> ARS 160.000
        </li>
      </ul>
    </div>
  );
};

export default Description;
