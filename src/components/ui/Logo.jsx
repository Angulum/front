import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to={"/"} className="flex items-center gap-2">
      <img src="./logo-negro.png" alt="Logo Angulum" className="w-8 h-9" />
      <p className=" font-bold text-xl">Angulum</p>
    </Link>
  );
};

export default Logo;
