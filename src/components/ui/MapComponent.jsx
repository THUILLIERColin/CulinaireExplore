import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 48.6887213,
  lng: 6.1964532
};

const MapComponent = () => {
  return (
    <LoadScript
      googleMapsApiKey={apiKey} // Utilisation de la clé API via variable d'environnement
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
}

export default MapComponent;
