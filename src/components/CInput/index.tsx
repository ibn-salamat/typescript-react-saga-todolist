import React, { ChangeEvent, ChangeEventHandler } from "react";

type HandleChange = (value: string, event?: ChangeEvent) => void;

type CInputProps = {
  handleChange?: HandleChange;
};

export const CInput = (props: CInputProps) => {
  const { handleChange: propHandleChange } = props;

  const handleChange: ChangeEventHandler = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    if (propHandleChange) {
      propHandleChange(e.target.value, e);
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
