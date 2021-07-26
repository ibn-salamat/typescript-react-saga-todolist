import { useEffect } from "react";
import { Title, TodoList } from "./components";
import { store } from "./store";

export const App = () => {
  useEffect(() => {
    console.log(store.getState());
  }, []);
  return (
    <>
      <Title label="TodoList" />
      <TodoList />
    </>
  );
};
