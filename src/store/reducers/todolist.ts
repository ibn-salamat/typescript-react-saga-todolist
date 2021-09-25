import { uid } from "../../utils";

export const enum TodosReducerActionsEnum {
  ADD = "TODO_ADD_REDUCER_ACTION",
  REMOVE = "TODO_REMOVE_REDUCER_CTION",
}

type Action = {
  type: string;
  payload?: any;
};

type TodolistStateType = {
  todos: TodoType[];
};

export type TodoType = {
  id: number;
  title: string;
  done: boolean;
  createdDate: Date;
};

const initialState = {
  todos: [],
};

export function todolistReducer(
  state: TodolistStateType = initialState,
  action: Action
) {
  switch (action.type) {
    case TodosReducerActionsEnum.ADD:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: uid(),
            title: action.payload,
            done: false,
            createdDate: new Date(),
          },
        ],
      };
    default:
      return state;
  }
}
