import PublicationCard from "./Card";

import { useLanguage } from "../../../lib/context/useLang";
import { translations } from "../../../lib/translations";

const Publications = () => {
  const { language } = useLanguage();

  return (
    <div className="flex flex-col w-full py-12 gap-12">
      <div className="flex gap-8 items-center">
        <h3 className="text-[40px] font-semibold whitespace-nowrap">
        {translations[language].featured}
        </h3>
        <div className="h-0.5 w-full bg-black/10" />
      </div>

      <div className="grid grid-cols-3 gap-12">
        {PUBLICATIONS.map((p, i) => {
          return <PublicationCard key={i} publication={p} />;
        })}
      </div>
    </div>
  );
};

const PUBLICATIONS = [
  {
    title: "Casa familiar en el centro",
    location: "España 2100, Rosario, Santa Fe",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqggPgc78Q4Zpzo1S9fOWc7l_5a2cXAoC0Vg&s",
    attributes: [
      { label: "Dormitorios", value: 3 },
      { label: "Baños", value: 2 },
      { label: "Superficie", value: "180 m²" },
      { label: "Precio / mensual", value: "$98.000 ARS", color: "green" },

    ],
    vendor: "Juan Perez",
    number: "341-1234567",
    email: "juanperez@gmail.com",
    tags: [
      {
        text: "En venta",
        type: "sale",
      },
    ],
  },

  {
    title: "Casa familiar en el centro",
    location: "España 2100, Rosario, Santa Fe",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqggPgc78Q4Zpzo1S9fOWc7l_5a2cXAoC0Vg&s",
    attributes: [
      { label: "Dormitorios", value: 3 },
      { label: "Baños", value: 2 },
      { label: "Superficie", value: "180 m²" },
      { label: "Precio / mensual", value: "$50.000 ARS", color: "green" },
    ],
    vendor: "Juan Perez",
    number: "341-1234567",
    email: "juanperez@gmail.com",
    tags: [
      {
        text: "En venta",
        type: "sale",
      },
      {
        text: "En alquiler",
        type: "rent",
      },
    ],
  },

  {
    title: "Casa familiar en el centro",
    location: "España 2100, Rosario, Santa Fe",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqggPgc78Q4Zpzo1S9fOWc7l_5a2cXAoC0Vg&s",
    attributes: [
      { label: "Dormitorios", value: 3 },
      { label: "Baños", value: 2 },
      { label: "Superficie", value: "180 m²" },
      { label: "Precio / mensual", value: "$150.000 ARS", color: "green" },
    ],
    vendor: "Juan Perez",
    number: "341-1234567",
    email: "juanperez@gmail.com",
    tags: [
      {
        text: "En venta",
        type: "sale",
      },
      {
        text: "En alquiler",
        type: "rent",
      },
      {
        text: "Destacada",
        type: "outstanding",
      },
    ],
  },
];

export default Publications;
