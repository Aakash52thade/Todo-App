// TaskList.js
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from '../redux/action';
import { editTask } from '../redux/action';
import TaskEditModal from './TaskEditModal';
import { useState } from 'react';
import './styles.css'; 

const TaskList = () => {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();
  const [editingTask, setEditingTask] = useState(null);

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  const handleEditTask = (task) => {
    setEditingTask(task);
  };

  const handleEditSubmit = (taskId, newText) => {
    dispatch(editTask(taskId, newText));
    setEditingTask(null);
  };

  return (
    <ul className="task-list">
  {tasks.map(task => (
    <li key={task.id} className="task-item">
      <div className="task-text-container">
        {task.text}
      </div>
      <div className="button-group">
        <button onClick={() => handleEditTask(task)} className="edit-button">Edit</button>
        <button onClick={() => handleDeleteTask(task.id)} className="delete-button">Delete</button>
      </div>
    </li>
  ))}
  {editingTask && (
    <TaskEditModal
      task={editingTask}
      onEditSubmit={handleEditSubmit}
      onCancel={() => setEditingTask(null)}
    />
  )}
</ul>
  );
};

export default TaskList;
