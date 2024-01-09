import { useId } from 'react';

type RadioButtonProps = {
  name: string;
  label: string;
  value: string;
  checked?: boolean;
  onChange?: (val: boolean) => void;
};

export default function RadioButton({
  name,
  label,
  value,
  checked,
  onChange,
}: RadioButtonProps) {
  const id = useId();
  return (
    <div className="form-control radio">
      <input
        id={id}
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={evt => onChange?.(evt.target.checked)}
      />
      <label className="radio" htmlFor={id}>
        {label}
      </label>
    </div>
  );
}
