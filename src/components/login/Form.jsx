"use client";

import { useState } from "react";
import Button from "../ui/Button";
import Input from "../ui/Input";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const disableLogin = () => {
    if (email === "" || password === "") {
      return true;
    }
    return false;
  };

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
    <form
      className="flex flex-col gap-2 mt-3"
      onSubmit={(e) => handleButton(e)}
    >
      <div className="flex flex-col gap-1">
        <label className="font-semibold text-xs" htmlFor="email">
          Email
        </label>
        <Input
          onChange={handleEmailChange}
          placeholder={"johnson@gmail.com"}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="font-semibold text-xs" htmlFor="password">
          Contraseña
        </label>
        <Input
          onChange={handlePasswordChange}
          placeholder={"*********"}
        />
      </div>
      <Button
        disabled={disableLogin()}
        type="submit"
        className="mt-4"
        variant="primary"
      >
        Iniciar sesión
      </Button>
    </form>
  );
};

export default Form;
