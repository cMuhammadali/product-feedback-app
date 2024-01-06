import React from "react";

type ButtonProps = {
  children: string;
  className: string;
  onClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "submit";
  disabled?: boolean;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  onClick,
  type,
  disabled
}) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onClick?.(event);
  };

  return (
    <button className={className} onClick={handleClick} type={type} disabled={disabled}>
      {children}
    </button>
  );
};
