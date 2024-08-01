import Input from "./Input";

const Form = () => {
  return (
    <>
      <div>
        <form className="grid grid-rows-4 " action="">
          <label className="p-1 font-semibold" htmlFor="email">
            Email
          </label>
          <Input
            placeholder={"exapmle@mail.com"}
            className={"border border-gray-300 rounded-md p-1"}
          />
          <label className="p-1 font-semibold" htmlFor="password">
            Contraseña
          </label>
          <Input
            placeholder={"Password"}
            className={"border border-gray-300 rounded-md p-1"}
          />
          <button>Iniciar sesión</button>
        </form>
      </div>
    </>
  );
};

export default Form;
