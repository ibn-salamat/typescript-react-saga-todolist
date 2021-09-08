import React, { ChangeEvent, ChangeEventHandler } from "react";

type OnChange = (value: string, event?: ChangeEvent) => void;

type CInputProps = {
  onChange?: OnChange;
};

export const CInput = (props: CInputProps) => {
  const { onChange: propOnChange } = props;

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
    <div className="">
      <input placeholder="Title" onChange={handleChange} />
    </div>
  );
};
