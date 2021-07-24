import React from "react";

type TitleProps = {
  label: string;
  size?: 12 | 16 | 24 | 32 | 48;
};

export const Title: React.FC<TitleProps> = (props) => {
  const { label, size = 24 }: TitleProps = props;
  
  return <p style={{ fontSize: size }}>{label}</p>;
};
