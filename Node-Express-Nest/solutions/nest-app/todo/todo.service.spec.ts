import { TodoService } from './todo.service';

describe('TodoService', () => {
  let service: TodoService;

  beforeEach(() => {
    service = new TodoService();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should manage todos in service', () => {
    // TODO: implement test for managing todos
    expect(typeof service).toBe('object');
  });
}); 