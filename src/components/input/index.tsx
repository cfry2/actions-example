import { ChangeEvent } from "react";
// import { css } from '@emotion/react'

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
      <label htmlFor={props.id}>{props.label}</label>
      <input
        id={props.id}
        type="text"
        value={props.value}
        onChange={handleChange}
      />
    </>
  );
};

export default Input;
