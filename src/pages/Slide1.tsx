// src/pages/Slide1.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import FullScreenSlide from '../components/FullScreenSlide';
import ModernButton from '../components/ModernButton';

const Slide1: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigateToSlide2 = () => {
    navigate('/slide2');
  };

  return (
    <FullScreenSlide backgroundColor="#e6e6fa">
      <>
        <h2>Slide 1</h2>
        <p style={{ fontSize: '1.2em', margin: '20px' }}>
          Aqui começa a sua jornada especial...
        </p>
        <p>Continue tocando para descobrir mais!</p>
        <ModernButton onClick={handleNavigateToSlide2}>
          Avançar
        </ModernButton>
      </>
    </FullScreenSlide>
  );
};

export default Slide1;