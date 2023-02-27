import styles from './TaskBox.module.css';

import { Task } from './Task';
import { EmptyTasks } from './EmptyTasks';

interface TaskBoxProps {
  tasksList: Array<string>;
}

export function TaskBox({ tasksList }: TaskBoxProps) {
  const tasksQuantity = tasksList.length;

  return (
    <div className={styles.tasksContainer}>
      <div className={styles.tasksCounter}>
        <p className={styles.createdTasks}>Tarefas criadas <span className={styles.counter}>{tasksQuantity}</span></p>
        <p className={styles.doneTasks}>Concluídas <span className={styles.counter}>0</span></p>
      </div>
 
      <div>
        {!tasksList.length && <EmptyTasks />}
        {tasksList.map(task => (
          <Task key={task} content={task} />
        ))}
      </div>
    </div>
  );
}