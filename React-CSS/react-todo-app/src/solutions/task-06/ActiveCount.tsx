import React from 'react';
import { ActiveCountProps } from '../../types';

/**
 * Task 6: ActiveCount Component
 * 
 * Theory: Props and Component Communication
 * 
 * Props are the primary way components communicate in React. They allow parent components to pass
 * data down to child components. Props are read-only and should never be modified by the receiving component.
 * 
 * Props Best Practices:
 * 1. Keep props simple and focused
 * 2. Use TypeScript interfaces to define prop types
 * 3. Provide default values when appropriate
 * 4. Destructure props for cleaner code
 * 5. Use meaningful prop names
 * 
 * Component Communication Patterns:
 * 
 * Parent to Child (Props):
 * - Parent passes data to child via props
 * - Child receives and displays data
 * - Example: <TodoList todos={todos} />
 * 
 * Child to Parent (Callback Props):
 * - Parent passes function as prop
 * - Child calls function to communicate back
 * - Example: <TodoItem onComplete={handleComplete} />
 * 
 * Sibling Communication:
 * - Both siblings receive data from common parent
 * - Parent manages shared state
 * - Example: TodoList and ActiveCount both use todos from parent
 * 
 * Data Flow Principles:
 * - Data flows down (parent to child)
 * - Events flow up (child to parent)
 * - Keep data as close to where it's used as possible
 * - Lift state up when multiple components need the same data
 * 
 * Key Concepts:
 * - Props are immutable
 * - Components should be pure functions of their props
 * - Use TypeScript for better prop validation
 * - Consider prop drilling vs context for deep data passing
 */
export const ActiveCount: React.FC<ActiveCountProps> = ({ todos }) => {
  // TODO: Implement the ActiveCount component
  // 
  // Requirements:
  // 1. Calculate the number of active (incomplete) todos
  // 2. Display the count in a user-friendly format
  // 3. Handle edge cases (empty array, all completed)
  // 4. Make the component reusable for any todos array
  // 
  // Example implementation:
  // const activeCount = todos.filter(todo => !todo.completed).length;
  // 
  // Example display:
  // "0 active todos" or "1 active todo" or "5 active todos"

  return (
    <div>
      {/* TODO: Replace this with your implementation */}
      <h4>Active Count Component</h4>
      <p>Calculate and display active todos count here</p>
    </div>
  );
}; 