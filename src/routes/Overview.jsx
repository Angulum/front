import Navbar from "../components/navbar/Navbar";
import Hero from "../components/overview/hero/Hero";
import OfferButton from "../components/overview/hero/OfferButton";
import Publications from "../components/overview/publications/Publications";
import Team from "../components/overview/us/Team";
import Section from "../components/Section";

const Overview = () => {
  return (
    <div className="relative">
      <Navbar />

      <Section className="overflow-hidden relative ">
        <div className="grid lg:grid-cols-2 mx-auto h-full w-full sm:max-w-[80%]">
          <Hero />

          <div className="h-full w-full absolute right-0">
            <img src="./hero.jpg" />
          </div>

          <div className="sm:flex z-[1] absolute h-[150vh] rotate-[20deg] w-full top-[-300px] left-[-700px] border border-black/20 shadow-xl bg-white" />
        </div>
      </Section>

      <Section className="bg-[#f8ebe3] h-fit">
        <div className="grid lg:grid-cols-4 py-12 sm:max-w-[80%] mx-auto z-[2] gap-8">
          <OfferButton
            offer="Departamentos en alquiler mas vistos"
            href="/comprar"
          />

          <OfferButton
            offer="Las propiedades recien publicadas"
            href="/comprar"
          />

          <OfferButton
            offer="Las propiedades que bajaron de precio"
            href="/comprar"
          />

          <OfferButton
            offer="Departamentos más nuevos en alquier"
            href="/comprar"
          />
        </div>
      </Section>

      <Section className="h-full">
        <div className="mx-auto h-full w-full sm:max-w-[80%]">
          <Publications />
        </div>
      </Section>

      <Section className="bg-[#f8ebe3] relative">
        <div className="mx-auto h-full w-full sm:max-w-[80%] z-[10]">
          <Team />
        </div>

        <img className="absolute bottom-0 left-0 z-[4] w-[50%]" src="./fondo.png" />
      </Section>
    </div>
  );
};

export default Overview;
