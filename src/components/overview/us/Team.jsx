import Person from "./Person";

const Team = () => {
  return (
    <div className="flex flex-col w-full py-12 gap-12">
      <div className="grid grid-cols-3 items-center">
        <div className="h-0.5 w-full bg-black/30" />
        <div className="flex flex-col items-center">
          <h3 className="text-[40px] font-semibold whitespace-nowrap text-center">
            Nuestro equipo
          </h3>
          <p>¡Conoce a cada unos de nuestros integrantes!</p>
        </div>
        <div className="h-0.5 w-full bg-black/30" />
      </div>

      <div className="grid grid-cols-4 gap-8 mt-6">
        {TEAM_DATA.map((t, i) => {
          return <Person key={i} image={t.image} name={t.name} role={t.role} />;
        })}
      </div>
    </div>
  );
};

const TEAM_DATA = [
  {
    image: "./team/batista.png",
    name: "Felipe Batista",
    role: "Frontend Developer",
  },
  {
    image: "./team/virgili.png",
    name: "Joaquin Virgili",
    role: "Frontend Developer",
  },
  {
    image: "./team/gandossini.png",
    name: "Lucas Gandossini",
    role: "Backend Developer",
  },
  {
    image: "./team/baltazar.png",
    name: "Baltazar Fantin",
    role: "Backend Developer",
  },
];

export default Team;
