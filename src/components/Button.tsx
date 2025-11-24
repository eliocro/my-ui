import { ReactNode } from 'react';

export type ButtonProps = {
  children?: ReactNode;
  label?: string;
  onClick?: () => void;
  disabled?: boolean;
};

export default function Button({
  label,
  children,
  onClick,
  disabled,
}: ButtonProps) {
  return (
    <button className="button" onClick={onClick} disabled={disabled}>
      {label || children}
    </button>
  );
}
