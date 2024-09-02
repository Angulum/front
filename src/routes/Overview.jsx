"use client";

import Footer from "../components/Footer";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/overview/hero/Hero";
import OfferButton from "../components/overview/hero/OfferButton";
import Publications from "../components/overview/publications/Publications";
import Team from "../components/overview/us/Team";
import Section from "../components/Section";


const Overview = () => {
  //const [users, setUsers] = useState();

  /*useEffect(() => {
    fetch("http://localhost:8080/user/get-all")
      .then((res) => res.json())
      .then((data) => console.log(data))
  }, []);*/

  return (
    <div className="relative">
      <Navbar />

      <Section className="overflow-hidden relative bg-[#F7F7F7] ">
        <div className="grid lg:grid-cols-2 mx-auto h-full w-full sm:max-w-[80%]">
          <Hero />

          <div className="h-full w-full xl:flex right-0 hidden">
            <img src="./hero.jpg " className="object-cover h-full w-full" />
          </div>

        </div>
      </Section>

      <Section className="bg-[#f8ebe3] h-fit">
        <div className="grid lg:grid-cols-4 py-12 sm:max-w-[80%] mx-auto z-[2] gap-8">
          <OfferButton
            offer="Departamentos en alquiler mas vistos"
            href="/buy"
          />

          <OfferButton
            offer="Las propiedades recien publicadas"
            href="/buy"
          />

          <OfferButton
            offer="Las propiedades que bajaron de precio"
            href="/buy"
          />

          <OfferButton
            offer="Departamentos más nuevos en alquier"
            href="/buy"
          />
        </div>
      </Section>

      <Section className="h-full bg-[#F7F7F7]">
        <div className="mx-auto h-full w-full sm:max-w-[80%]">
          <Publications />
        </div>
      </Section>

      <Section className="bg-[#f8ebe3] relative">
        <div className="mx-auto h-full w-full sm:max-w-[80%] z-[10]">
          <Team />
        </div>

        <img
          className="absolute bottom-0 left-0 z-[4] w-[50%]"
          src="./fondo.png"
        />
      </Section>

      <Footer />
    </div>
  );
};

export default Overview;
