import PublicationCard from "./Card";

const Publications = () => {
  return (
    <div className="flex flex-col w-full py-12 gap-12">
      <div className="flex gap-8 items-center">
        <h3 className="text-[40px] font-semibold whitespace-nowrap">
          Publicaciones destacadas
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
      "https://img.freepik.com/foto-gratis/villa-lujo-piscina-espectacular-diseno-contemporaneo-arte-digital-bienes-raices-hogar-casa-propiedad-ge_1258-150749.jpg?size=626&ext=jpg",
    attributes: [
      { label: "Dormitorios", value: 3 },
      { label: "Baños", value: 2 },
      { label: "Superficie", value: "180 m²" },
      { label: "Precio / mensual", value: "$50.000 ARS" },
    ],
    vendor: "Juan Perez",
    number: "341-1234567",
    email: "juanperez@gmail.com",
  },

  {
    title: "Casa familiar en el centro",
    location: "España 2100, Rosario, Santa Fe",
    image:
      "https://img.freepik.com/foto-gratis/villa-lujo-piscina-espectacular-diseno-contemporaneo-arte-digital-bienes-raices-hogar-casa-propiedad-ge_1258-150749.jpg?size=626&ext=jpg",
    attributes: [
      { label: "Dormitorios", value: 3 },
      { label: "Baños", value: 2 },
      { label: "Superficie", value: "180 m²" },
      { label: "Precio / mensual", value: "$50.000 ARS" },
    ],
    vendor: "Juan Perez",
    number: "341-1234567",
    email: "juanperez@gmail.com",
  },

  {
    title: "Casa familiar en el centro",
    location: "España 2100, Rosario, Santa Fe",
    image:
      "https://img.freepik.com/foto-gratis/villa-lujo-piscina-espectacular-diseno-contemporaneo-arte-digital-bienes-raices-hogar-casa-propiedad-ge_1258-150749.jpg?size=626&ext=jpg",
    attributes: [
      { label: "Dormitorios", value: 3 },
      { label: "Baños", value: 2 },
      { label: "Superficie", value: "180 m²" },
      { label: "Precio / mensual", value: "$50.000 ARS" },
    ],
    vendor: "Juan Perez",
    number: "341-1234567",
    email: "juanperez@gmail.com",
  },
];

export default Publications;
