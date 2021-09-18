import { TodosEnum } from "./saga/todo";

// export type BaseAction = {
//   type: string;
//   payload?;
// };

export const addTodoAction = (title: string) => ({
  type: TodosEnum.ADD,
  payload: title,
});
