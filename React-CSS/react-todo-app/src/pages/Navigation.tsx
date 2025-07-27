import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="nav-menu">
      <ul>
        <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
        <li><Link to="/task-01" className={location.pathname === '/task-01' ? 'active' : ''}>Task 1</Link></li>
        <li><Link to="/task-02" className={location.pathname === '/task-02' ? 'active' : ''}>Task 2</Link></li>
        <li><Link to="/task-03" className={location.pathname === '/task-03' ? 'active' : ''}>Task 3</Link></li>
        <li><Link to="/task-04" className={location.pathname === '/task-04' ? 'active' : ''}>Task 4</Link></li>
        <li><Link to="/task-05" className={location.pathname === '/task-05' ? 'active' : ''}>Task 5</Link></li>
        <li><Link to="/task-06" className={location.pathname === '/task-06' ? 'active' : ''}>Task 6</Link></li>
        <li><Link to="/task-07" className={location.pathname === '/task-07' ? 'active' : ''}>Task 7</Link></li>
        <li><Link to="/task-08" className={location.pathname === '/task-08' ? 'active' : ''}>Task 8</Link></li>
        <li><Link to="/task-09" className={location.pathname === '/task-09' ? 'active' : ''}>Task 9</Link></li>
        <li><Link to="/task-10" className={location.pathname === '/task-10' ? 'active' : ''}>Task 10</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation; 