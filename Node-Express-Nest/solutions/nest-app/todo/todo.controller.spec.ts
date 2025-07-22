import { Test, TestingModule } from '@nestjs/testing';
import { TodoController } from './todo.controller';

describe('TodoController', () => {
  let controller: TodoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TodoController],
    }).compile();
    controller = module.get<TodoController>(TodoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return todos from controller', () => {
    expect(Array.isArray(controller.getAll())).toBe(true);
  });

  it('should return todo by id or 404', () => {
    // TODO: implement test for getById
    expect(typeof controller.getById('1')).toBe('object');
  });

  it('should filter todos by query params', () => {
    // TODO: implement test for search
    expect(Array.isArray(controller.search({ completed: true }))).toBe(true);
  });
}); 