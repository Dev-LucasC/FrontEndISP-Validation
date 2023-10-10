import React from 'react';
import { Maps, MapText, MapContainer } from "./styles";

const LocContainer: React.FC = () => {
  return (
    <>
      <MapContainer>
        <Maps>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49531.6866312252!2d-43.28651584923242!3d-22.673741015383502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9972edfbe838f5%3A0x672bb060c280a52a!2sDuque%20de%20Caxias%2C%20RJ!5e0!3m2!1spt-BR!2sbr!4v1670934180387!5m2!1spt-BR!2sbr"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Maps>
        <MapText>
          <p>Rua XXX</p>
          <p>Duque de Caxias / RJ</p>
          <p>90000-000</p>
        </MapText>
      </MapContainer>
    </>
  );
};

export { LocContainer };
