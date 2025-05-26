// src/pages/HomeSlide.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import FullScreenSlide from '../components/FullScreenSlide'; // Importa o novo componente

const HomeSlide: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigateToSlide1 = () => {
    navigate('/slide1');
  };

  return (
    <FullScreenSlide onScreenClick={handleNavigateToSlide1} backgroundColor="#803d71">
      <> {/* Usamos React.Fragment (<> </>) para agrupar múltiplos elementos filhos */}
        <h2>Abra o seu presente!</h2>
        <img
          src={"/src/assets/presente.png"} // Confirme se este caminho está correto a partir da pasta public ou se é um import
          alt="Presente"
          style={{
            width: 'auto',
            height: 'auto',
            maxWidth: '70vw', // Usar vw/vh para responsividade da imagem também
            maxHeight: '60vh',
            objectFit: 'contain',
            marginTop: '20px', // Espaçamento entre o texto e a imagem            
          }}
        />
      </>
    </FullScreenSlide>
  );
};

export default HomeSlide;