import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  variant: 'primary' | 'secondary';
  as?: 'button' | 'link';
  href?: string;
  children: React.ReactNode;
  className?: string;
  target?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  disabled?: boolean;
  fullWidth?: boolean;
}

export const ButtonVariant: React.FC<ButtonProps> = ({
  variant,
  as = 'button',
  href,
  children,
  className = '',
  target,
  type = 'button',
  onClick,
  disabled = false,
  fullWidth = false
}) => {
  const baseStyles = 'py-2 px-4 text-center rounded-md font-semibold transition-all duration-150 cursor-pointer text-nowrap';
  
  const variants = {
    primary: 'bg-darkBrand text-neutralWhite hover:bg-extraDarkBrand hover:shadow-md',
    secondary: 'bg-neutralWhite border-[1px] border-darkBrand text-darkBrand hover:bg-darkBrand hover:text-neutralWhite'
  };
  
  const widthClass = fullWidth ? 'w-full' : '';
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : '';
  
  const buttonClasses = `${baseStyles} ${variants[variant]} ${widthClass} ${className} ${disabledClasses}`;
  
  if (as === 'link' && href) {
    const isExternal = target === '_blank' || href.endsWith('.pdf') || href.startsWith('http');
    
    if (isExternal) {
      return (
        <a 
          href={href} 
          target={target} 
          rel="noopener noreferrer" 
          className={buttonClasses}
          tabIndex={disabled ? -1 : undefined}
          aria-disabled={disabled}
        >
          {children}
        </a>
      );
    }
    
    return (
      <Link 
        href={href} 
        className={buttonClasses}
        tabIndex={disabled ? -1 : undefined}
        aria-disabled={disabled}
      >
        {children}
      </Link>
    );
  }
  
  return (
    <button 
      className={buttonClasses} 
      type={type} 
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};