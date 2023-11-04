import React from 'react';
import Task from './Task';

function TaskList({ tasks, onUpdate, onDelete }) {
  return (
    <ul>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onUpdate={onUpdate} onDelete={onDelete} />
      ))}
    </ul>
  );
}

export default TaskList;
