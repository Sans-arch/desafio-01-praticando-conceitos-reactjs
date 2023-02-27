import styles from './EmptyTasks.module.css';

import clipboard from '../assets/clipboard.svg';

export function EmptyTasks() {
  return (
    <div className={styles.emptyTasks}>
      <img src={clipboard} alt="Clipboard" />
      <h2>Você ainda não tem tarefas cadastradas</h2>
      <h3>Crie tarefas e organize seus itens a fazer</h3>
    </div>
  );
}