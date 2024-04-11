// useMemo returns a memoized value
// memoization => caching a value so that it does not need to be recalculated
// useMemo only runs when one of its dependencies update => improves performance
// useMemo is used to keep expensive, resource intensive functions from needlessly running (like API calls)

// in the example below, the expensiveCalculation only runs when count changes, which occurs after clicking on the + button
// however, if we add a task using Add Todo button, it won't run expensiveCalculation regardless of the render

import { useState, useMemo } from "react";

const expensiveCalculation = (num: number) => {
  console.log("Calculating...");
  let result: number = num;
  for (let i = 0; i < 1000000000; i++) {
    result += 1;
  }
  return result;
};

const UseMemo = () => {
  const [count, setCount] = useState<number>(0);
  const [todos, setTodos] = useState<string[]>([]);
  const calculation = useMemo(() => {
    return expensiveCalculation(count);
  }, [count]);

  const increment = () => {
    setCount((count) => count + 1);
  };

  const addTodo = () => {
    setTodos((todo) => [...todo, "New Todo"]);
  };

  return (
    <div className="w-full h-full pt-5 flex flex-col items-center gap-y-5">
      <div className="flex flex-col items-center gap-y-2">
        <h1 className="text-xl font-bold underline">My Todos</h1>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <button
          className="p-1 text-white font-semibold bg-sky-600 border-2 border-black rounded-2xl cursor-pointer"
          onClick={addTodo}
        >
          Add Todo
        </button>
      </div>
      <div className="flex flex-col items-center gap-y-2">
        <p>Count: {count}</p>
        <button
          className="p-1 text-white font-semibold bg-sky-600 border-2 border-black rounded-full cursor-pointer"
          onClick={increment}
        >
          +
        </button>
        <p>Expensive Calculation</p>
        {calculation}
      </div>
    </div>
  );
};

export default UseMemo;
