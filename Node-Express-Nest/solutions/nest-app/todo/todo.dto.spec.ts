import { ToDoDto } from './todo.dto';

describe('ToDoDto', () => {
  it('should have id, title, completed fields', () => {
    const dto = new ToDoDto();
    expect(dto).toHaveProperty('id');
    expect(dto).toHaveProperty('title');
    expect(dto).toHaveProperty('completed');
  });
}); 