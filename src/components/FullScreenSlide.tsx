// src/components/FullScreenSlide.tsx
import React from 'react';

interface FullScreenSlideProps {
  children: React.ReactNode; // Conteúdo específico do slide
  onScreenClick: () => void; // Função a ser chamada ao clicar na tela
  backgroundColor?: string;   // Cor de fundo opcional
  textColor?: string;         // Cor de texto opcional
}

const FullScreenSlide: React.FC<FullScreenSlideProps> = ({
  children,
  onScreenClick,
  backgroundColor = 'white', // Cor de fundo padrão
  textColor = 'white'        // Cor de texto padrão
}) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
        cursor: 'pointer',
        backgroundColor: backgroundColor, // Usa a cor de fundo fornecida ou padrão
        color: textColor,                 // Usa a cor de texto fornecida ou padrão
        textAlign: 'center',              // Centraliza o texto dentro do slide
      }}
      onClick={onScreenClick}
    >
      {children}
    </div>
  );
};

export default FullScreenSlide;