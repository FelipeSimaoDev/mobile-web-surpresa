import React from 'react';
import ModernButton from './ModernButton';

interface ModernButtonGroupProps {
  leftText: string;
  rightText: string;
  onLeftClick?: () => void;
  onRightClick?: () => void;
  leftDisabled?: boolean;
  rightDisabled?: boolean;
}

const ModernButtonGroup: React.FC<ModernButtonGroupProps> = ({
  leftText,
  rightText,
  onLeftClick,
  onRightClick,
  leftDisabled = false,
  rightDisabled = false,
}) => {
  return (
    <div className="modern-btn-group">
      <ModernButton onClick={onLeftClick} disabled={leftDisabled} style={{ marginRight: 12 }}>
        {leftText}
      </ModernButton>
      <ModernButton onClick={onRightClick} disabled={rightDisabled}>
        {rightText}
      </ModernButton>
    </div>
  );
};

export default ModernButtonGroup; 