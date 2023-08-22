import { MouseEventHandler } from 'react';

export interface ButtonProps {
    variant?: 'text' | 'contained' | 'outlined';
    size?: 'sm' | 'md' | 'lg';
    color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning' | string;
    disabled?: boolean;
    text?: string; 
    onClick?: MouseEventHandler<HTMLButtonElement>;
}