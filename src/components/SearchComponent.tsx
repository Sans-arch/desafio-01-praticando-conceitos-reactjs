import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, useState } from "react";

import styles from "./SearchComponent.module.css";

interface SearchComponentProps {
  onAddTask: (task: string) => void;
}

export function SearchComponent({ onAddTask }: SearchComponentProps) {
  const [taskText, setTaskText] = useState("");

  function handleTaskText(event: ChangeEvent<HTMLInputElement>) {
    setTaskText(event.target.value);
  }

  function handleCreateTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onAddTask(taskText);
    setTaskText("");
  }

  return (
    <form className={styles.taskForm} onSubmit={handleCreateTask}>
      <input 
        type="text" 
        placeholder="Adicione uma nova tarefa"
        value={taskText}
        onChange={handleTaskText} 
      />
      <button 
        type="submit"
      >
        Criar
        <PlusCircle size={18} />
      </button>
    </form>
  );
}
