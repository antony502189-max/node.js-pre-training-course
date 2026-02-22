export class InMemoryRepository<T extends { id: number }> {
  private items: T[] = [];

  add(entity: T): T {
    this.items = [...this.items, entity];
    return entity;
  }

  update(id: number, patch: Partial<T>): T {
    const index = this.items.findIndex((x) => x.id === id);
    if (index === -1) {
      throw new Error(`Entity with id ${id} not found`);
    }

    const current = this.items[index];
    const updated = { ...current, ...patch, id: current.id };

    this.items = this.items.map((x) => (x.id === id ? updated : x));
    return updated;
  }

  remove(id: number): void {
    const before = this.items.length;
    this.items = this.items.filter((x) => x.id !== id);

    if (this.items.length === before) {
      throw new Error(`Entity with id ${id} not found`);
    }
  }

  findById(id: number): T | undefined {
    return this.items.find((x) => x.id === id);
  }

  findAll(): T[] {
    return [...this.items];
  }
}