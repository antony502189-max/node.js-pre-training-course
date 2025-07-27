import React from 'react';
import TaskWrapper from './TaskWrapper';
import { Card } from '../solutions/task-09/Card';

const Task09: React.FC = () => (
  <TaskWrapper title="Task 9: Card Component">
    <Card>
      <h3>Card Content</h3>
      <p>This is content wrapped in a Card component.</p>
      <button>Click me</button>
    </Card>
  </TaskWrapper>
);

export default Task09; 