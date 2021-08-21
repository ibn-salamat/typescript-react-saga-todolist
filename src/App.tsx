import { useEffect } from "react";
import { TodoList } from "./components";
import { store } from "./store";

export const App = () => {
  useEffect(() => {
    console.log(store.getState());
  }, []);
  return (
    <>
      <TodoList title="Todolist 1" />
    </>
  );
};
