"use client";

import { useState } from "react";
import Button from "../ui/Button";
import Input from "../ui/Input";
import { Eye, EyeOff } from "lucide-react";
import { useUser } from "../../lib/context/useUser";

const FormLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [viewPassword, setViewPassword] = useState(false);

  const { login } = useUser();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const disableLogin = () => {
    if (email === "" || password === "" || password.length < 8) {
      return false;
    }
    return false;
  };

  const handleViewPassword = () => {
    setViewPassword(!viewPassword);
  };

  const handleButton = (e) => {
    e.preventDefault();

    fetch(import.meta.env.VITE_BACKEND_URL + "/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        const token = data.accessToken;

        if (token) login(token);
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
        <Input onChange={handleEmailChange} placeholder={"johnson@gmail.com"} />
      </div>
      <div className="flex flex-col gap-1">
        <label className="font-semibold text-xs" htmlFor="password">
          Contraseña
        </label>
        <div className="relative w-full">
          <Input
            onChange={handlePasswordChange}
            placeholder={"*********"}
            className={"relative w-full"}
            type={viewPassword ? "text" : "password"}
            value={password}
          />
          <button
            onClick={handleViewPassword}
            type="button"
            className="absolute right-4 top-1/2 transform -translate-y-1/2"
          >
            {!viewPassword ? (
              <Eye className="w-5 h-5 stroke-1" />
            ) : (
              <EyeOff className="w-5 h-5 stroke-1" />
            )}
          </button>
        </div>
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

export default FormLogin;
