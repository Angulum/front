"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";

import Footer from "../components/Footer";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/overview/hero/Hero";
import OfferButton from "../components/overview/hero/OfferButton";
import Publications from "../components/overview/publications/Publications";
import Team from "../components/overview/us/Team";
import Section from "../components/Section";

const Overview = () => {
  //const [users, setUsers] = useState();

  useEffect(() => {
    fetch("https://server-angulum.koyeb.app/user/get")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div className="relative">
      <Navbar />

      <Section className="overflow-hidden relative flex items-center justify-center ">
        <motion.div
          initial={{ opacity: 0, x: -300 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute hidden md:block bottom-0 left-0 right-0 top-0 z-[1] overflow-hidden rotate-[12deg] opacity-80"
        >
          <img
            src="/home/casa-1.png"
            alt=""
            className="absolute hidden md:block bottom-[-5%] mx-auto left-[10%] translate-x-[-50%] z-[1] opacity-80 w-[90vh] h-[70vh]"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute hidden md:block bottom-0 left-0 right-0 top-0 z-[1] overflow-hidden rotate-[12deg] opacity-80"
        >
          <img
            src="/home/casa-2.png"
            alt=""
            className="absolute hidden md:block bottom-[-15%] mx-auto right-[-55%] translate-x-[-50%] z-[1] opacity-80  h-[80vh]"
          />
        </motion.div>

        <motion.div
          className="relative h-full w-full bg-white flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3 }}
        >
          <Hero />
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>{" "}
        </motion.div>
      </Section>

      <Section className="bg-[#f8ebe3] h-fit">
        <div className="grid lg:grid-cols-4 py-12 sm:max-w-[80%] mx-auto z-[2] gap-8">
          <OfferButton
            offer="Departamentos en alquiler mas vistos"
            href="/buy"
          />

          <OfferButton offer="Las propiedades recien publicadas" href="/buy" />

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
