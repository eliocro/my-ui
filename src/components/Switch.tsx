import { useId } from 'react';

export type SwitchProps = {
  name: string;
  label: string;
  checked?: boolean;
  onChange?: (val: boolean) => void;
};

export default function Switch({
  name,
  label,
  checked,
  onChange,
}: SwitchProps) {
  const id = useId();
  return (
    <div className="switch">
      <input
        type="checkbox"
        id={id}
        name={name}
        checked={checked}
        onChange={evt => onChange?.(evt.target.checked)}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}
