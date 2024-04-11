import { memo } from "react";

interface TodosProps {
  todos: string[];
  addTodo: () => void;
}

const Todos: React.FC<TodosProps> = ({ todos, addTodo }) => {
  console.log("child render");

  return (
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
  );
};

export default memo(Todos);
