import Navbar from "../components/navbar/Navbar";
import Hero from "../components/overview/Hero";
import OfferButton from "../components/overview/OfferButton";
import Section from "../components/Section";

const Overview = () => {
  return (
    <div className="relative">
      <Navbar />

      <Section>
        <div className="grid lg:grid-cols-2 sm:max-w-[80%] mx-auto">
          <Hero />

          <div className="h-full z-[-1] overflow-hidden hidden lg:flex absolute top-0">
            <img
              src="./hero.jpg"
              alt="hero"
              className="object-cover w-full h-full"
            />
            <div className="sm:flex hidden absolute bg-white h-[150vh] rotate-[20deg] w-full top-[-300px] left-[-700px] border border-black/20 shadow-xl" />
          </div>
        </div>
      </Section>

      <Section className="bg-[#F2F2F2] h-fit">
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

      <Section className="bg-[#F2F2F2] z-[10]" />
    </div>
  );
};

export default Overview;
