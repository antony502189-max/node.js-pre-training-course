export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface TodoListProps {
  todos: Todo[];
}

export interface TodoItemProps {
  todo: Todo;
}

export interface ActiveCountProps {
  todos: Todo[];
} 