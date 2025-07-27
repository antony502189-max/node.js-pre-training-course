import React from 'react';
import TaskWrapper from './TaskWrapper';
import { ToDoList } from '../solutions/task-01/ToDoList';

const Task01: React.FC = () => (
  <TaskWrapper title="Task 1: ToDoList Component">
    <ToDoList todos={[
      { id: 1, title: 'Learn React', completed: false },
      { id: 2, title: 'Build Todo App', completed: true },
      { id: 3, title: 'Write Tests', completed: false }
    ]} />
  </TaskWrapper>
);

export default Task01; 