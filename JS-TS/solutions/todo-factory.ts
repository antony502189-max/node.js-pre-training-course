import { NewTodo, Todo, TodoStatus } from "./types";

let nextId = 1;

export function createTodo(todo: NewTodo): Todo {
  const created: Todo = {
    id: nextId,
    title: todo.title,
    description: todo.description,
    status: todo.status ?? TodoStatus.PENDING,
    createdAt: new Date(),
  };

  nextId += 1;
  return created;
}