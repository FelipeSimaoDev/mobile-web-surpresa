// src/pages/Slide1.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import FullScreenSlide from '../components/FullScreenSlide';
import ModernButton from '../components/ModernButton';

const Segundo: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigateToSlide2 = () => {
    navigate('/terceiro');
  };

  return (
    <FullScreenSlide backgroundColor="#803d71">
      <>
        <text style={{ fontSize: "2.2em", fontWeight: "bold"}}>
          {"Aniversário do meu amor! "}
        </text>
        <text style={{ fontSize: "2.2em", margin: "20px", fontWeight: 400}}>
          {"(de outros carnavais...)"}
        </text>
        <img
          src={"/src/assets/IMG-20250526-WA0011.jpg"} // Confirme se este caminho está correto a partir da pasta public ou se é um import
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

export default Segundo;