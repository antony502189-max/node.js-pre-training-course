// JS/TS Task 1 Test

describe('customMap', () => {
  it('should double the values', () => {
    const customMap = require('../JS-TS/task-01.mdx').customMap;
    expect(customMap([1,2,3], x => x*2)).toEqual([2,4,6]);
  });
});

const { getIncompleteTodos } = require('../JS-TS/solutions/task-02');
describe('getIncompleteTodos', () => {
  it('returns only todos with completed: false', () => {
    const todos = [
      { id: 1, title: 'Buy milk', completed: false },
      { id: 2, title: 'Read book', completed: true }
    ];
    expect(getIncompleteTodos(todos)).toEqual([
      { id: 1, title: 'Buy milk', completed: false }
    ]);
  });
});

const { addTodo } = require('../JS-TS/solutions/task-03');
describe('addTodo', () => {
  it('adds a new todo to the array', () => {
    const todos = [
      { id: 1, title: 'Buy milk', completed: false }
    ];
    const newTodo = { id: 2, title: 'Read book', completed: false };
    expect(addTodo(todos, newTodo)).toEqual([
      { id: 1, title: 'Buy milk', completed: false },
      { id: 2, title: 'Read book', completed: false }
    ]);
  });
});

const { markCompleted } = require('../JS-TS/solutions/task-05');
describe('markCompleted', () => {
  it('marks the todo with the given id as completed', () => {
    const todos = [
      { id: 1, title: 'Buy milk', completed: false },
      { id: 2, title: 'Read book', completed: false }
    ];
    expect(markCompleted(todos, 2)).toEqual([
      { id: 1, title: 'Buy milk', completed: false },
      { id: 2, title: 'Read book', completed: true }
    ]);
  });
});

const { removeTodo } = require('../JS-TS/solutions/task-06');
describe('removeTodo', () => {
  it('removes the todo with the given id', () => {
    const todos = [
      { id: 1, title: 'Buy milk', completed: false },
      { id: 2, title: 'Read book', completed: false }
    ];
    expect(removeTodo(todos, 1)).toEqual([
      { id: 2, title: 'Read book', completed: false }
    ]);
  });
});

const { getTitles } = require('../JS-TS/solutions/task-07');
describe('getTitles', () => {
  it('returns an array of todo titles', () => {
    const todos = [
      { id: 1, title: 'Buy milk', completed: false },
      { id: 2, title: 'Read book', completed: false }
    ];
    expect(getTitles(todos)).toEqual(['Buy milk', 'Read book']);
  });
});

const { createTodo } = require('../JS-TS/solutions/task-08');
describe('createTodo', () => {
  it('creates a todo with a unique id and completed=false', () => {
    const todo = createTodo('Go jogging');
    expect(todo).toHaveProperty('id');
    expect(todo).toMatchObject({ title: 'Go jogging', completed: false });
  });
});

const { ToDoManager } = require('../JS-TS/solutions/task-10');
describe('ToDoManager', () => {
  it('manages todos: add, markCompleted, getAll', () => {
    const manager = new ToDoManager();
    manager.add({ id: 1, title: 'Buy milk', completed: false });
    manager.markCompleted(1);
    expect(manager.getAll()).toEqual([
      { id: 1, title: 'Buy milk', completed: true }
    ]);
  });
});

// Типовой тест для TypeScript типов можно реализовать через type-checking отдельно, либо оставить как комментарий для проверки руками.
// Пример:
// import { ToDo } from '../JS-TS/solutions/task-04';
// const todo: ToDo = { id: 1, title: 'Buy milk', completed: false }; 