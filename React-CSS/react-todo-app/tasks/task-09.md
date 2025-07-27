---
topic: "Component Composition"
taskNumber: 9
---

## Task 9: Wrap ToDoList in a Card Component

**Description:**  
Create a `Card` component that wraps its children in a styled div. Use it to wrap the ToDoList. The component should accept children and apply styling.

**Requirements:**
- Accept `children` prop to render nested content
- Wrap children in a styled div element
- Apply CSS class for styling (e.g., "card" class)
- Export the component as `export const Card`
- Handle any type of children content
- Use proper React children rendering

**Example:**
```jsx
<Card><ToDoList todos={...} /></Card>
// Output: <div class="card">...</div>
```

**Theoretical Questions:**
1. What is component composition in React?
2. How do you use the children prop in React components?
3. What are the benefits of creating reusable wrapper components? 