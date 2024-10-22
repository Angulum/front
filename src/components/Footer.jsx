import Logo from "./ui/Logo";
import { Link } from "react-router-dom";

const Footer = ({ inverted }) => {
  return (
    <footer className="flex flex-col w-full justify-between bg-[#F7F7F7]">
      <div className="mx-auto h-full w-full sm:max-w-[80%] py-12">
        <div className="grid grid-cols-5 gap-12">
          <div className="flex flex-col col-span-3 gap-6 max-w-[50%]">
            <Logo />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              malesuada purus ut nisi tincidunt, ac ultricies nunc
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <p className="text-xl font-semibold">Navegación</p>
            <ul className="flex flex-col gap-3">
              <li>
                <Link to={("/")}>
                  Inicio
                </Link>
              </li>
                <Link to={("/buy")}>
                  Publicaciones
                </Link>
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <p className="text-xl font-semibold">Navegación</p>
            <ul className="space-y-2">
              <li>
                <a href="#">Inicio</a>
              </li>
              <li>
                <a href="#">Publicaciones</a>
              </li>
              <li>
                <a href="#">Contacto</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-black/30 flex flex-col py-4">
        <div className="mx-auto h-full w-full sm:max-w-[80%] py-2">
          <p>
            © 2024 by <span className="font-semibold">Angulum</span>. All rights
            reserved.
          </p>
          <div>
            <a href="#">Términos y Condiciones</a>
            <a href="#"> Política de Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
