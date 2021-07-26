import { combineReducers, Reducer } from "redux";
import { todolistReducer } from "./todolist";

type Reducers = {
  [key: string]: Reducer;
};

const reducers: Reducers = {
  todolist: todolistReducer,
};

export const rootReducer = combineReducers(reducers);
