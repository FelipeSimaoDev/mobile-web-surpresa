// src/pages/Slide1.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import FullScreenSlide from '../components/FullScreenSlide';
import ModernButton from '../components/ModernButton';

const Primeiro: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigateToSlide2 = () => {
    navigate('/segundo');
  };

  return (
    <FullScreenSlide backgroundColor="#803d71">
      <>
        <text style={{ fontSize: "2.2em", fontWeight: "bold"}}>
          {"27/05"}
        </text>
        <text style={{ fontSize: "2.2em", margin: "20px", fontWeight: 400}}>
          {"A data mais especial do ano!"}
        </text>
        <img
          src={"/src/assets/IMG-20250526-WA0006.jpg"} // Confirme se este caminho está correto a partir da pasta public ou se é um import
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

export default Primeiro;