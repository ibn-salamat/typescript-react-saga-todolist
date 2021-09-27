import React, { MouseEvent, ReactChild, ReactChildren } from "react";

type OnClick = (event?: MouseEvent) => void;

type CButtonProps = {
  onClick?: OnClick;
  disabled?: boolean;
  children: ReactChild | ReactChildren;
};

export const CButton = (props: CButtonProps) => {
  const { onClick: propOnClick, disabled = false, children } = props;

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (propOnClick) {
      propOnClick(e);
    } else {
      // something else
    }
  };

  return (
    <div className="c-btn">
      <button disabled={disabled} onClick={handleClick}>
        {children}
      </button>
    </div>
  );
};
