import { useState } from "react";

import Input from "../ui/Input";
import Button from "../ui/Button";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="border border-black/10 rounded-lg flex flex-col gap-12 max-w-lg p-8">
        <div className="flex flex-col gap-1.5">
          <h3 className="text-xl font-bold">Admin Login</h3>
          <p className="text-[#575757]">Ingresa tus credenciales para entrar al panel de administración</p>
        </div>

        <div className="flex flex-col gap-1.5">
          <div className="flex flex-col">
            <label className="font-semibold" htmlFor="email">
              Email
            </label>
            <Input
              id="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="johnson@gmail.com"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="font-semibold" htmlFor="password">
              Contraseña
            </label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="*********"
              required
            />
          </div>
          <Button type="submit" className="mt-6 w-full" variant="primary">
            Iniciar sesión
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
