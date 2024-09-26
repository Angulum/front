import { useState, useRef } from "react";

import Navbar from "../components/navbar/Navbar";
import CardGrid from "../components/estates/CardPublications/CardGrid";
import Footer from "../components/Footer";
import Searcher from "../components/estates/CardPublications/Searcher";

// Crear un array de 20 propiedades simuladas
const generateProperties = () => {
  return Array.from({ length: 20 }, (_, index) => ({
    title: `Casa ${index + 1}`,
    location: `Ubicación ${index + 1}`,
    rooms: Math.floor(Math.random() * 5) + 1,
    bathrooms: Math.floor(Math.random() * 3) + 1,
    size: `${Math.floor(Math.random() * 200) + 50} m²`,
    price: `$${(
      Math.floor(Math.random() * 500000) + 200000
    ).toLocaleString()} ARS / mensual`,
    description:
      "Descripción de la propiedad. Detalles adicionales pueden incluir tamaño, características especiales, etc.",
    image: "https://via.placeholder.com/226x180",
    sellerName: `Vendedor ${index + 1}`,
    sellerPhone: `341 319 24${index.toString().padStart(2, "0")}`,
    sellerEmail: `vendedor${index + 1}@gmail.com`,
    sellerImage: "https://via.placeholder.com/40",
  }));
};

const Buy = () => {
  const properties = generateProperties();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const containerRef = useRef(null);

  // Calcular las propiedades que se deben mostrar en la página actual
  const indexOfLastProperty = currentPage * itemsPerPage;
  const indexOfFirstProperty = indexOfLastProperty - itemsPerPage;
  const currentProperties = properties.slice(
    indexOfFirstProperty,
    indexOfLastProperty
  );

  const totalPages = Math.ceil(properties.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    if (containerRef.current) {
      window.scrollTo({
        top: containerRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative">
      <Navbar />
      <Searcher />
      <div className="flex flex-col gap-4 relative bg-[#F7F7F7]">
        {/* Contenedor con ref para el scroll */}
        <div ref={containerRef}>
          <CardGrid cards={currentProperties} />
        </div>
        {/* Paginación */}
        <div className="flex justify-center gap-2 mt-4">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              className={`px-4 py-2 rounded ${
                currentPage === index + 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-black"
              }`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Buy;
