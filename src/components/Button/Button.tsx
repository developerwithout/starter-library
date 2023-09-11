import React from 'react';
import { ButtonProps } from './Button.types';

const colorMap: Record<string, string> = {
  blue: 'text-blue-500',
  red: 'text-red-500',
}

const variantStyles = (variant: 'text' | 'contained' | 'outlined'): string => {
  return '';
}

const Button = ({
  size = 'md',
  color = 'primary',
  variant = 'text',
  round = false,
  disabled = false,
  className,
  children,
  onClick,
  ...props
}: ButtonProps) => {

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${className} ${variantStyles(variant)} outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>

  );
};

export default Button;