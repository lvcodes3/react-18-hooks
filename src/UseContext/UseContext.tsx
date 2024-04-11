import TodoProvider from "./context/todoContext";

import { Todos } from "./containers/Todos";
import { AddTodo } from "./components/AddTodo";

const UseContext = () => {
  return (
    <TodoProvider>
      <div className="w-screen h-screen flex flex-col items-center gap-5">
        <h1 className="pt-2 text-xl font-bold">My Todos</h1>
        <AddTodo />
        <Todos />
      </div>
    </TodoProvider>
  );
};

export default UseContext;
