import React, { useState } from "react";
import { Dispatch, Action } from "redux";
import { connect } from "react-redux";

import { Title, CInput, CButton } from "../../components";
import { addTodoAction } from "../../store/actions";

import "./index.css";

type TododListProps = {
  title: string;
  isVisibleSearchInput?: boolean;
  addTodo: (title: string) => Action;
};

const _TodoList = (props: TododListProps) => {
  const { title, addTodo } = props;
  const [textTodo, setTextTodo] = useState("");

  // console.log("isVisible", isVisibleSearchInput);

  return (
    <div className="todolist-container">
      <Title label={title} />

      <CInput
        value={textTodo}
        onChange={(value) => {
          setTextTodo(value);
        }}
      />

      <CButton
        disabled={textTodo.length < 3}
        onClick={() => {
          addTodo(textTodo);
          setTextTodo("");
        }}
      >
        Create
      </CButton>

      <hr />
    </div>
  );
};

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    addTodo: (title: string) => dispatch(addTodoAction(title)),
  };
}

export const TodoList = connect(null, mapDispatchToProps)(_TodoList);
