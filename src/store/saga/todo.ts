import { put, takeEvery } from "@redux-saga/core/effects";
import { TodosReducerActionsEnum } from "../reducers/todolist";

export const enum TodosActionsEnum {
  ADD = "TODO_ADD_ACTION",
  REMOVE = "TODO_REMOVE_ACTION",
}

export function* todoWatcher() {
  yield takeEvery(TodosActionsEnum.ADD, addTodo);
}

function* addTodo(action: { type: TodosActionsEnum.ADD; payload: string }) {
  yield put({ type: TodosReducerActionsEnum.ADD, payload: action.payload });
}
