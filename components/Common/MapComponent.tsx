import React from 'react';
import {
  MapContainer, TileLayer, Marker, Popup,
} from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styled from 'styled-components';

const StyledMap = styled(MapContainer)`
    width: 400px;
    height: 300px;

    .leaflet-control-attribution {
        display: none
    }

    @media (max-width: 599px) {
      width: 100%;
      height: 280px;
  }
`;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: '/marker-icon-2x.png',
  iconUrl: '/marker-icon.png',
  shadowUrl: '/marker-shadow.png',
});

const position: L.LatLngExpression = [53.591860, 19.569062];

const MapComponent: React.FC = () => (
  <StyledMap center={position} zoom={13}>
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    />
    <Marker position={position}>
      <Popup>
        Kancelaria Adwokacka Adwokat Wiktoria Sendzik
      </Popup>
    </Marker>
  </StyledMap>
);

export default MapComponent;
