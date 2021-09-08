import React, { useState } from "react";
import { Title, CInput, CButton } from "../../components";

import "./index.css";

type TododListProps = {
  title: string;
  isVisibleSearchInput?: boolean;
};

export const TodoList = (props: TododListProps) => {
  const { title, isVisibleSearchInput = true } = props;
  const [textTodo, setTextTodo] = useState("");

  console.log("isVisible", isVisibleSearchInput);

  return (
    <div className="todolist-container">
      <Title label={title} />

      <CInput
        onChange={(value) => {
          setTextTodo(value);
        }}
      />

      <CButton
        onClick={(e) => {
          console.log(textTodo);
        }}
      >
        Create
      </CButton>

      <hr />
    </div>
  );
};
