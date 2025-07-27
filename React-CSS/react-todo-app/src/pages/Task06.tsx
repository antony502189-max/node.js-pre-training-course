import React from 'react';
import TaskWrapper from './TaskWrapper';
import { ActiveCount } from '../solutions/task-06/ActiveCount';

const Task06: React.FC = () => (
  <TaskWrapper title="Task 6: Active Count">
    <ActiveCount todos={[
      { id: 1, title: 'Active Task 1', completed: false },
      { id: 2, title: 'Completed Task', completed: true },
      { id: 3, title: 'Active Task 2', completed: false }
    ]} />
  </TaskWrapper>
);

export default Task06; 