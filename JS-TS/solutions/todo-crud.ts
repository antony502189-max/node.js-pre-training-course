import { Todo } from "./types";

export function addTodo(state: Todo[], todo: Todo): Todo[] {
  return [...state, todo];
}

export function updateTodo(
  state: Todo[],
  id: number,
  update: Partial<Omit<Todo, "id" | "createdAt">>
): Todo[] {
  const index = state.findIndex((t) => t.id === id);
  if (index === -1) {
    throw new Error(`updateTodo: todo with id ${id} not found`);
  }

  const current = state[index];

  const updated: Todo = {
    ...current,
    ...update,
    id: current.id,
    createdAt: current.createdAt,
  };

  return state.map((t) => (t.id === id ? updated : t));
}

export function removeTodo(state: Todo[], id: number): Todo[] {
  const exists = state.some((t) => t.id === id);
  if (!exists) {
    throw new Error(`removeTodo: todo with id ${id} not found`);
  }

  return state.filter((t) => t.id !== id);
}

export function getTodo(state: Todo[], id: number): Todo | undefined {
  return state.find((t) => t.id === id);
}