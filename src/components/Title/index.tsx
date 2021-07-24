import React from "react";

type TitleProps = {
  label: string;
};

export const Title: React.FC<TitleProps> = (props) => {
  const { label } = props;
  return <h1>{label}</h1>;
};
