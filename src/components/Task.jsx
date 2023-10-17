/* eslint-disable react/prop-types */
import { useState } from 'react';

const Task = ({ task, deleteTask, editTask, updateStatus }) => {
  const [isEditing, setEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);
  const [editedStatus, setEditedStatus] = useState(task.status);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    editTask(task.id, editedTitle);
    updateStatus(task.id, editedStatus);
    setEditing(false);
  };

  const handleTitleChange = (e) => {
    setEditedTitle(e.target.value);
  };

  const handleStatusChange = (e) => {
    setEditedStatus(e.target.value);
  };

  return (
    <div className="task-card">
      <div className="task-info">
        {isEditing ? (
          <div>
            <input
              type="text"
              value={editedTitle}
              onChange={handleTitleChange}
            />
            <select value={editedStatus} onChange={handleStatusChange}>
              <option value="not-started">Not Started</option>
              <option value="in-progress">In Progress</option>
              <option value="Finished">Finished</option>
            </select>
          </div>
        ) : (
          <h3>{task.title}</h3>
        )}
        <span className={`status ${task.status.toLowerCase()}`}>
          {task.status}
        </span>
      </div>

      <div className="task-actions">
        <button className="remove-btn" onClick={() => deleteTask(task.id)}>
          Remove
        </button>
        {isEditing ? (
          <button className="save-btn" onClick={handleSave}>
            Save
          </button>
        ) : (
          <button className="edit-btn" onClick={handleEdit}>
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default Task;
