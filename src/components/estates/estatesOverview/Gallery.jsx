import { useState } from "react";

const Gallery = () => {
  const data = [
    {
      imgelink:
        "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
      imgelink:
        "https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    },
    {
      imgelink:
        "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    },
    {
      imgelink:
        "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
    },
    {
      imgelink:
        "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // Funciones para cambiar las imágenes
  const nextImage = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="grid gap-4">
      <div className="relative">
        {/* Imagen principal */}
        <img
          className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px]"
          src={data[activeIndex].imgelink}
          alt="Imagen principal"
        />

        {/* Botón "Anterior" */}
        <button
          onClick={prevImage}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
        >
          &#8249;
        </button>

        {/* Botón "Siguiente" */}
        <button
          onClick={nextImage}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
        >
          &#8250;
        </button>
      </div>

      {/* Contenedor de miniaturas */}
      <div className="flex justify-center space-x-2">
        {data.map(({ imgelink }, index) => (
          <img
            key={index}
            onClick={() => setActiveIndex(index)}
            src={imgelink}
            className={`h-16 w-16 cursor-pointer rounded-lg object-cover object-center transition-transform duration-300 hover:scale-110 ${
              activeIndex === index ? "ring-2 ring-blue-500" : ""
            }`}
            alt={`Miniatura ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
