import { useState } from "react";

const Gallery = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Funciones para cambiar las imágenes
  const nextImage = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="grid gap-4">
      <div className="relative">
        {images.length === 0 ? (
          <img
            className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px]"
            src="/image-not-found.png"
            alt="Imagen de relleno"
          />
        ) : (
          <img
            className="h-auto w-full max-w-full rounded-lg object-contain object-center md:h-[480px]"
            src={images[activeIndex]}
            alt="Imagen principal"
          />
        )}

        <button
          onClick={prevImage}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
        >
          &#8249;
        </button>

        <button
          onClick={nextImage}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
        >
          &#8250;
        </button>
      </div>

      <div className="flex justify-center space-x-2">
        {images.length > 1 &&
          images.map((image, index) => (
            <img
              key={index}
              onClick={() => setActiveIndex(index)}
              src={image}
              className={`h-[100px] w-[100px] cursor-pointer rounded-lg object-cover object-center transition-transform duration-300 hover:scale-110 ${
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
