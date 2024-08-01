import Input from "../login/Input";

const Form = () => {
  return (
    <>
      <form action="">
        <label htmlFor="">Email</label>
        <Input placeholder={"example@mail.com"} type={"email"} />
        <label htmlFor="">Nombre y apellido</label>
        <Input placeholder={"Peter Jhonson"} type={"text"} />
        <label htmlFor="">Número de teléfono</label>
        <Input placeholder={"3417654321"} type={"number"} />
        <label htmlFor="">Contraseña</label>
        <Input placeholder={"********"} type={"password"} />
      </form>
    </>
  );
};

export default Form;
