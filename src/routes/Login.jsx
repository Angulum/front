import Form from "../components/login/Form";

const Login = () => {
  return (
    <div className="grid lg:grid-cols-2 justify-center items-center h-screen overflow-hidden">
      <div className=" mx-auto h-fit w-[60%]">
        <h2 className="font-semibold text-[28px] text-[#333333]">Bienvenido de vuelta</h2>
        <span className="font-family">
          ¿No tienes cuenta?{" "}
          <button className="font-semibold">Registrate</button>
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

export default Login;
