import { PlusCircle } from 'phosphor-react';

import styles from './SearchComponent.module.css';

export function SearchComponent() {
  return (
    <form className={styles.taskForm}>
      <input type="text" placeholder='Adicione uma nova tarefa' />
      <button type="submit">
        Criar
        <PlusCircle size={16} />
      </button>
    </form>
  );
}