import { Action } from "redux";

const initialState = {
  todos: [],
};

export function todolistReducer(state = initialState, action: Action) {
  switch (action.type) {
    default:
      return state;
  }
}
