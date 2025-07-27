---
topic: "List Rendering"
taskNumber: 6
---

## Task 6: Show Active ToDo Count

**Description:**  
Display the number of active (not completed) todos above the list. The component should accept a todos array and calculate the count of uncompleted items.

**Requirements:**
- Accept `todos` prop as an array of todo objects
- Calculate the number of todos where `completed` is `false`
- Display the count in a readable format (e.g., "1 active todo")
- Handle empty arrays and edge cases
- Export the component as `export const ActiveCount`
- Use proper text formatting for singular/plural forms

**Example:**
```jsx
// If 2 todos, 1 completed, shows: 1 active todo
```

**Theoretical Questions:**
1. How do you use the filter method to count items in JavaScript?
2. What is the difference between map, filter, and reduce array methods?
3. How do you handle conditional text formatting in React components? 