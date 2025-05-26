import React, { useState } from 'react';
import ModernButton from './ModernButton';

interface ModernButtonGroupProps {
  leftText: string;
  rightText: string;
  onLeftClick?: () => void;
  onRightClick?: () => void;
  leftDisabled?: boolean;
  rightDisabled?: boolean;
  unico?: boolean;
}

const ModernButtonGroup: React.FC<ModernButtonGroupProps> = ({
  leftText,
  rightText,
  onLeftClick,
  onRightClick,
  leftDisabled = false,
  rightDisabled = false,
  unico = false,
}) => {
  const [rightBtnPos, setRightBtnPos] = useState<{ top: number | null; left: number | null }>({ top: null, left: null });
  const [isFloating, setIsFloating] = useState(false);

  const moveButtonRandomly = () => {
    if (unico) {
      const btnWidth = 120; // ajuste conforme o tamanho do botão
      const btnHeight = 48; // ajuste conforme o tamanho do botão
      const maxTop = window.innerHeight - btnHeight;
      const maxLeft = window.innerWidth - btnWidth;
      const minTop = 0;
      const minLeft = 0;
      const top = Math.floor(Math.random() * (maxTop - minTop + 1)) + minTop;
      const left = Math.floor(Math.random() * (maxLeft - minLeft + 1)) + minLeft;
      setRightBtnPos({ top, left });
      setIsFloating(true);
    } else {
      // fallback antigo
      const maxTop = 80;
      const maxLeft = 180;
      const minTop = 0;
      const minLeft = 0;
      const top = Math.floor(Math.random() * (maxTop - minTop + 1)) + minTop;
      const left = Math.floor(Math.random() * (maxLeft - minLeft + 1)) + minLeft;
      setRightBtnPos({ top, left });
    }
  };

  const handleRightClick = () => {
    if (unico) {
      moveButtonRandomly();
      return;
    }
    if (onRightClick) onRightClick();
  };

  return (
    <div className="modern-btn-group" style={{ position: 'relative', minHeight: 60, display: 'flex', gap: 24, justifyContent: 'center', alignItems: 'center' }}>
      <ModernButton
        onClick={onLeftClick}
        disabled={leftDisabled}
        style={
          !unico
            ? {
                flex: 1,
                maxWidth: 240,
                minWidth: 120,
                padding: '12px 20px',
                marginRight: 0,
                whiteSpace: 'normal',
                wordBreak: 'break-word',
                textAlign: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }
            : { marginRight: 12 }
        }
      >
        {leftText}
      </ModernButton>
      {unico && isFloating ? (
        <ModernButton
          onClick={handleRightClick}
          disabled={rightDisabled}
          style={{
            position: 'fixed',
            top: rightBtnPos.top ?? 0,
            left: rightBtnPos.left ?? 0,
            transition: 'top 0.2s, left 0.2s',
            zIndex: 9999,
          }}
        >
          {rightText}
        </ModernButton>
      ) : (
        <ModernButton
          onClick={handleRightClick}
          disabled={rightDisabled}
          style={
            !unico
              ? {
                  flex: 1,
                  maxWidth: 240,
                  minWidth: 120,
                  padding: '12px 20px',
                  whiteSpace: 'normal',
                  wordBreak: 'break-word',
                  textAlign: 'center',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }
              : {}
          }
        >
          {rightText}
        </ModernButton>
      )}
    </div>
  );
};

export default ModernButtonGroup; 