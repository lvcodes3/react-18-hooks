// useMemo returns a memoized value
// memoization => caching a value so that it does not need to be recalculated
// useMemo only runs when one of its dependencies update => improves performance
// useMemo is used to keep expensive, resource intensive functions from needlessly running (like API calls)

// in the example below, the expensiveCalculation only runs when count changes, which occurs after clicking on the + button
// however, if we add a task using Add Todo button, it won't run expensiveCalculation regardless of the render

import { useState, useCallback } from "react";

import Todos from "./components/Todos";

const UseCallback = () => {
  const [count, setCount] = useState<number>(0);
  const [todos, setTodos] = useState<string[]>([]);

  const increment = () => {
    setCount((count) => count + 1);
  };

  const addTodo = useCallback(() => {
    setTodos((todo) => [...todo, "New Todo"]);
  }, [todos]);

  return (
    <div className="w-full h-full pt-5 flex flex-col items-center gap-y-5">
      <Todos todos={todos} addTodo={addTodo} />
      <div className="flex flex-col items-center gap-y-2">
        <p>Count: {count}</p>
        <button
          className="p-1 text-white font-semibold bg-sky-600 border-2 border-black rounded-full cursor-pointer"
          onClick={increment}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default UseCallback;
