import RadioButton from './RadioButton';

export type RadioGroupOption = {
  value: string;
  label: string;
};

export type RadioGroupProps = {
  name: string;
  label: string;
  options?: RadioGroupOption[];
  value?: string;
  onChange?: (val: string) => void;
};

export default function RadioGroup({
  name,
  label,
  value,
  options = [],
  onChange,
}: RadioGroupProps) {
  return (
    <fieldset className="radio-group">
      <legend>{label}</legend>
      {options.map((opt, idx) => (
        <RadioButton
          key={idx}
          name={name}
          value={opt.value}
          label={opt.label}
          checked={value === opt.value}
          onChange={val => val && onChange?.(opt.value)}
        />
      ))}
    </fieldset>
  );
}
