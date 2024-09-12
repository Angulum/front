const PropertyItem = () => {
  return (
    <div className="flex justify-between items-center bg-white p-4 border border-black/10 rounded-lg my-4">
      <div className="flex flex-col">
        <span className="text-gray-700 text-lg">España 221</span>
        <span className="text-gray-500 text-sm">Departamento</span>
      </div>
      <div className="text-gray-700 text-lg">
        500.000 ARS + 25.000 ARS expensas
      </div>
      <div className="flex space-x-4">
        <button className="text-gray-600 hover:text-gray-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.862 2.487a2.25 2.25 0 113.18 3.18L7.443 18.265a4.5 4.5 0 01-1.62 1.05l-3.282 1.094 1.094-3.282a4.5 4.5 0 011.05-1.62L16.862 2.487z"
            />
          </svg>
        </button>
        <button className="text-gray-600 hover:text-gray-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

const PropertyList = () => {
  return (
    <div className="border border-black/10 rounded-lg p-4">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Buscar..."
          className="w-full px-4 py-2 border rounded-lg border-black/10"
        />
      </div>

      <PropertyItem />
    </div>
  );
};

export default PropertyList;
