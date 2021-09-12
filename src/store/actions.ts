import { TodosEnum } from "./saga/todo";

export type BaseAction = {
  type: string;
  payload?;
};

export const addTodo = (title: string): BaseAction => ({
  type: TodosEnum.ADD,
  payload: title,
});
