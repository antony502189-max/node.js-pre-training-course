import { Todo, TodoStatus } from './types';

export function toggleAll(state: Todo[], completed: boolean): Todo[] {
  const nextStatus = completed ? TodoStatus.COMPLETED:TodoStatus.PENDING;

  return state.map((todo) => ({
    ...todo,
    status:nextStatus,
  }));
}

export function clearCompleted(state: Todo[]): Todo[] {
  return state.filter((todo) => todo.status !== TodoStatus.COMPLETED);
}

export function countByStatus(state: Todo[], status: TodoStatus): number {
  return state.reduce((acc, todo) => acc + (todo.status === status ? 1 : 0), 0);
}
