import Logo from "./ui/Logo";
import { Link } from "react-router-dom";

const Footer = ({ inverted }) => {
  return (
    <footer className="flex flex-col w-full justify-between bg-[#f5f4f4]">
      <div className="mx-auto h-full w-full sm:max-w-[80%] py-6 flex justify-between items-center">
        <Logo />

        <p>
          © 2024 by <span className="font-semibold">Angulum</span>. Todos los
          derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
