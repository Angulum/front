import Button from "../components/ui/Button";
import Input from "../components/ui/Input";

const ChangePassword = () => {
    return (
        <div className="flex h-screen">
          {/* Left side - Form */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-6">
            <div className="max-w-md w-full space-y-8">
              <div>
                <h2 className="font-semibold text-[28px] text-[#333333]">Recuperar contraseña</h2>
                <p className="font-family">
                  Escribe tu email y revisa la casilla de entrada del mismo para continuar.
                </p>
              </div>
              <form className="mt-8 space-y-4">
                <div className="rounded-md shadow-sm -space-y-px">
                  <div className="flex flex-col">
                    <label htmlFor="email-address" className="font-semibold">
                      Email
                    </label>
                    <Input
                      id="email-address"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="mt-1.5 "
                      placeholder="Email"
                    />
                  </div>
                </div>
                  <Button
                    className="w-full"
                    type="submit"
                    variant="primary"
                  >
                    Solicitar cambio
                  </Button>
              </form>
            </div>
          </div>
    
          {/* Right side - Image */}
          <div className="hidden lg:block lg:w-1/2 bg-cover bg-center"
               style={{ backgroundImage: `url('https://images.pexels.com/photos/290275/pexels-photo-290275.jpeg?cs=srgb&dl=pexels-pixabay-290275.jpg&fm=jpg')` }}>
          </div>
        </div>
      );
    
    };

export default ChangePassword;