---
topic: "Component Props"
taskNumber: 2
---

## Task 2: Create a ToDoItem Component

**Description:**  
Create a component `ToDoItem` that accepts a todo object as a prop and displays its title and completed status. The component should show the todo title and indicate whether it's completed or not.

**Requirements:**
- Accept a `todo` prop with `id`, `title`, and `completed` properties
- Display the todo title
- Show completion status (completed/not completed) based on the `completed` boolean
- Export the component as `export const ToDoItem`
- Handle both completed and uncompleted todos

**Example:**
```jsx
<ToDoItem todo={{id:1, title:'Test', completed:true}} />
// Output: Test (completed)
```

**Theoretical Questions:**
1. How do you destructure props in React functional components?
2. What is the difference between controlled and uncontrolled components?
3. How can you conditionally render content in React components? 