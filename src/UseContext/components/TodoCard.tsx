import { Todo } from "../types/todo";

type Props = {
  todo: Todo;
  updateTodo: (id: number) => void;
};

const TodoCard: React.FC<Props> = ({ todo, updateTodo }) => {
  return (
    <div
      className={`w-[350px] h-auto p-2 flex flex-col justify-center gap-y-3 bg-slate-200 border-2 border-black rounded-3xl ${
        todo.status ? "line-through" : ""
      } `}
    >
      <h1>{todo.title}</h1>
      <span>{todo.description}</span>
      <button
        className="m-auto w-[40%] p-2 text-white text-lg font-semibold bg-sky-600 border-2 border-black rounded-2xl cursor-pointer"
        onClick={() => updateTodo(todo.id)}
      >
        Complete
      </button>
    </div>
  );
};

export default TodoCard;
