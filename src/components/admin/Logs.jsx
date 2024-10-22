import { useEffect, useState } from "react";
import Skeleton from "../ui/Skeleton";

const Logs = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [size] = useState(5);
  const [totalPages, setTotalPages] = useState(0);

  const fetchLogs = async (page) => {
    setLoading(true);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/logs?page=${page}&size=${size}`
      );
      if (!response.ok) {
        throw new Error("Error al obtener los logs");
      }

      const data = await response.json();
      setLogs(data.content);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.error("Error fetching logs:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLogs(page);
  }, [page]);

  const handleNextPage = () => {
    if (page < totalPages - 1) {
      setPage(page + 1);
    }
  };

  const handlePreviousPage = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  return (
    <div className="flex p-12 mx-auto max-w-3xl flex-col">
      <h2 className="font-bold text-2xl">Logs</h2>
      <p className="mt-2 text-[#575757]">
        Revisa los logs de las acciones realizadas en la plataforma
      </p>

      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md mt-8">
        <thead>
          <tr className="bg-gray-100 border-b">
            <th className="py-2 px-4 text-left">Fecha</th>
            <th className="py-2 px-4 text-left">Acción</th>
            <th className="py-2 px-4 text-left">Mensaje</th>
          </tr>
        </thead>
        {loading ? (
          Array.of(1, 2, 3, 4, 5).map((_, index) => (
            <tr key={index} className="border-b">
              <td className="py-2 px-4">
                <Skeleton className="w-full h-4" />
              </td>
              <td className="py-2 px-4">
                <Skeleton className="w-full h-4" />
              </td>
              <td className="py-2 px-4">
                <Skeleton className="w-full h-4" />
              </td>
            </tr>
          ))
        ) : (
          <tbody>
            {logs.map((log, index) => (
              <tr key={index} className="border-b">
                <td className="py-2 px-4">
                  {new Date(log.timestamp).toLocaleString()}
                </td>
                <td className="py-2 px-4">{log.action}</td>
                <td className="py-2 px-4">{log.details}</td>
              </tr>
            ))}
          </tbody>
        )}
      </table>

      <div className="flex justify-between items-center mt-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
          onClick={handlePreviousPage}
          disabled={page === 0}
        >
          Anterior
        </button>
        <span>
          Página {page + 1} de {totalPages}
        </span>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
          onClick={handleNextPage}
          disabled={page >= totalPages - 1}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default Logs;
