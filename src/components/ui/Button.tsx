import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    fullWidth = false,
    className = '',
    ...props
}) => {
    const baseStyles = "cursor-pointer px-8 py-3.5 font-display font-bold text-lg transition-all duration-300 uppercase tracking-widest disabled:opacity-50 disabled:cursor-not-allowed rounded-sm active:scale-95";

    const variants = {
        primary: "bg-bulldog-bronze text-white hover:bg-bulldog-gold hover:shadow-[0_0_15px_rgba(197,160,89,0.4)] border border-transparent",
        secondary: "bg-bulldog-ash text-bulldog-text hover:bg-bulldog-charcoal border border-bulldog-charcoal hover:border-bulldog-muted",
        outline: "bg-transparent border-2 border-bulldog-bronze text-bulldog-bronze hover:bg-bulldog-bronze hover:text-white hover:shadow-[0_0_15px_rgba(139,90,43,0.4)]",
        ghost: "bg-transparent text-bulldog-muted hover:text-white hover:bg-white/5"
    };

    return (
        <button
            className={`
        ${baseStyles} 
        ${variants[variant]} 
        ${fullWidth ? 'w-full' : ''} 
        ${className}
      `}
            {...props}
        >
            {children}
        </button>
    );
};
