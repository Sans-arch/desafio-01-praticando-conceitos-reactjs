import { Trash } from 'phosphor-react';
import styles from './Task.module.css';

interface TaskProps {
  content: string;
}

export function Task({ content }: TaskProps) {
  return (
    <div className={styles.task}>
      <input type="checkbox" className={styles.checkbox} />
      <p>{content}</p>
      <Trash size={18} />
    </div>
  );
}