import React from 'react';
import FullScreenSlide from '../components/FullScreenSlide';

const DecimoPrimeiro: React.FC = () => {

  return (
    <FullScreenSlide backgroundColor="#803d71">
      <>
        <p style={{ fontSize: '1.2em', margin: '20px', fontWeight: 600}}>
        Te amo!
        Animada para celebrar mais uma volta ao sol sua ao seu lado
        </p>
        <img
          src={"/src/assets/IMG-20250526-WA0012.jpg"}
          alt="Comemorar"
          style={{
            width: "auto",
            height: "auto",
            maxWidth: "50vw",
            maxHeight: "50vh",
            objectFit: "contain",
            marginTop: "20px",
          }}
        />
      </>
    </FullScreenSlide>
  );
};

export default DecimoPrimeiro; 