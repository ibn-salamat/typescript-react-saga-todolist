import { takeEvery } from "@redux-saga/core/effects";

export const enum TodosEnum {
  ADD = "ADD",
  REMOVE = "REMOVE",
}

export function* todoWatcher() {
  yield takeEvery(TodosEnum.ADD, addTodo);
}

function* addTodo() {
  console.log(55);
}
