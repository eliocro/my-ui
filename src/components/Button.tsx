import { ReactNode } from 'react';

type ButtonProps = {
  children?: ReactNode;
  label?: string;
  onClick?: () => void;
};

export default function Button({ label, children, onClick }: ButtonProps) {
  return (
    <button className="button" onClick={onClick}>
      {label || children}
    </button>
  );
}
