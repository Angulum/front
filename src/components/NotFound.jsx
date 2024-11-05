export const NotFound = () => {
  return (
    <div className="flex flex-col gap-2 items-center justify-center h-screen">
      <h1 className="text-4xl">404 | No encontrado</h1>
      <a href="/" className="text-blue-600 hover:underline ">
        Volver al inicio
      </a>
    </div>
  );
};
