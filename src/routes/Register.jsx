import Form from "../components/register/Form";
import { useNavigate } from 'react-router-dom';


const Register = () => {
  
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };


  return (
    <div className="grid lg:grid-cols-2 justify-center items-center h-screen overflow-hidden">
      <div className=" mx-auto h-fit w-[60%]">
        <h2 className="font-semibold text-[28px] text-[#333333]">Bienvenido a tu nuevo futuro</h2>
        <span className="font-family">
          ¿Ya tienes cuenta?{" "}
          <button onClick={handleLoginClick} className="font-semibold">Inicia sesión</button>
        </span>
        <Form />
      </div>
      <img
        className="hidden w-full h-full object-fill lg:flex"
        src="https://images.pexels.com/photos/290275/pexels-photo-290275.jpeg?cs=srgb&dl=pexels-pixabay-290275.jpg&fm=jpg"
        alt=""
      />
    </div>
  );
};

export default Register;
