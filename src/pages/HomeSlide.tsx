// src/pages/HomeSlide.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import FullScreenSlide from "../components/FullScreenSlide"; // Importa o novo componente

const HomeSlide: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigateToSlide1 = () => {
    navigate("/Primeiro");
  };

  return (
    <FullScreenSlide
      onScreenClick={handleNavigateToSlide1}
      backgroundColor="#803d71"
    >
      <>
        {" "}
        {/* Usamos React.Fragment (<> </>) para agrupar múltiplos elementos filhos */}
        <text style={{ fontSize: "2.2em", margin: "20px", fontWeight: "bold"}}>
          {"Abra o seu presente!"}
        </text>
        <img
          src={"/assets/presente.png"} // Corrigido para funcionar no Vercel
          alt="Presente"
          style={{
            width: "auto",
            height: "auto",
            maxWidth: "70vw", // Usar vw/vh para responsividade da imagem também
            maxHeight: "60vh",
            objectFit: "contain",
            marginTop: "20px", // Espaçamento entre o texto e a imagem
          }}
        />
      </>
    </FullScreenSlide>
  );
};

export default HomeSlide;
