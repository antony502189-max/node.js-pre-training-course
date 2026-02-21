export enum TodoStatus {
  PENDING = "PENDING",
  IN_PROGRESS = "IN_PROGRESS",
  COMPLETED = "COMPLETED",
}

export interface Todo {
  id: number
  title: string
  description?: string
  status: TodoStatus
  readonly createdAt: Date
}

export type NewTodo = Omit<Todo, "id" | "createdAt" | "status"> & {
  status?: TodoStatus;
};
