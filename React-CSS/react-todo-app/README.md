# React Todo App - Training Project

This project is a learning React.js application with TypeScript that demonstrates various React concepts through a series of tasks.

## Project Structure

```
react-todo-app/
├── public/
│   └── index.html
├── src/
│   ├── pages/                    # Page components (don't modify)
│   │   ├── Home.tsx             # Home page
│   │   ├── Navigation.tsx       # Navigation component
│   │   ├── TaskWrapper.tsx      # Task wrapper component
│   │   ├── Task01.tsx           # Task 1 page
│   │   ├── Task02.tsx           # Task 2 page
│   │   ├── Task03.tsx           # Task 3 page
│   │   ├── Task04.tsx           # Task 4 page
│   │   ├── Task05.tsx           # Task 5 page
│   │   ├── Task06.tsx           # Task 6 page
│   │   ├── Task07.tsx           # Task 7 page
│   │   ├── Task08.tsx           # Task 8 page
│   │   ├── Task09.tsx           # Task 9 page
│   │   └── Task10.tsx           # Task 10 page
│   ├── solutions/               # YOUR IMPLEMENTATIONS HERE
│   │   ├── task-01/ToDoList.tsx
│   │   ├── task-02/ToDoItem.tsx
│   │   ├── task-03/AddToDo.tsx
│   │   ├── task-04/CompleteToDoList.tsx
│   │   ├── task-05/FilteredToDoList.tsx
│   │   ├── task-06/ActiveCount.tsx
│   │   ├── task-07/StyledToDoItem.tsx
│   │   ├── task-08/FetchToDos.tsx
│   │   ├── task-09/Card.tsx
│   │   └── task-10/AddToDoForm.tsx
│   ├── types/
│   │   └── index.ts
│   ├── __tests__/
│   │   ├── App.test.tsx
│   │   └── components.test.tsx
│   ├── App.tsx                  # Main app component
│   ├── index.tsx                # Entry point
│   └── index.css                # Global styles
├── tasks/                       # Task descriptions
│   ├── task-01.mdx
│   ├── task-02.mdx
│   ├── task-03.mdx
│   ├── task-04.mdx
│   ├── task-05.mdx
│   ├── task-06.mdx
│   ├── task-07.mdx
│   ├── task-08.mdx
│   ├── task-09.mdx
│   └── task-10.mdx
├── package.json
└── tsconfig.json
```

## Installation and Setup

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Install Dependencies
```bash
cd react-todo-app
npm install
```

### Start the Application
```bash
npm start
```
The application will be available at: http://localhost:3000

### Run Tests
```bash
npm test
```

### Build for Production
```bash
npm run build
```

## Task Navigation

The application contains a navigation menu that allows switching between different tasks:

- **Home** - main page with project description
- **Task 1** - ToDoList Component
- **Task 2** - ToDoItem Component  
- **Task 3** - Add ToDo with useState
- **Task 4** - Complete ToDo List
- **Task 5** - Filtered ToDo List
- **Task 6** - Active Count
- **Task 7** - Styled ToDo Item
- **Task 8** - Fetch ToDos
- **Task 9** - Card Component
- **Task 10** - Add ToDo Form

## Working with Tasks

### How to Complete Tasks

1. **Study the Task**: Open the corresponding file in the `tasks/` folder (e.g., `task-01.mdx`)

2. **Implement the Component**: Find the corresponding component in the `src/solutions/` folder and implement the required functionality

3. **Test Your Solution**: Run tests with `npm test` to verify the implementation

4. **Check in Browser**: Start the application and navigate to the corresponding task through the navigation

### Important Notes

- **Don't modify files in `src/pages/`** - These are page components that handle routing and layout
- **Focus on `src/solutions/`** - This is where you implement your task solutions
- **Each task has its own page** - Navigate through the menu to see your implementations
- **Tests are in `src/__tests__/`** - Run tests to verify your solutions work correctly

### Example Task Completion

**Task 1: ToDoList Component**

1. Open `tasks/task-01.mdx` and study the requirements
2. Implement the component in `src/solutions/task-01/ToDoList.tsx`
3. Run tests: `npm test`
4. Open the application and navigate to Task 1 for verification

### Testing

Each component has corresponding tests in the `src/__tests__/components.test.tsx` file. Tests verify:

- Correct component rendering
- Proper user input handling
- Compliance with task requirements

## Technologies

- **React 18** - main library
- **TypeScript** - type safety
- **React Router** - navigation
- **Jest** - testing
- **React Testing Library** - component testing

## Component Structure

Each component demonstrates a specific React concept:

- **Task 1-2**: Basic components and props
- **Task 3-5**: State management with useState
- **Task 6**: Array operations and filtering
- **Task 7**: CSS modules and styling
- **Task 8**: API work and useEffect
- **Task 9**: Wrapper components and children
- **Task 10**: Forms and event handling

## TypeScript Types

Main types are defined in `src/types/index.ts`:

```typescript
export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
```

## Useful Commands

```bash
# Start development server
npm start

# Run tests in watch mode
npm test

# Run tests with coverage
npm test -- --coverage

# Build for production
npm run build

# Check TypeScript types
npx tsc --noEmit
```

## Troubleshooting

### TypeScript Errors
If TypeScript errors occur, make sure:
- All dependencies are installed: `npm install`
- React types are installed: `npm install @types/react @types/react-dom`

### Test Errors
- Check that all imports are correct
- Ensure components are exported properly
- Verify implementation matches task requirements

### Routing Issues
- Make sure BrowserRouter wraps the application
- Check route paths in Routes

## Additional Resources

- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [React Router](https://reactrouter.com/) 