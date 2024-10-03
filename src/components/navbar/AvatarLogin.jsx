import { Link } from "react-router-dom";

import Button from "../ui/Button";
import { useUser } from "../../lib/context/useUser";

const Avatar = () => {
  const { user } = useUser();

  return (
    <div>
      {user ? (
        <div
          className="w-10 h-10 rounded-full  
            inline-flex items-center justify-center  
            bg-[#F5F5F5] font-semibold border border-black/20"
        >
          {user.name.charAt(0).toUpperCase()}
        </div>
      ) : (
        <Link to={"/login"}>
          <Button variant="secondary">Agregar propiedad</Button>
        </Link>
      )}
    </div>
  );
};

export default Avatar;
