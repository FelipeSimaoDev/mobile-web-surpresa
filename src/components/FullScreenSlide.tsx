// src/components/FullScreenSlide.tsx
import React, { useEffect } from 'react';

interface FullScreenSlideProps {
  children: React.ReactNode; // Conteúdo específico do slide
  onScreenClick?: () => void; // Agora opcional
  backgroundColor?: string;   // Cor de fundo opcional
  textColor?: string;         // Cor de texto opcional
}

const FullScreenSlide: React.FC<FullScreenSlideProps> = ({
  children,
  onScreenClick,
  backgroundColor = 'white', // Cor de fundo padrão
  textColor = 'white'        // Cor de texto padrão
}) => {
  useEffect(() => {
    const originalBodyBg = document.body.style.backgroundColor;
    document.body.style.backgroundColor = backgroundColor;
    return () => {
      document.body.style.backgroundColor = originalBodyBg;
    };
  }, [backgroundColor]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100dvh',
        width: '100vw',
        cursor: onScreenClick ? 'pointer' : 'default',
        backgroundColor: backgroundColor, // Usa a cor de fundo fornecida ou padrão
        color: textColor,                 // Usa a cor de texto fornecida ou padrão
        textAlign: 'center',              // Centraliza o texto dentro do slide
        boxSizing: 'border-box',
        paddingTop: 'env(safe-area-inset-top)',
        paddingBottom: 'env(safe-area-inset-bottom)',
        paddingLeft: 'env(safe-area-inset-left)',
        paddingRight: 'env(safe-area-inset-right)',
      }}
      onClick={onScreenClick}
    >
      {children}
    </div>
  );
};

export default FullScreenSlide;