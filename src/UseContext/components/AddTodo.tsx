import { useState, useContext } from "react";

import { TodoContext } from "../context/todoContext";
import { TodoContextType, Todo } from "../types/todo";

export const AddTodo: React.FC = () => {
  const { saveTodo } = useContext(TodoContext) as TodoContextType;

  const [formData, setFormData] = useState<Todo | {}>();

  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  const handleSaveTodo = (e: React.FormEvent, formData: Todo | any) => {
    e.preventDefault();
    saveTodo(formData);
  };

  return (
    <form
      className="p-2 flex flex-col justify-center gap-y-3 bg-slate-200 border-2 border-black rounded-3xl"
      onSubmit={(e) => handleSaveTodo(e, formData)}
    >
      <div className="flex gap-x-1">
        <label className="flex-[1]" htmlFor="title">
          Title:
        </label>
        <input
          className="flex-[9]"
          onChange={handleForm}
          type="text"
          id="title"
        />
      </div>
      <div className="flex gap-x-1">
        <label className="flex-[1]" htmlFor="description">
          Description:
        </label>
        <input
          className="flex-[9]"
          onChange={handleForm}
          type="text"
          id="description"
        />
      </div>
      <button
        className="m-auto w-[50%] p-2 text-white text-lg font-semibold bg-sky-600 border-2 border-black rounded-2xl cursor-pointer"
        disabled={formData === undefined ? true : false}
      >
        Add Todo
      </button>
    </form>
  );
};
