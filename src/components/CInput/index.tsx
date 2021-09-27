import React, { ChangeEvent, ChangeEventHandler } from "react";

type OnChange = (value: string, event?: ChangeEvent) => void;

type CInputProps = {
  onChange?: OnChange;
  value?: string;
};

export const CInput = (props: CInputProps) => {
  const { onChange: propOnChange, value } = props;

  const handleChange: ChangeEventHandler = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    if (propOnChange) {
      propOnChange(e.target.value, e);
    } else {
      // something else
    }
  };

  return (
    <div className="c-input">
      <input value={value} placeholder="Title" onChange={handleChange} />
    </div>
  );
};
