import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import cx from 'clsx';

import './Button.scss';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
}

export const Button: FC<IButtonProps> = ({ onClick, disabled, className, children, ...rest }) => (
  <button
    type="button"
    className={cx('button', className, { 'button--dsiabled': disabled })}
    onClick={onClick}
    disabled={disabled}
    {...rest}
  >
    {children}
  </button>
);
