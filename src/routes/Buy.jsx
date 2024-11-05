import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Importa useNavigate
import Navbar from "../components/navbar/Navbar";
import CardGrid from "../components/estates/CardPublications/CardGrid";
import Footer from "../components/Footer";
import Searcher from "../components/estates/CardPublications/Searcher";
import { Spinner } from "@material-tailwind/react";
import CardGridLoading from "../components/estates/CardPublications/CardGridLoading";

// Crear un array de 20 propiedades simuladas
const generateProperties = () => {
  return Array.from({ length: 20 }, (_, index) => ({
    id: index + 1, // Asegúrate de tener un id único
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
  const [loading, setLoading] = useState(true);
  const [properties, setProperties] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [orderBy, setOrderBy] = useState("id");
  const [ascending, setAscending] = useState(true);
  const [totalPages, setTotalPages] = useState(0);

  const itemsPerPage = 5;
  const containerRef = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    const fetchProperties = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/real-estate/page?page=${
            currentPage - 1
          }&size=${itemsPerPage}&sortBy=${orderBy}&ascending=${ascending}${
            search ? `&search=${search}` : ""
          }`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        setProperties(data.content);
        setTotalPages(data.totalPages);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching properties:", error);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, [ascending, currentPage, orderBy, search]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    if (containerRef.current) {
      window.scrollTo({
        top: containerRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const handleCardClick = (propertyId) => {
    navigate(`/sell/${propertyId}`);
  };

  return (
    <div className="relative">
      <Navbar />

      <div className="mt-20">
        <Searcher />
        <div className="flex flex-col gap-4 relative bg-white">
          {loading ? (
            <CardGridLoading />
          ) : (
            <>
              <div ref={containerRef}>
                <CardGrid cards={properties} onCardClick={handleCardClick} />
              </div>
              <div className="flex justify-center gap-2 mt-4">
                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    key={index + 1}
                    className={`px-4 py-2 rounded mb-8 ${
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
            </>
          )}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Buy;
