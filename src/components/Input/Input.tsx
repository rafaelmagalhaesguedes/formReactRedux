import { Control, Label, InputForm } from './Styles';

type Props = {
  type: string,
  label: string,
  value: string,
  name: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  required?: boolean,
};

function Input({ type, name, label, onChange, value, required = false }: Props) {
  return (
    <Label htmlFor={ name }>
      { label }
      <Control>
        <InputForm
          type={ type }
          name={ name }
          value={ value }
          onChange={ onChange }
          id={ name }
          required={ required }
        />
      </Control>
    </Label>
  );
}

export default Input;
