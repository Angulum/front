"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useUser } from "../../lib/context/useUser";
import { useBlockUI } from "../../lib/context/useBlockUI";

import Button from "../ui/Button";
import Input from "../ui/Input";

import { translations } from "../../lib/translations";
import { useLanguage } from "../../lib/context/useLang";

const FormLogin = () => {
  const { language } = useLanguage();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [viewPassword, setViewPassword] = useState(false);

  const [error, setError] = useState(null);

  const { login } = useUser();
  const { blockUI, unblockUI } = useBlockUI();

  const handleInputChange = (setter) => (e) => {
    setter(e.target.value);
  };

  const isLoginDisabled =
    email === "" || password === "" || password.length < 8;

  const toggleViewPassword = () => {
    setViewPassword((prev) => !prev);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    blockUI("Iniciando sesión...");
    setError(null);

    try {
      const response = await fetch(
        import.meta.env.VITE_BACKEND_URL + "/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      if (!response.ok) {
        unblockUI();
        setError("Credenciales incorrectas");
        return;
      }

      const data = await response.json();
      const token = data.accessToken;

      if (token) {
        login(token);
      } else {
        setError("Ocurrió un error al iniciar sesión");
        unblockUI();
      }
    } catch (error) {
      console.error("Error logging in:", error);
      setError("Ocurrió un error al iniciar sesión");
      unblockUI();
    }
  };

  return (
    <form
      className="flex flex-col gap-4 mt-6 space-y-1 text-sm"
      onSubmit={handleLogin}
    >
      <div className="flex flex-col gap-2">
        <label className="font-semibold" htmlFor="email">
          Email
        </label>
        <Input
          id="email"
          value={email}
          onChange={handleInputChange(setEmail)}
          placeholder="johnson@gmail.com"
          required
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="font-semibold" htmlFor="password">
          {translations[language].password}
        </label>
        <div className="relative w-full">
          <Input
            id="password"
            type={viewPassword ? "text" : "password"}
            value={password}
            onChange={handleInputChange(setPassword)}
            placeholder="*********"
            required
          />
          <button
            type="button"
            onClick={toggleViewPassword}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-black"
          >
            {viewPassword ? (
              <EyeOff className="w-5 h-5" />
            ) : (
              <Eye className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>
      <Button
        disabled={isLoginDisabled}
        type="submit"
        className="mt-6 w-full"
        variant="primary"
      >
        {translations[language].login}
      </Button>

      {error && <p className="text-red-500 text-center">{error}</p>}
    </form>
  );
};

export default FormLogin;
