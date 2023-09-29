import { MouseEventHandler, ReactNode } from 'react';

export interface ButtonProps {
    size?: 'sm' | 'md' | 'lg';
    color?: 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
    variant?: 'text' | 'contained' | 'outlined';
    round?: boolean;
    disabled?: boolean;
    className?: string;
    children?: ReactNode; 
    onClick?: MouseEventHandler<HTMLButtonElement>;
}