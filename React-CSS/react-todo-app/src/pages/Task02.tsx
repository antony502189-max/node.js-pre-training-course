import React from 'react';
import TaskWrapper from './TaskWrapper';
import { ToDoItem } from '../solutions/task-02/ToDoItem';

const Task02: React.FC = () => (
  <TaskWrapper title="Task 2: ToDoItem Component">
    <div>
      <ToDoItem todo={{ id: 1, title: 'Completed Task', completed: true }} />
      <ToDoItem todo={{ id: 2, title: 'Active Task', completed: false }} />
    </div>
  </TaskWrapper>
);

export default Task02; 