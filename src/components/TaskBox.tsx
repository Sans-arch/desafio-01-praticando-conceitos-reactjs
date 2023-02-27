import styles from './TaskBox.module.css';

import { Task } from './Task';
import { EmptyTasks } from './EmptyTasks';

export function TaskBox() {
  return (
    <div className={styles.tasksContainer}>
      <div className={styles.tasksCounter}>
        <p className={styles.createdTasks}>Tarefas criadas <span className={styles.counter}>0</span></p>
        <p className={styles.doneTasks}>Concluídas <span className={styles.counter}>0</span></p>
      </div>
 
      <div>
        {/* <EmptyTasks /> */}
        <Task />
        <Task />
        <Task />
        <Task />
      </div>
    </div>
  );
}