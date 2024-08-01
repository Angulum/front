"use client";

import Button from "../ui/Button";
import Input from "../ui/Input";

const Form = () => {
  const handleButton = (e) => {
    e.preventDefault();

    fetch("http://localhost:8080/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Email: "hellojavaaasd",
        password: "pepei",
        name: "fdfdg",
        role: "user",
      }),
    });
  };

  return (
    <form className="grid grid-rows-4 mt-4" onSubmit={(e) => handleButton(e)}>
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
        placeholder={"*********"}
        className={"border border-gray-300 rounded-md p-1"}
      />
      <Button type="submit" className="mt-4" variant="primary">
        Iniciar sesión
      </Button>
    </form>
  );
};

export default Form;
