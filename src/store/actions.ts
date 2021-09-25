import { TodosActionsEnum } from "./saga/todo";

// export type BaseAction = {
//   type: string;
//   payload?;
// };

export const addTodoAction = (title: string) => ({
  type: TodosActionsEnum.ADD,
  payload: title,
});
