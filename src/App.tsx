import { Header } from './components/Header';
import { SearchComponent } from './components/SearchComponent';

import './global.css';
import styles from './App.module.css';
import { TaskBox } from './components/TaskBox';

function App() {
  return (
    <>
      <Header />
      <div className={styles.applicationContainer}>
        <SearchComponent />
        <TaskBox />
      </div>
    </>
  )
}

export default App
