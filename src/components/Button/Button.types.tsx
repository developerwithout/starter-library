import { MouseEventHandler } from 'react';

export interface ButtonProps {
    size?: 'sm' | 'md' | 'lg';
    color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning' | string;
    variant?: 'text' | 'contained' | 'outlined';
    round?: boolean;
    disabled?: boolean;
    text?: string; 
    onClick?: MouseEventHandler<HTMLButtonElement>;
}