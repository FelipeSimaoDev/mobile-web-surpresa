import React from 'react';
import { useNavigate } from 'react-router-dom';
import FullScreenSlide from '../components/FullScreenSlide';
import ModernButtonGroup from '../components/ModernButtonGroup';

const Sexto: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigateToHome = () => {
    navigate('/setimo');
  };

  return (
    <FullScreenSlide backgroundColor="#803d71">
      <>
      <text style={{ fontSize: "2.2em", fontWeight: "bold"}}>
          {"Topa viver mais uma aventura juntas? "}
        </text>
        <img
          src={"/src/assets/IMG-20250526-WA0009.jpg"}
          alt="Final" 
          style={{
            width: "auto",
            height: "auto",
            maxWidth: "50vw",
            maxHeight: "50vh",
            objectFit: "contain",
            marginTop: "20px",
          }}
        />
          <ModernButtonGroup
          leftText="Siiim"
          rightText="Hmm não sei..."
          onLeftClick={handleNavigateToHome}
          onRightClick={handleNavigateToHome}
          unico={true}
        />

      </>
    </FullScreenSlide>
  );
};

export default Sexto; 