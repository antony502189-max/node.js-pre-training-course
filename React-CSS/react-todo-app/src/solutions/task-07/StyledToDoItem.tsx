import React from 'react';
import { TodoItemProps } from '../../types';
import './StyledToDoItem.css';

/**
 * Task 7: StyledToDoItem Component
 * 
 * Theory: CSS-in-JS and Styling in React
 * 
 * React provides several approaches for styling components. Each has its own advantages and use cases.
 * Understanding these patterns helps you choose the right styling solution for your project.
 * 
 * Styling Approaches in React:
 * 
 * 1. CSS Modules:
 *    - Scoped CSS classes to prevent conflicts
 *    - Import CSS files as objects
 *    - Example: import styles from './Component.module.css'
 *    - Usage: <div className={styles.container}>
 * 
 * 2. Inline Styles:
 *    - JavaScript objects with camelCase properties
 *    - Good for dynamic styles based on props/state
 *    - Example: style={{ color: 'red', fontSize: '16px' }}
 * 
 * 3. CSS-in-JS Libraries:
 *    - styled-components, emotion, etc.
 *    - Dynamic styles based on props
 *    - Example: const StyledButton = styled.button`
 *      background: ${props => props.primary ? 'blue' : 'gray'};
 *    `;
 * 
 * 4. Regular CSS:
 *    - Global styles or component-specific files
 *    - Simple but can cause naming conflicts
 *    - Use BEM or other naming conventions
 * 
 * Conditional Styling Patterns:
 * 
 * 1. Conditional Classes:
 *    - className={`todo-item ${isCompleted ? 'completed' : ''}`}
 *    - className={isCompleted ? 'todo-item completed' : 'todo-item'}
 * 
 * 2. Conditional Inline Styles:
 *    - style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}
 * 
 * 3. Dynamic CSS Variables:
 *    - style={{ '--opacity': isCompleted ? '0.5' : '1' }}
 * 
 * Key Concepts:
 * - Choose styling approach based on project needs
 * - Consider maintainability and team preferences
 * - Use CSS Modules for component-scoped styles
 * - Keep styles close to components
 */
export const StyledToDoItem: React.FC<TodoItemProps> = ({ todo }) => {
  // TODO: Implement the StyledToDoItem component
  // 
  // Requirements:
  // 1. Display the todo title and completion status
  // 2. Apply different styles for completed vs active todos
  // 3. Use CSS classes for styling
  // 4. Make the component visually appealing
  // 5. Handle different completion states gracefully
  // 
  // Example implementation:
  // const itemClass = `todo-item ${todo.completed ? 'completed' : ''}`;
  // 
  // CSS classes to create:
  // .todo-item { /* base styles */ }
  // .todo-item.completed { /* completed styles */ }

  return (
    <div>
      {/* TODO: Replace this with your implementation */}
      <h4>Styled ToDo Item Component</h4>
      <p>Implement conditional styling here</p>
    </div>
  );
}; 