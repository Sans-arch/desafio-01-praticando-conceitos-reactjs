import { SyntheticEvent, useState } from 'react';
import { Trash } from 'phosphor-react';
import styles from './Task.module.css';
import { ITask } from '../App';

interface TaskProps {
  content: ITask;
  onDeleteTask: (id: number) => void;
  onDoneTask: (id: number) => void;
}

export function Task({ content, onDeleteTask, onDoneTask }: TaskProps) {
  const [done, setDone] = useState(false);
  
  function handleDeleteTask(event: SyntheticEvent) {
    onDeleteTask(content.id);
  }

  function handleCompleteTask() {
    setDone(prevState => !prevState);
    onDoneTask(content.id);
  }
  
  return (
    <div className={`${styles.task} ${done && styles.doneTask}`}>
      <input 
        type="checkbox" 
        className={styles.checkbox}
        onChange={handleCompleteTask} 
      />
      <p>{content.content}</p>
      <Trash size={18} onClick={handleDeleteTask} />
    </div>
  );
}