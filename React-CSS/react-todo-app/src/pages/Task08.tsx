import React from 'react';
import TaskWrapper from './TaskWrapper';
import { FetchToDos } from '../solutions/task-08/FetchToDos';

const Task08: React.FC = () => (
  <TaskWrapper title="Task 8: Fetch ToDos from API">
    <FetchToDos />
  </TaskWrapper>
);

export default Task08; 