import React from 'react';
import { TodoListProps } from '../../types';

/**
 * Task 1: ToDoList Component
 * 
 * Theory: React Components and Props
 * 
 * React components are the building blocks of React applications. They are functions that return JSX
 * (JavaScript XML) to describe what should appear on the screen. Components can be either:
 * 
 * 1. Function Components (modern approach) - like this one
 * 2. Class Components (older approach)
 * 
 * Props (Properties) are how components receive data from their parent. Props are read-only and
 * should never be modified directly. They allow components to be reusable and configurable.
 * 
 * Key Concepts:
 * - Components should be pure functions (same input = same output)
 * - Props are immutable (cannot be changed)
 * - Components can receive any type of data as props
 * - Use TypeScript interfaces to define prop types
 * 
 * In this task, you'll create a component that displays a list of todos.
 * The component receives an array of todos as props and renders each one.
 */
export const ToDoList: React.FC<TodoListProps> = ({ todos }) => {
  // TODO: Implement the ToDoList component
  // 
  // Requirements:
  // 1. Display a list of todos using the todos prop
  // 2. Each todo should show its title and completion status
  // 3. Use proper HTML semantics (ul, li elements)
  // 4. Handle empty todos array gracefully
  // 
  // Example usage:
  // <ToDoList todos={[
  //   { id: 1, title: 'Learn React', completed: false },
  //   { id: 2, title: 'Build Todo App', completed: true }
  // ]} />

  return (
    <div>
      {/* TODO: Replace this with your implementation */}
      <h3>Todo List</h3>
      <p>Implement the ToDoList component here</p>
    </div>
  );
}; 