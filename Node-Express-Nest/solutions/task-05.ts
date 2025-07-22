// NestJS Controller for /todos
import { Controller, Get } from '@nestjs/common';

@Controller('todos')
export class TodosController {
  @Get()
  getTodos() {
    // TODO: implement
  }
} 