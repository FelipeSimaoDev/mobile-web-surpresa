// src/pages/Slide2.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import FullScreenSlide from '../components/FullScreenSlide'; // Importa o novo componente

const Slide2: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigateToHome = () => {
    navigate('/'); // Volta para o início
  };

  return (
    <FullScreenSlide onScreenClick={handleNavigateToHome} backgroundColor="#add8e6"> {/* Exemplo com outra cor */}
      <>
        <h2>Slide 2</h2>
        <p style={{ fontSize: '1.2em', margin: '20px' }}>
          Chegamos ao fim desta pequena demonstração...
        </p>
        <p>Toque para voltar ao início.</p>
        {/* Você pode adicionar mais imagens ou elementos aqui também */}
      </>
    </FullScreenSlide>
  );
};

export default Slide2;