import Navbar from "../components/navbar/Navbar";
import { useParams } from "react-router-dom";

const OverviewEstates = () => {
  const { id } = useParams();

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4 mt-20">
        <h1>Detalles de la Propiedad {id}</h1>
      </div>
    </>
  );
};

export default OverviewEstates;