---
topic: "Event Handling"
taskNumber: 4
---

## Task 4: Mark ToDo as Completed (onClick)

**Description:**  
Add a button to each ToDo item in the list. Clicking the button should mark the todo as completed (use state and event handling). The component should allow adding todos and marking them as completed.

**Requirements:**
- Use `useState` to manage todos state
- Include input field with placeholder "Add todo"
- Include "Add" button to add new todos
- Display each todo with a "Complete" button
- Clicking "Complete" should mark the todo as completed
- Show completion status visually
- Export the component as `export const CompleteToDoList`
- Handle both adding and completing todos

**Example:**
```jsx
// User clicks "Complete" on "Buy milk", item visually changes to completed
```

**Theoretical Questions:**
1. How do you handle events in React functional components?
2. What is the difference between onClick and onChange events?
3. How do you update specific items in an array state in React? 