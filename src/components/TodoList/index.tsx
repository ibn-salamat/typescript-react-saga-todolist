import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { Title, CInput, CButton } from "../../components";
import { addTodo } from "../../store/actions";

import "./index.css";

type TododListProps = {
  title: string;
  isVisibleSearchInput?: boolean;
};

export const TodoList = (props: TododListProps) => {
  const dispatch = useDispatch();
  const _addTodo = (title: string) => addTodo(title);

  const { title } = props;
  const [textTodo, setTextTodo] = useState("");

  // console.log("isVisible", isVisibleSearchInput);

  return (
    <div className="todolist-container">
      <Title label={title} />

      <CInput
        onChange={(value) => {
          setTextTodo(value);
        }}
      />

      <CButton
        onClick={() => {
          _addTodo(textTodo);
        }}
      >
        Create
      </CButton>

      <hr />
    </div>
  );
};
