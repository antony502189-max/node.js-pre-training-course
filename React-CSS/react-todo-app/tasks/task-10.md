---
topic: "Form Submission"
taskNumber: 10
---

## Task 10: Controlled Form to Add ToDo

**Description:**  
Create a controlled form with an input and a submit button. On submit, add a new todo to the list and clear the input. The component should handle form submission and state management.

**Requirements:**
- Use `useState` to manage form input value and todos list
- Create a controlled input field with placeholder "Add todo"
- Include a "Submit" button for form submission
- Handle form submission to add new todo
- Clear input field after successful submission
- Display all todos in a list
- Export the component as `export const AddToDoForm`
- Prevent default form behavior and handle submission manually

**Example:**
```jsx
// User types "test", clicks submit, sees "test" in the list, input is cleared
```

**Theoretical Questions:**
1. What is a controlled component in React?
2. How do you handle form submission in React?
3. What is the difference between controlled and uncontrolled form inputs? 