import { useContext } from "react";

import { TodoContextType, Todo } from "../types/todo";
import { TodoContext } from "../context/todoContext";
import TodoCard from "../components/TodoCard";

export const Todos = () => {
  const { todos, updateTodo } = useContext(TodoContext) as TodoContextType;

  return (
    <>
      {todos.map((todo: Todo) => (
        <TodoCard key={todo.id} updateTodo={updateTodo} todo={todo} />
      ))}
    </>
  );
};
