import { Header } from './components/Header';
import { SearchComponent } from './components/SearchComponent';

import './global.css';
import styles from './App.module.css';
import { TaskBox } from './components/TaskBox';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState(Array<string>);

  function createNewTask(task: string) {
    setTasks(prevState => [...prevState, task]);
  }

  return (
    <>
      <Header />
      <div className={styles.applicationContainer}>
        <SearchComponent onAddTask={createNewTask} />
        <TaskBox tasksList={tasks} />
      </div>
    </>
  )
}

export default App
