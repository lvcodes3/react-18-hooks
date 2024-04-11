// React Context allows us to share and manage state across our components without having to pass down props //

import { createContext, useState } from "react";

import { Todo, TodoContextType } from "../types/todo";

// initializing context //
export const TodoContext = createContext<TodoContextType | null>(null);

// component to provide the context to consumer components //
const TodoProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // initializing the state with data //
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: 1,
      title: "post 1",
      description: "this is a description",
      status: false,
    },
    {
      id: 2,
      title: "post 2",
      description: "this is a description",
      status: false,
    },
  ]);

  const saveTodo = (todo: Todo) => {
    const newTodo: Todo = {
      id: Math.random(),
      title: todo.title,
      description: todo.description,
      status: false,
    };
    setTodos([...todos, newTodo]);
  };

  const updateTodo = (id: number) => {
    const updatedTodos = todos.map((todo: Todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          status: true,
        };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <TodoContext.Provider value={{ todos, saveTodo, updateTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
