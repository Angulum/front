

const Description = () => {
    return (
        <div className="border rounded-lg p-4 shadow-sm">
        <h2 className="text-xl font-semibold mb-2">Descripción</h2>
        <p className="text-gray-700 mb-4">
          Alquiler depto 3 amb Palermo Chico con balcón. Excelente departamento 3 ambientes amoblado en alquiler en Palermo Chico con balcón vista abierta.
        </p>
        <ul className="text-sm text-gray-600 space-y-1">
          <li><strong>Superficie total:</strong> 71.84 m²</li>
          <li><strong>Superficie cubierta:</strong> 63.11 m²</li>
          <li><strong>Superficie semicubierta:</strong> 2.48 m²</li>
          <li><strong>Ambientes:</strong> 3</li>
          <li><strong>Baños:</strong> 1</li>
          <li><strong>Cocheras:</strong> 1</li>
          <li><strong>Expensas:</strong> ARS 160.000</li>
        </ul>
      </div>
    );
};


export default Description;