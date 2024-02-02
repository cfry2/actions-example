import { ChangeEvent } from "react";
import {TextField} from '@radix-ui/themes'

type Props = {
  value: string;
  onChange: (value: string) => void;
  id: string;
  label: string;
};

const Input = (props: Props) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (Number.isNaN(Number(event.target.value))) {
      return;
    }
    props.onChange(event.target.value);
  };

  return (
    <>
      <TextField.Input
        id={props.id}
        type="text"
        placeholder={props.label}
        value={props.value}
        onChange={handleChange}
      />
    </>
  );
};

export default Input;
