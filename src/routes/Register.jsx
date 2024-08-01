import Form from "../components/register/Form";

const Register = () => {
  return (
    <div className="grid lg:grid-cols-2 justify-center items-center min-h-screen ">
      <div className=" mx-auto h-fit">
        <h2 className="font-bold text-[28px]">Bienvenido de vuelta</h2>
        <span className="font-family">
          ¿No tienes cuenta?{" "}
          <button className="font-semibold">Registrate</button>
        </span>
        <Form />
      </div>
      <img
        className="hidden w-screen h-screen lg:flex"
        src="https://th.bing.com/th/id/OIP.5AhTQhrZEzjAD0LJQuC98wHaDf?rs=1&pid=ImgDetMain"
        alt=""
      />
    </div>
  );
};

export default Register;
