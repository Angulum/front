import Form from "../components/register/Form";
import { useNavigate } from "react-router-dom";
import Logo from "../components/ui/Logo";

const Register = () => {
  const navigate = useNavigate();

  return (
    <div className="grid lg:grid-cols-2 justify-center items-center h-screen overflow-hidden relative">
      <Logo className="absolute top-4 left-4" />
      <div className=" mx-auto h-fit w-[60%]">
        <div>
          <h2 className="font-semibold text-xl text-[#333333]">
            Bienvenido de vuelta
          </h2>
          <p className="font-family text-sm">
            ¿Ya tienes una cuenta?{" "}
            <button
              onClick={() => navigate("/login")}
              className="font-semibold text-black hover:underline"
            >
              Inicia sesión
            </button>
          </p>
        </div>

        <div className="mt-6">
          <Form />
        </div>
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

export default Register;
