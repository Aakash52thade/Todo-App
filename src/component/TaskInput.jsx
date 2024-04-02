// TaskInput.js
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/action';
import './styles.css'; // Import CSS file for styling

const TaskInput = () => {
  const [taskInput, setTaskInput] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (taskInput.trim() !== '') {
      dispatch(addTask({ id: Date.now(), text: taskInput }));
      setTaskInput('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  };

  return (
    <div className="input-container">
      <input
        type="text"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        onKeyPress={handleKeyPress}
        className="task-input"
      />
      <button onClick={handleAddTask} className="add-button">Add Task</button>
    </div>
  );
};

export default TaskInput;
