// src/pages/Slide1.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import FullScreenSlide from '../components/FullScreenSlide';
import ModernButton from '../components/ModernButton';

const Quarto: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigateToSlide2 = () => {
    navigate('/quinto');
  };

  return (
    <FullScreenSlide backgroundColor="#803d71">
      <>
        <text style={{ fontSize: "2.2em", margin: "20px", fontWeight: 600}}>
          {"Eu amo você, e amo viver a vida com você"}
        </text>
        <img
          src={"/assets/IMG-20250526-WA0003.jpg"} // Corrigido para funcionar no Vercel
          alt="Presente"
          style={{
            width: "auto",
            height: "auto",
            maxWidth: "50vw", // Usar vw/vh para responsividade da imagem também
            maxHeight: "50vh",
            objectFit: "contain",
            marginTop: "20px", // Espaçamento entre o texto e a imagem
          }}
        />
        <br>
        </br>
        <ModernButton onClick={handleNavigateToSlide2}>
          Avançar
        </ModernButton>
      </>
    </FullScreenSlide>
  );
};

export default Quarto;