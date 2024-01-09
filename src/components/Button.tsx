import { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
  label?: string;
  onClick?: () => void;
};

export default function Button({ label, children, onClick }: Props) {
  return (
    <button className="button" onClick={onClick}>
      {label || children}
    </button>
  );
}
