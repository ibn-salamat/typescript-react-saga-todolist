import React, { useState } from "react";
import { Title, CInput } from "../../components";

import "./index.css";

type TododListProps = {
  title: string;
  isVisibleSearchInput?: boolean;
};

export const TodoList = (props: TododListProps) => {
  const { title, isVisibleSearchInput = true } = props;
  const [textTodo, setTextTodo] = useState("");

  console.log(textTodo);

  console.log("isVisible", isVisibleSearchInput);
  return (
    <div className="todolist-container">
      <Title label={title} />

      <CInput
        handleChange={(value) => {
          setTextTodo(value);
        }}
      />

      <button>Create</button>

      <hr />
    </div>
  );
};
