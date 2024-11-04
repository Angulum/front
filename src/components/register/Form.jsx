"use client";
import { useState } from "react";
import Button from "../ui/Button";
import Input from "../ui/Input";
import { Checkbox } from "../ui/Checkbox";
import { Eye, EyeOff } from "lucide-react";
import { useUser } from "../../lib/context/useUser";
import { useBlockUI } from "../../lib/context/useBlockUI";

const Form = ({ isActive }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhone] = useState("");
  const [viewPassword, setViewPassword] = useState(false);

  const [error, setError] = useState(null);

  const { login } = useUser();
  const { blockUI, unblockUI } = useBlockUI();

  const [passwordCheck, setPasswordCheck] = useState({
    length: false,
    upperCase: false,
    lowerCase: false,
    number: false,
  });

  const enableButton = () => {
    return (
      isActive &&
      passwordCheck.length &&
      passwordCheck.upperCase &&
      passwordCheck.lowerCase &&
      passwordCheck.number &&
      email &&
      password &&
      name &&
      phoneNumber
    );
  };

  const passwordMatch = (password) => {
    const length = password.length >= 8;
    const upperCase = /[A-Z]/.test(password);
    const lowerCase = /[a-z]/.test(password);
    const number = /[0-9]/.test(password);

    setPasswordCheck({
      length,
      upperCase,
      lowerCase,
      number,
    });
  };

  const handleButton = (e) => {
    e.preventDefault();
    setError(null);
    blockUI("Registrando usuario...");

    const user = {
      email,
      password,
      name,
      phoneNumber,
    };

    try {
      fetch(import.meta.env.VITE_BACKEND_URL + "/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((response) => response.json())
        .then((data) => {
          const token = data.accessToken;
          if (token) login(token);
        })
        .finally(() => unblockUI());
    } catch (error) {
      console.error("Error during registration:", error);
      setError("Ocurrió un error al registrarse");
      unblockUI();
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    passwordMatch(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleViewPassword = () => {
    setViewPassword(!viewPassword);
  };

  return (
    <form
      className="flex flex-col gap-2 space-y-2 text-sm"
      onSubmit={handleButton}
    >
      <div className="flex flex-col gap-1">
        <label className="font-semibold " htmlFor="name">
          Nombre y apellido
        </label>
        <Input
          onChange={handleNameChange}
          placeholder={"Peter Jhonson"}
          value={name}
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="font-semibold " htmlFor="email">
          Email
        </label>
        <Input
          onChange={handleEmailChange}
          placeholder={"jhonshonpeter@gmail.com"}
          value={email}
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="font-semibold " htmlFor="phone">
          Télefono
        </label>
        <Input
          onChange={handlePhoneChange}
          placeholder={"3417654321"}
          value={phoneNumber}
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="font-semibold " htmlFor="password">
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

      <div className="grid lg:grid-cols-4 grid-cols-2 py-2">
        <Checkbox label="Una mayúscula" checked={passwordCheck.upperCase} />
        <Checkbox label="Una minúscula" checked={passwordCheck.lowerCase} />
        <Checkbox label="Un número" checked={passwordCheck.number} />
        <Checkbox label="8 caracteres" checked={passwordCheck.length} />
      </div>

      <Button
        type="submit"
        className="mt-4"
        variant="primary"
        disabled={!enableButton()}
      >
        Registrate
      </Button>
      {!isActive && (
        <span className="text-red-500 text-sm">
          El registro está actualmente deshabilitado
        </span>
      )}
      {error && <p className="text-red-500 text-center">{error}</p>}
      <span className="whitespace-nowrap items-center">
        Al registrarte, aceptas nuestras{" "}
        <button className="font-semibold text-black hover:underline">
          Condiciones de uso
        </button>{" "}
        y
        <button className="font-semibold text-black hover:underline ml-1">
          Política de privacidad.
        </button>
      </span>
    </form>
  );
};

export default Form;
