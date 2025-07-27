import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { act } from 'react';
import { ToDoList } from '../solutions/task-01/ToDoList';
import { ToDoItem } from '../solutions/task-02/ToDoItem';
import { AddToDo } from '../solutions/task-03/AddToDo';
import { CompleteToDoList } from '../solutions/task-04/CompleteToDoList';
import { FilteredToDoList } from '../solutions/task-05/FilteredToDoList';
import { ActiveCount } from '../solutions/task-06/ActiveCount';
import { StyledToDoItem } from '../solutions/task-07/StyledToDoItem';
import { FetchToDos } from '../solutions/task-08/FetchToDos';
import { Card } from '../solutions/task-09/Card';
import { AddToDoForm } from '../solutions/task-10/AddToDoForm';

// 1. ToDoList
test('ToDoList renders todo titles', () => {
  render(<ToDoList todos={[{ id: 1, title: 'Test', completed: false }]} />);
  expect(screen.getByText('Test - not completed')).toBeInTheDocument();
});

// 2. ToDoItem
test('ToDoItem shows title and completed status', () => {
  render(<ToDoItem todo={{ id: 1, title: 'Test', completed: true }} />);
  expect(screen.getByText('Test')).toBeInTheDocument();
  expect(screen.getByText(/completed/i)).toBeInTheDocument();
});

// 3. AddToDo
test('AddToDo renders with input and add button', () => {
  render(<AddToDo />);
  expect(screen.getByPlaceholderText(/add todo/i)).toBeInTheDocument();
  expect(screen.getByText(/add/i)).toBeInTheDocument();
});

// 4. CompleteToDoList
test('CompleteToDoList renders with input and add button', () => {
  render(<CompleteToDoList />);
  expect(screen.getByPlaceholderText(/add todo/i)).toBeInTheDocument();
  expect(screen.getByText(/add/i)).toBeInTheDocument();
});

// 5. FilteredToDoList
test('FilteredToDoList renders and has filter buttons', () => {
  render(<FilteredToDoList />);
  expect(screen.getByPlaceholderText(/add todo/i)).toBeInTheDocument();
  expect(screen.getByText(/all/i)).toBeInTheDocument();
  expect(screen.getByText(/active/i)).toBeInTheDocument();
  expect(screen.getByText(/completed/i)).toBeInTheDocument();
});

// 6. ActiveCount
test('ActiveCount shows number of active todos', () => {
  render(<ActiveCount todos={[
    { id: 1, title: 'A', completed: false },
    { id: 2, title: 'B', completed: true }
  ]} />);
  expect(screen.getByText(/1 active/i)).toBeInTheDocument();
});

// 7. StyledToDoItem
test('StyledToDoItem renders todo item', () => {
  render(<StyledToDoItem todo={{ id: 1, title: 'Test', completed: true }} />);
  expect(screen.getByText('Test')).toBeInTheDocument();
  expect(screen.getByText(/completed/i)).toBeInTheDocument();
});

// 8. FetchToDos
test('FetchToDos renders with loading state', () => {
  render(<FetchToDos />);
  expect(screen.getByText(/loading/i)).toBeInTheDocument();
});

// 9. Card
test('Card renders children', () => {
  render(<Card><span>Content</span></Card>);
  expect(screen.getByText('Content')).toBeInTheDocument();
});

// 10. AddToDoForm
test('AddToDoForm renders with form elements', () => {
  render(<AddToDoForm />);
  expect(screen.getByPlaceholderText(/add todo/i)).toBeInTheDocument();
  expect(screen.getByText(/submit/i)).toBeInTheDocument();
}); 