import { Link } from "react-router-dom";
import { cn } from "../../lib/utils";

const Logo = ({ className }) => {
  return (
    <Link to={"/"} className={cn("flex items-center gap-2", className)}>
      <img src="/logo-negro.png" alt="Logo Angulum" className="w-8 h-9" />
      <p className=" font-bold text-xl">Angulum</p>
    </Link>
  );
};

export default Logo;
