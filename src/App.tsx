import { useEffect } from "react";
import { TodoList } from "./components";
import { store } from "./store";

export const App = () => {
  
  useEffect(() => {
    console.log("STORE:" ,store.getState());
  }, [store]);

  return (
    <>
      <TodoList title="Todolist 1" />
    </>
  );
};
