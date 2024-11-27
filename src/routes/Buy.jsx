import { useState, useRef, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom"; // Importa useSearchParams
import Navbar from "../components/navbar/Navbar";
import CardGrid from "../components/estates/CardPublications/CardGrid";
import Footer from "../components/Footer";
import Searcher from "../components/estates/CardPublications/Searcher";
import { Spinner } from "@material-tailwind/react";
import CardGridLoading from "../components/estates/CardPublications/CardGridLoading";

const Buy = () => {
  const [loading, setLoading] = useState(false);
  const [properties, setProperties] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const [propertyType, setPropertyType] = useState("HOUSE");
  const [operation, setOperation] = useState("BUY");
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 5;
  const containerRef = useRef(null);

  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get("search") || "";

  const fetchProperties = async () => {
    setLoading(true);
    setProperties([]);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/real-estate/page?page=${
          currentPage - 1
        }&size=${itemsPerPage}&type=${propertyType}&contract=${operation}${
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
    } catch (error) {
      console.error("Error fetching properties:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const debounceFetch = setTimeout(() => {
      fetchProperties();
    }, 700);

    return () => clearTimeout(debounceFetch);
  }, [currentPage, propertyType, operation, search]);

  const handleSearchChange = (newSearch) => {
    setSearchParams({ search: newSearch });
    setCurrentPage(1);
  };

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
        <Searcher
          setSearch={handleSearchChange} // Actualiza la URL al cambiar la búsqueda
          setOperation={setOperation}
          setPropertyType={setPropertyType}
        />
        <div className="flex flex-col gap-4 relative bg-white min-h-[90vh]">
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
