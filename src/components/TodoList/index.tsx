import React, { useState } from "react";
import { Dispatch, Action } from "redux";
import { connect } from "react-redux";

import { Title, CInput, CButton } from "../../components";
import { addTodoAction } from "../../store/actions";
import { TodoType } from "../../store/reducers/todolist";

import "./index.css";

type TododListProps = {
  title: string;
  isVisibleSearchInput?: boolean;
  addTodo: (title: string) => Action;
  todos: TodoType[];
};

const _TodoList = (props: TododListProps) => {
  const { title, addTodo, todos } = props;
  const [textTodo, setTextTodo] = useState("");

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

      {todos.map(({ title, id, createdDate, done }) => {
        return (
          <div key={id} className="todo-container">
            <p>
              {title} | {createdDate.toISOString()}
            </p>
            isDone: {done}
          </div>
        );
      })}

      <hr />
    </div>
  );
};

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    addTodo: (title: string) => dispatch(addTodoAction(title)),
  };
}

function mapStateToProps(state: any) {
  const {
    todolist: { todos },
  } = state;
  return { todos };
}

export const TodoList = connect(mapStateToProps, mapDispatchToProps)(_TodoList);
