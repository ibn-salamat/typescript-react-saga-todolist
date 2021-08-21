import React from "react";
import { Title, TodoListInput } from "../../components";

import "./index.css";

type TododListProps = {
  title: string;
};

export const TodoList = (props: TododListProps) => {
  const { title } = props;
  return (
    <div className="todolist-container">
      <Title label={title} />

      <TodoListInput />
    </div>
  );
};
