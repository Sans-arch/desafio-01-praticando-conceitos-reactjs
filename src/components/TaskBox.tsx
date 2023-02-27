import styles from './TaskBox.module.css';

import { Task } from './Task';
import { EmptyTasks } from './EmptyTasks';
import { ITask } from '../App';

interface TaskBoxProps {
  tasksList: Array<ITask>;
  onDeleteTask: (taskId: number) => void;
  onDoneTask: (id: number) => void;
}

export function TaskBox({ tasksList, onDeleteTask, onDoneTask }: TaskBoxProps) {
  const tasksQuantity = tasksList.length;
  const doneTasksQuantity = tasksList.filter(task => task.isDone).length;

  function deleteTask(id: number) {
    onDeleteTask(id);
  }

  return (
    <div className={styles.tasksContainer}>
      <div className={styles.tasksCounter}>
        <p className={styles.createdTasks}>Tarefas criadas <span className={styles.counter}>{tasksQuantity}</span></p>
        <p className={styles.doneTasks}>
          Concluídas
          <span className={styles.counter}>
            {doneTasksQuantity > 0 ? `${doneTasksQuantity} de ${tasksQuantity}` : 0}
          </span>
        </p>
      </div>
 
      <div>
        {!tasksList.length && <EmptyTasks />}
        {tasksList.map(task => (
          <Task 
            key={task.id} 
            content={task}
            onDeleteTask={deleteTask}
            onDoneTask={onDoneTask}
          />
        ))}
      </div>
    </div>
  );
}