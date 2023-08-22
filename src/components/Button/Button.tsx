import React from 'react';
import styled from 'styled-components';
import { ButtonProps } from './Button.types';



const Button: React.FC<ButtonProps> = ({
    size = 'md',
    color = 'primary',
    variant = 'text',
    round=false,
    disabled = false,
    text,
    onClick,
    ...props
}) => {

    function determineStyle(variant: 'text' | 'contained' | 'outlined', size: 'sm' | 'md' | 'lg', round: boolean): string {
        const styles: Record<string, Record<string, string>> = {
            text: {
                sm: 'text-${ color }-500 background-transparent px-3 py-1 text-xs',
                md: 'text-${ color }-500 background-transparent px-6 py-2 text-xs',
                lg: 'text-${ color }-500 background-transparent px-8 py-3 text-sm'
            },
            filled: {
                sm: `bg-${color}-500 text-white active:bg-${ color }-600 font-bold uppercase text-xs px-4 py-2 ${round ? 'rounded' : 'rounded-full'} shadow hover:shadow-md`,
                md: `bg-${ color }-500 text-white active:bg-${ color }-600 font-bold uppercase text-xs px-6 py-3 ${round ? 'rounded' : 'rounded-full'} shadow hover:shadow-lg`,
                lg: `bg-${ color }-500 text-white active:bg-${ color }-600 font-bold uppercase text-xs px-8 py-3 ${round ? 'rounded' : 'rounded-full'} shadow-md hover:shadow-lg`,
            },
            outlined: {
                sm: round ? 'outlined-sm-round' : 'outlined-sm',
                md: round ? 'outlined-md-round' : 'outlined-md',
                lg: round ? 'outlined-lg-round' : 'outlined-lg'
            }
        };

        return styles[variant][size] || '';
    }

    
    return (
        <button
            type="button"
            onClick={onClick}
            className={ `${ determineStyle(variant, size, round) } outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150` }
            disabled={disabled}
            {...props}
        >
            {text}
        </button>

    );
};

export default Button;