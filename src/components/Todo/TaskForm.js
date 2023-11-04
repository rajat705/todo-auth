import React, { useState } from 'react';

function TaskForm({ onAddTask }) {
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    // Implement task creation logic here
    onAddTask(newTask);
    setNewTask('');
  };

  return (
    <div>
      <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
}

export default TaskForm;
