import { takeEvery } from "@redux-saga/core/effects";

export const enum TodosEnum {
  ADD = "TODO_ADD_ACTION",
  REMOVE = "TODO_REMOVE_ACTION",
}

export function* todoWatcher() {
  yield takeEvery(TodosEnum.ADD, addTodo);
}

function addTodo() {
  console.log("Add todo action")
}
