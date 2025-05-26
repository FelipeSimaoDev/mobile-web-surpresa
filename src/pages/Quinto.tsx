import React from 'react';
import { useNavigate } from 'react-router-dom';
import FullScreenSlide from '../components/FullScreenSlide';
import ModernButton from '../components/ModernButton';

const Quinto: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigateToSlide2 = () => {
    navigate('/sexto');
  };

  return (
    <FullScreenSlide backgroundColor="#803d71">
      <>
        <text style={{ fontSize: "2.2em", margin: "20px", fontWeight: 600}}>
          {"Nossas aventuras são as melhores!"}
        </text>
        <img
          src={"/assets/IMG-20250526-WA0008.jpg"}
          alt="Presente"
          style={{
            width: "auto",
            height: "auto",
            maxWidth: "50vw",
            maxHeight: "50vh",
            objectFit: "contain",
            marginTop: "20px",
          }}
        />
        <br></br>
        <ModernButton onClick={handleNavigateToSlide2}>
          Avançar
        </ModernButton>
      </>
    </FullScreenSlide>
  );
};

export default Quinto; 