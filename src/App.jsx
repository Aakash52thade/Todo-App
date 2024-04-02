// App.js

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import TaskInput from './component/TaskInput';
import TaskList from './component/TaskList';
import taskReducer from './redux/reducer';

const store = createStore(taskReducer);

const App = () => {
  return (
    <Provider store={store}>
      <div style={styles.container}>
        <h1 style={styles.heading}>Todo App</h1>
        <div style={styles.todoContainer}>
          <TaskInput />
          <TaskList />
        </div>
      </div>
    </Provider>
  );
};

export default App;

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh',
    padding: '20px',
    background: '#f0f0f0',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  todoContainer: {
    marginTop: '50px', // Adjust the top margin as needed
  },
};
