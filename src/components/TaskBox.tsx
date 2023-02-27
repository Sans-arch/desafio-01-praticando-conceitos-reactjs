import styles from './TaskBox.module.css';

import clipboard from '../assets/clipboard.svg';

export function TaskBox() {
  return (
    <div className={styles.tasksContainer}>
      <div className={styles.tasksCounter}>
        <p className={styles.createdTasks}>Tarefas criadas <span className={styles.counter}>0</span></p>
        <p className={styles.doneTasks}>Concluídas <span className={styles.counter}>0</span></p>
      </div>

      <div className={styles.displayedTasks}>
        <img src={clipboard} alt="Clipboard" />
        <h2>Você ainda não tem tarefas cadastradas</h2>
        <h3>Crie tarefas e organize seus itens a fazer</h3>
      </div>
    </div>
  );
}