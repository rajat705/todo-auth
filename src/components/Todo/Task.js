import React, { useState } from 'react';

function Task({ task, onUpdate, onDelete }) {
  const [editing, setEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task.text);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    onUpdate(task.id, editedTask);
    setEditing(false);
  };

  return (
    <li>
      {editing ? (
        <div>
          <input type="text" value={editedTask} onChange={(e) => setEditedTask(e.target.value)} />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          {task.text}
          <button onClick={handleEdit}>Edit</button>
          <button onClick={() => onDelete(task.id)}>Delete</button>
        </div>
      )}
    </li>
  );
}

export default Task;
