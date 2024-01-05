import React from "react";

type ButtonProps = {
  children: string;
  className: string;
  onClick?: () => void;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  onClick,
}) => {
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    onClick?.();
  };

  return (
    <button className={className} onClick={handleClick}>
      {children}
    </button>
  );
};
