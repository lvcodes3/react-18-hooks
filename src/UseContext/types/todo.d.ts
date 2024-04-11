export interface Todo {
  id: number;
  title: string;
  description: string;
  status: boolean;
};

export type TodoContextType = {
  todos: Todo[];
  saveTodo: (todo: Todo) => void;
  updateTodo: (id: number) => void;
};
