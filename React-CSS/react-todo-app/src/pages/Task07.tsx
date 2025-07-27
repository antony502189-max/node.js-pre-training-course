import React from 'react';
import TaskWrapper from './TaskWrapper';
import { StyledToDoItem } from '../solutions/task-07/StyledToDoItem';

const Task07: React.FC = () => (
  <TaskWrapper title="Task 7: Styled ToDo Item">
    <div>
      <StyledToDoItem todo={{ id: 1, title: 'Styled Active Task', completed: false }} />
      <StyledToDoItem todo={{ id: 2, title: 'Styled Completed Task', completed: true }} />
    </div>
  </TaskWrapper>
);

export default Task07; 