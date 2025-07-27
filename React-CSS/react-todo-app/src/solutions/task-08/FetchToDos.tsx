import React, { useState, useEffect } from 'react';
import { Todo } from '../../types';

/**
 * Task 8: FetchToDos Component
 * 
 * Theory: React Hooks - useEffect and Side Effects
 * 
 * useEffect is a React Hook that lets you perform side effects in function components.
 * Side effects are operations that happen outside of the normal render cycle, such as:
 * - Data fetching
 * - Subscriptions
 * - Manual DOM manipulations
 * - Timers
 * 
 * useEffect Hook Structure:
 * useEffect(() => {
 *   // Side effect code
 *   return () => {
 *     // Cleanup code (optional)
 *   };
 * }, [dependencies]);
 * 
 * useEffect Dependencies:
 * 
 * Empty Array []:
 * - Runs only once after initial render
 * - Good for one-time setup (fetching initial data)
 * - Example: useEffect(() => fetchData(), [])
 * 
 * No Dependencies:
 * - Runs after every render
 * - Usually not what you want
 * - Can cause infinite loops
 * 
 * With Dependencies [dep1, dep2]:
 * - Runs when dependencies change
 * - Good for reactive effects
 * - Example: useEffect(() => fetchData(id), [id])
 * 
 * Data Fetching Patterns:
 * 
 * 1. Loading States:
 *    - Track loading state with useState
 *    - Show loading indicator while fetching
 *    - Handle errors gracefully
 * 
 * 2. Error Handling:
 *    - Catch and handle fetch errors
 *    - Display user-friendly error messages
 *    - Provide retry mechanisms
 * 
 * 3. Cleanup:
 *    - Cancel requests if component unmounts
 *    - Clear timers and subscriptions
 *    - Prevent memory leaks
 * 
 * Key Concepts:
 * - useEffect runs after render
 * - Always consider cleanup for side effects
 * - Use dependencies array to control when effect runs
 * - Handle loading and error states
 */
export const FetchToDos: React.FC = () => {
  // TODO: Implement the FetchToDos component
  // 
  // Requirements:
  // 1. Fetch todos from an API endpoint
  // 2. Display loading state while fetching
  // 3. Handle and display any errors
  // 4. Show the fetched todos in a list
  // 5. Use useEffect for data fetching
  // 
  // Example implementation:
  // const [todos, setTodos] = useState<Todo[]>([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState<string | null>(null);
  // 
  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/todos')
  //     .then(response => response.json())
  //     .then(data => {
  //       setTodos(data.slice(0, 5)); // Limit to 5 todos
  //       setLoading(false);
  //     })
  //     .catch(err => {
  //       setError(err.message);
  //       setLoading(false);
  //     });
  // }, []);

  return (
    <div>
      {/* TODO: Replace this with your implementation */}
      <h4>Fetch ToDos Component</h4>
      <p>Implement data fetching with useEffect here</p>
    </div>
  );
}; 