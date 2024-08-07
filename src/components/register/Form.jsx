"use client";
import { useState } from "react";
import Button from "../ui/Button";
import Input from "../ui/Input";

const Form = () => {

  // const [email, setEmail] = useState('');
  // const [fullName, setFullName] = useState('');
  // const [phone, setPhone] = useState('');
  // const [password, setPassword] = useState('');
  const [check, setChecked] = useState(false);
  const [subscribe, setSubscribe] = useState(true);

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
        placeholder={"peterjhonshon@gmail.com"}
        className={"border border-gray-300 rounded-md p-1"}
      />
            <label className="p-1 font-semibold" htmlFor="email">
        Nombre y apellido
      </label>
      <Input
        placeholder={"Peter Jhonson"}
        className={"border border-gray-300 rounded-md p-1"}
      />
            <label className="p-1 font-semibold" htmlFor="email">
        Télefono
      </label>
      <Input
        placeholder={"3417654321"}
        className={"border border-gray-300 rounded-md p-1"}
      />
      <label className="p-1 font-semibold" htmlFor="password">
        Contraseña
      </label>
      <Input
        placeholder={"*********"}
        className={"border border-gray-300 rounded-md p-1"}
      />
      <div className="flex flex-col lg:gap-4 whitespace-nowrap lg:flex-row p-2">
        <label className="text-[2vh]"><input type="checkbox" checked={check} onChange={() => setChecked(true)} className="text-[2vh] rounded-full" disabled /> Más de 8 caracteres</label>
        <label className="text-[2vh]"><input type="checkbox" checked={check} onChange={() => setChecked(true)} className="text-[2vh] rounded-full" disabled /> Una mayúscula</label>
        <label className="text-[2vh]"><input type="checkbox" checked={check} onChange={() => setChecked(true)} className="text-[2vh] rounded-full" disabled /> Una minúscula</label>
        <label className="text-[2vh]"><input type="checkbox" checked={check} onChange={() => setChecked(true)} className="text-[2vh] rounded-full" disabled /> Un número</label>
      </div>

      <label className="flex items-center">
        <input className="p-1" type="checkbox" checked={subscribe} onChange={() => setSubscribe(!subscribe)} />
        <span className="text-[1.7vh] whitespace-nowrap ml-2 items-center">   
          Quiero recibir información sobre actualizaciones, cambios, eventos y promociones
        </span>
      </label>
      <Button type="submit" className="mt-4" variant="primary">
        Registrate
      </Button>
      <span className="ml-12 text-[1.6vh] whitespace-nowrap py-2 justify-center">Al crear la cuenta, estarás aceptando los Términos de uso y la Politica de privacidad</span>
    </form>
  );
};

export default Form;
