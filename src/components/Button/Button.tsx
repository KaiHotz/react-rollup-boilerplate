import React, { FC, ReactNode } from 'react';
import cx from 'classnames';
import './styles.css';

export interface IButtonProps {
  onClick: () => void;
  disabled?: boolean;
  className?: string;
  children?: ReactNode;
}

export const Button: FC<IButtonProps> = ({ onClick, disabled, className, children }) => (
  <button type="button" className={cx('button', className)} onClick={onClick} disabled={disabled} data-testid="button-comp">
    {children}
  </button>
);
