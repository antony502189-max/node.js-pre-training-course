---
topic: "React Components"
taskNumber: 1
---

## Task 1: Create a ToDoList Component

**Description:**  
Create a functional React component called `ToDoList` that accepts an array of todos as a prop and renders their titles in a list. The component should display each todo's title and completion status.

**Requirements:**
- Accept `todos` prop as an array of objects with `id`, `title`, and `completed` properties
- Render each todo item in a list format
- Display both title and completion status for each todo
- Use proper React key prop for list items
- Export the component as `export const ToDoList`

**Example:**
```jsx
<ToDoList todos={[{id:1, title:'Test', completed:false}]} />
// Output: Test - not completed
```

**Theoretical Questions:**
1. What is the difference between functional and class components in React?
2. Why is it important to use the `key` prop when rendering lists in React?
3. What are props in React and how do they enable component communication? 