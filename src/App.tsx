import { useState } from "react";

import { Header } from "./components/Header";
import { SearchComponent } from "./components/SearchComponent";
import { TaskBox } from "./components/TaskBox";

import "./global.css";
import styles from "./App.module.css";

export interface ITask {
  id: number;
  content: string;
  isDone: boolean;
}

function App() {
  const [tasks, setTasks] = useState(Array<ITask>);

  function createNewTask(task: ITask) {
    setTasks((prevState) => [...prevState, task]);
  }

  function deleteTask(taskId: number) {
    setTasks((prevState) =>
      prevState.filter((taskFromList) => taskFromList.id !== taskId)
    );
  }

  function updateDoneTasks(id: number) {
    const foundTask = tasks.find(task => task.id === id);
    if (foundTask) {
      setTasks(prevState => prevState.map(task => task.id === foundTask.id ? {...task, isDone: !task.isDone } : task));
    }
  }

  return (
    <>
      <Header />
      <div className={styles.applicationContainer}>
        <SearchComponent onAddTask={createNewTask} />
        <TaskBox 
          tasksList={tasks} 
          onDeleteTask={deleteTask}
          onDoneTask={updateDoneTasks} 
        />
      </div>
    </>
  );
}

export default App;
