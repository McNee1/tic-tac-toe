import { ComponentProps } from 'react';

export type ButtonProps = ComponentProps<'button'>;

export const Button = ({ children, className, onClick, ...props }: ButtonProps) => {
  return (
    <button
      className={className}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};
