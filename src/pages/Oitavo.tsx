import React from 'react';
import { useNavigate } from 'react-router-dom';
import FullScreenSlide from '../components/FullScreenSlide';
import ModernButtonGroup from '../components/ModernButtonGroup';

const Oitavo: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigateToHome = () => {
    navigate('/nono');
  };
  const handleNavigateToEnd = () => {
    navigate('/decimoprimeiro');
  };


  return (
    <FullScreenSlide backgroundColor="#803d71">
      <>
      <text style={{ fontSize: "2.2em", fontWeight: "bold"}}>
          {"Quer saber mais sobre o destino? "}
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
          leftText="Sim"
          rightText="Não, quero surpresa!"
          onLeftClick={handleNavigateToHome}
          onRightClick={handleNavigateToEnd}
          unico={false}
        />

      </>
    </FullScreenSlide>
  );
};

export default Oitavo; 