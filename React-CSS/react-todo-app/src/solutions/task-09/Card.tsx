import React from 'react';
import './Card.css';

/**
 * Task 9: Card Component
 * 
 * Theory: React Children Prop and Component Composition
 * 
 * The children prop is a special prop that allows you to pass components or elements as props
 * to other components. This enables component composition, which is a powerful pattern for
 * creating reusable and flexible components.
 * 
 * Children Prop Patterns:
 * 
 * 1. Basic Children:
 *    - Pass any JSX as children
 *    - Access via props.children
 *    - Example: <Card>Hello World</Card>
 * 
 * 2. Multiple Children:
 *    - Pass multiple elements
 *    - Children can be any valid JSX
 *    - Example: <Card><h1>Title</h1><p>Content</p></Card>
 * 
 * 3. Conditional Children:
 *    - Render children conditionally
 *    - Use logical operators or ternary
 *    - Example: {showContent && <div>Content</div>}
 * 
 * 4. Children as Functions (Render Props):
 *    - Pass functions as children
 *    - Component calls function with data
 *    - Example: <DataFetcher>{data => <div>{data}</div>}</DataFetcher>
 * 
 * Component Composition Benefits:
 * 
 * 1. Reusability:
 *    - Same wrapper, different content
 *    - Example: Card can wrap any content
 * 
 * 2. Flexibility:
 *    - Content is determined by parent
 *    - Component doesn't need to know about content
 * 
 * 3. Separation of Concerns:
 *    - Wrapper handles styling/layout
 *    - Content handles business logic
 * 
 * 4. Type Safety:
 *    - Use React.ReactNode for children type
 *    - TypeScript provides good support
 * 
 * Common Composition Patterns:
 * 
 * 1. Layout Components:
 *    - Card, Container, Wrapper
 *    - Handle styling and positioning
 * 
 * 2. Higher-Order Components:
 *    - Add functionality to components
 *    - Example: withLoading, withError
 * 
 * 3. Compound Components:
 *    - Related components work together
 *    - Example: Form, FormField, FormButton
 * 
 * Key Concepts:
 * - Children prop enables composition
 * - Use React.ReactNode for children type
 * - Composition is more flexible than inheritance
 * - Keep components focused and single-purpose
 */
export const Card: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // TODO: Implement the Card component
  // 
  // Requirements:
  // 1. Create a reusable card wrapper component
  // 2. Accept children as props
  // 3. Apply consistent styling to all cards
  // 4. Make the component flexible for any content
  // 5. Use proper TypeScript typing for children
  // 
  // Example implementation:
  // return (
  //   <div className="card">
  //     {children}
  //   </div>
  // );
  // 
  // CSS to create:
  // .card {
  //   border: 1px solid #ccc;
  //   border-radius: 8px;
  //   padding: 16px;
  //   margin: 8px;
  //   box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  // }

  return (
    <div>
      {/* TODO: Replace this with your implementation */}
      <h4>Card Component</h4>
      <p>Implement component composition with children prop here</p>
    </div>
  );
}; 