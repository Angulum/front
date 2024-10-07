import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import FormLogin from "../components/login/Form";
import Logo from "../components/ui/Logo";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="grid lg:grid-cols-2 h-screen">
      <Logo className="absolute top-4 left-4" />
      <div className="flex flex-col justify-center px-8 lg:px-20 w-full lg:w-3/5 mx-auto">
        <div>
          <h2 className="font-semibold text-xl text-[#333333]">
            Bienvenido de vuelta
          </h2>
          <p className="font-family text-sm">
            ¿No tienes cuenta?{" "}
            <button
              onClick={() => navigate("/register")}
              className="font-semibold text-black hover:underline"
            >
              Regístrate
            </button>
          </p>
        </div>

        <FormLogin />
        <p className="mt-4 text-sm">
          ¿Olvidaste tu contraseña?{" "}
          <Link
            to="/changePassword"
            className="font-semibold text-black hover:underline"
          >
            Recupérala aquí
          </Link>
        </p>
      </div>
      <div className="relative">
        <div className="absolute inset-0 bg-black opacity-50" />

        <img
          className="hidden w-full h-full object-fill lg:flex"
          src="https://images.pexels.com/photos/290275/pexels-photo-290275.jpeg?cs=srgb&dl=pexels-pixabay-290275.jpg&fm=jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Login;
