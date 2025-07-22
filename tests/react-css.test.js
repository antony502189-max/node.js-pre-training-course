// React/CSS Task 1 Test

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ToDoList from '../React-CSS/solutions/task-01';
import ToDoItem from '../React-CSS/solutions/task-02';
import AddToDo from '../React-CSS/solutions/task-03';
import CompleteToDoList from '../React-CSS/solutions/task-04';
import FilteredToDoList from '../React-CSS/solutions/task-05';
import ActiveCount from '../React-CSS/solutions/task-06';
import StyledToDoItem from '../React-CSS/solutions/task-07';
import FetchToDos from '../React-CSS/solutions/task-08';
import Card from '../React-CSS/solutions/task-09';
import AddToDoForm from '../React-CSS/solutions/task-10';

// 1. ToDoList
it('ToDoList renders todo titles', () => {
  render(<ToDoList todos={[{ id: 1, title: 'Test', completed: false }]} />);
  expect(screen.getByText('Test')).toBeInTheDocument();
});

// 2. ToDoItem
it('ToDoItem shows title and completed status', () => {
  render(<ToDoItem todo={{ id: 1, title: 'Test', completed: true }} />);
  expect(screen.getByText('Test')).toBeInTheDocument();
  expect(screen.getByText(/completed/i)).toBeInTheDocument();
});

// 3. AddToDo
it('AddToDo adds a todo to the list', () => {
  render(<AddToDo />);
  const input = screen.getByPlaceholderText(/add todo/i);
  fireEvent.change(input, { target: { value: 'Walk dog' } });
  fireEvent.click(screen.getByText(/add/i));
  expect(screen.getByText('Walk dog')).toBeInTheDocument();
});

// 4. CompleteToDoList
it('CompleteToDoList marks todo as completed on click', () => {
  render(<CompleteToDoList />);
  const input = screen.getByPlaceholderText(/add todo/i);
  fireEvent.change(input, { target: { value: 'Buy milk' } });
  fireEvent.click(screen.getByText(/add/i));
  fireEvent.click(screen.getByText(/complete/i));
  expect(screen.getByText(/completed/i)).toBeInTheDocument();
});

// 5. FilteredToDoList
it('FilteredToDoList filters todos by status', () => {
  render(<FilteredToDoList />);
  const input = screen.getByPlaceholderText(/add todo/i);
  fireEvent.change(input, { target: { value: 'A' } });
  fireEvent.click(screen.getByText(/add/i));
  fireEvent.change(input, { target: { value: 'B' } });
  fireEvent.click(screen.getByText(/add/i));
  // Complete one
  fireEvent.click(screen.getAllByText(/complete/i)[0]);
  // Filter completed
  fireEvent.click(screen.getByText(/completed/i));
  expect(screen.getByText('A')).toBeInTheDocument();
  expect(screen.queryByText('B')).not.toBeInTheDocument();
  // Filter active
  fireEvent.click(screen.getByText(/active/i));
  expect(screen.getByText('B')).toBeInTheDocument();
  expect(screen.queryByText('A')).not.toBeInTheDocument();
});

// 6. ActiveCount
it('ActiveCount shows number of active todos', () => {
  render(<ActiveCount todos={[
    { id: 1, title: 'A', completed: false },
    { id: 2, title: 'B', completed: true }
  ]} />);
  expect(screen.getByText(/1 active/i)).toBeInTheDocument();
});

// 7. StyledToDoItem
it('StyledToDoItem applies special style to completed todos', () => {
  render(<StyledToDoItem todo={{ id: 1, title: 'Test', completed: true }} />);
  const item = screen.getByText('Test');
  expect(item.className).toMatch(/completed/i);
});

// 8. FetchToDos
it('FetchToDos fetches and displays todos from API', async () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve([
        { id: 1, title: 'Fetched', completed: false }
      ])
    })
  );
  render(<FetchToDos />);
  expect(await screen.findByText('Fetched')).toBeInTheDocument();
  global.fetch.mockRestore();
});

// 9. Card
it('Card wraps children in a styled div', () => {
  render(<Card><span>Content</span></Card>);
  expect(screen.getByText('Content')).toBeInTheDocument();
  // Check for .card class (if exists)
  expect(screen.getByText('Content').parentElement.className).toMatch(/card/i);
});

// 10. AddToDoForm
it('AddToDoForm adds todo and clears input on submit', () => {
  render(<AddToDoForm />);
  const input = screen.getByPlaceholderText(/add todo/i);
  fireEvent.change(input, { target: { value: 'test' } });
  fireEvent.click(screen.getByText(/submit/i));
  expect(screen.getByText('test')).toBeInTheDocument();
  expect(input.value).toBe('');
}); 