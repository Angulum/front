import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Icono personalizado para el marcador
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

const Map = () => {
    const lat = -32.9472; // Latitud de Crespo 172, Rosario
    const lng = -60.6424; // Longitud de Crespo 172, Rosario
    const popupText = "Crespo 172, Rosario, Santa Fe, Argentina";
    return (
      <div className="w-full h-96">
        <MapContainer center={[lat, lng]} zoom={13} scrollWheelZoom={false} className="h-full">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[lat, lng]}>
            <Popup>{popupText}</Popup>
          </Marker>
        </MapContainer>
      </div>
    );
  };

export default Map;