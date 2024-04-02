// TaskEditModal.js
import { useState } from 'react';
import './styles.css'; 

const TaskEditModal = ({ task, onEditSubmit, onCancel }) => {
  const [newText, setNewText] = useState(task ? task.text : '');

  const handleSubmit = () => {
    onEditSubmit(task.id, newText);
  };

  return (
    <div className="modal-container">
      <input
        type="text"
        value={newText}
        onChange={(e) => setNewText(e.target.value)}
        className="input-field"
      />
      <div className="button-container">
        <button onClick={handleSubmit} className="save-button">Save</button>
        <button onClick={onCancel} className="cancel-button">Cancel</button>
      </div>
    </div>
  );
};

export default TaskEditModal;
