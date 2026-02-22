import { InMemoryRepository } from './repository';
import { Todo, NewTodo, TodoStatus } from './types';

export class TodoNotFoundError extends Error {
  constructor(id: number) {
    super(`Todo with id ${id} not found`);
    this.name = 'TodoNotFoundError';
  }
}

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function randomDelayMs(min = 300, max = 600): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export class TodoApi {
  private repo = new InMemoryRepository<Todo>();

  async getAll(): Promise<Todo[]> {
    await delay(randomDelayMs());
    return this.repo.findAll();
  }

  async add(newTodo: NewTodo): Promise<Todo> {
    await delay(randomDelayMs());

    const existing = this.repo.findAll();
    const nextId = existing.reduce((maxId, t) => Math.max(maxId, t.id), 0) + 1;

    const created: Todo = {
      id: nextId,
      title: newTodo.title,
      description: newTodo.description,
      status: newTodo.status ?? TodoStatus.PENDING,
      createdAt: new Date(),
    };

    return this.repo.add(created);
  }

  async update(
    id: number,
    update: Partial<Omit<Todo, 'id' | 'createdAt'>>
  ): Promise<Todo> {
    await delay(randomDelayMs());

    const current = this.repo.findById(id);
    if (!current) {
      throw new TodoNotFoundError(id);
    }

    return this.repo.update(id, update as Partial<Todo>);
  }

  async remove(id: number): Promise<void> {
    await delay(randomDelayMs());

    const current = this.repo.findById(id);
    if (!current) {
      throw new TodoNotFoundError(id);
    }

    this.repo.remove(id);
  }
}