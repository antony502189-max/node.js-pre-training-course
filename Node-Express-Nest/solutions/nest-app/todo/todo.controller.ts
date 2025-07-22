import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';

@Controller('todos')
export class TodoController {
  @Get()
  getAll() {
    // TODO: implement
    return [];
  }

  @Post()
  create(@Body() body: any) {
    // TODO: implement
    return body;
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    // TODO: implement
    return {};
  }

  @Get('search')
  search(@Query() query: any) {
    // TODO: implement
    return [];
  }
} 