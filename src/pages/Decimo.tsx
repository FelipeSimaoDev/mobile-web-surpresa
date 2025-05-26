import React from 'react';
import { useNavigate } from 'react-router-dom';
import FullScreenSlide from '../components/FullScreenSlide';
import ModernButton from '../components/ModernButton';

const Decimo: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigateToSlide2 = () => {
    navigate('/decimoprimeiro');
  };

  return (
    <FullScreenSlide backgroundColor="#803d71">
      <>
        <text style={{ fontSize: "2.2em", margin: "20px", fontWeight: 700}}>
          {"Eai? Topa?"}
        </text>
        <img
          src={"/assets/IMG-20250526-WA0013.jpg"}
          alt="Presente"
          style={{
            width: "auto",
            height: "auto",
            maxWidth: "90vw",
            maxHeight: "90vh",
            objectFit: "contain",
            marginTop: "20px",
          }}
        />
        <br></br>
        <ModernButton onClick={handleNavigateToSlide2}>
        Óbviooo
        </ModernButton>
      </>
    </FullScreenSlide>
  );
};

export default Decimo; 