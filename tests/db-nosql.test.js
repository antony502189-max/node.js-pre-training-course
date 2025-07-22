// SQL
const fs = require('fs');

describe('SQL: Select all todos', () => {
  it('should contain SELECT * FROM todos', () => {
    const sql = fs.readFileSync('DB-NoSQL/solutions/task-01.sql', 'utf8');
    expect(sql).toMatch(/SELECT \* FROM todos/i);
  });
});

describe('SQL: Select todos by status', () => {
  it('should contain WHERE completed = false', () => {
    const sql = fs.readFileSync('DB-NoSQL/solutions/task-02.sql', 'utf8');
    expect(sql).toMatch(/WHERE completed = false/i);
  });
});

describe('SQL: Insert a new todo', () => {
  it('should contain INSERT INTO todos', () => {
    const sql = fs.readFileSync('DB-NoSQL/solutions/task-03.sql', 'utf8');
    expect(sql).toMatch(/INSERT INTO todos/i);
  });
});

describe('SQL: Update todo status', () => {
  it('should contain UPDATE todos SET completed = true', () => {
    const sql = fs.readFileSync('DB-NoSQL/solutions/task-04.sql', 'utf8');
    expect(sql).toMatch(/UPDATE todos SET completed = true/i);
  });
});

describe('SQL: Delete a todo by id', () => {
  it('should contain DELETE FROM todos WHERE id', () => {
    const sql = fs.readFileSync('DB-NoSQL/solutions/task-05.sql', 'utf8');
    expect(sql).toMatch(/DELETE FROM todos WHERE id/i);
  });
});

describe('SQL: Join todos and users', () => {
  it('should contain JOIN users ON todos.user_id = users.id', () => {
    const sql = fs.readFileSync('DB-NoSQL/solutions/task-06.sql', 'utf8');
    expect(sql).toMatch(/JOIN users ON todos.user_id = users.id/i);
  });
});

// MongoDB
const mongoInsert = require('../DB-NoSQL/solutions/task-07');
describe('MongoDB: Insert ToDo', () => {
  it('should export something for insert', () => {
    expect(mongoInsert).toBeDefined();
  });
});

const mongoFind = require('../DB-NoSQL/solutions/task-08');
describe('MongoDB: Find completed ToDos', () => {
  it('should export something for find', () => {
    expect(mongoFind).toBeDefined();
  });
});

const mongoUpdate = require('../DB-NoSQL/solutions/task-09');
describe('MongoDB: Update ToDo', () => {
  it('should export something for update', () => {
    expect(mongoUpdate).toBeDefined();
  });
});

const mongoDelete = require('../DB-NoSQL/solutions/task-10');
describe('MongoDB: Delete completed ToDos', () => {
  it('should export something for delete', () => {
    expect(mongoDelete).toBeDefined();
  });
}); 