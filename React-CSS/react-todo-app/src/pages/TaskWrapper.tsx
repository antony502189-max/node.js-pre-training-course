import React from 'react';

interface TaskWrapperProps {
  children: React.ReactNode;
  title: string;
}

const TaskWrapper: React.FC<TaskWrapperProps> = ({ children, title }) => (
  <div className="container">
    <div className="task-section">
      <h2 className="task-title">{title}</h2>
      {children}
    </div>
  </div>
);

export default TaskWrapper; 