"use client";
import { useState } from "react";
import Button from "../ui/Button";
import Input from "../ui/Input";
import { Checkbox } from "../ui/Checkbox";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [viewPassword, setViewPassword] = useState(false);


  const navigate = useNavigate();

  const [passwordCheck, setPasswordCheck] = useState({
    length: false,
    upperCase: false,
    lowerCase: false,
    number: false,
  });

  const enableButton = () => {
    return (
      passwordCheck.length &&
      passwordCheck.upperCase &&
      passwordCheck.lowerCase &&
      passwordCheck.number &&
      email &&
      password &&
      name &&
      phone
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


  const handleButton = async (e) => {
    e.preventDefault();

    const user = {
      email,
      password,
      name,
    };

    try {
      const response = await fetch("https://server-angulum.koyeb.app/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        console.log("User registered successfully");
        navigate("/login");
      } else {
        console.error("Registration failed");
      }
    } catch (error) {
      console.error("Error during registration:", error);
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
    <form className="flex flex-col gap-2 mt-4" onSubmit={handleButton}>
      <div className="flex flex-col gap-1">
        <label className="font-semibold text-xs" htmlFor="name">
          Nombre y apellido
        </label>
        <Input onChange={handleNameChange} placeholder={"Peter Jhonson"} value={name} />
      </div>

      <div className="flex flex-col gap-1">
        <label className="font-semibold text-xs" htmlFor="email">
          Email
        </label>
        <Input onChange={handleEmailChange} placeholder={"jhonshonpeter@gmail.com"} value={email} />
      </div>

      <div className="flex flex-col gap-1">
        <label className="font-semibold text-xs" htmlFor="phone">
          Télefono
        </label>
        <Input onChange={handlePhoneChange} placeholder={"3417654321"} value={phone} />
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
      <span className="text-sm whitespace-nowrap items-center">
        Al registrarte, aceptas nuestras{" "}
        <span className="mr-1 font-semibold">Condiciones de uso</span> y
        <span className="ml-1 font-semibold">Política de privacidad.</span>
      </span>
    </form>
  );
};

export default Form;
