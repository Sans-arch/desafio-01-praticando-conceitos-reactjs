import { Header } from './components/Header';
import { SearchComponent } from './components/SearchComponent';

import './global.css';
import styles from './App.module.css';

function App() {
  return (
    <>
      <Header />
      <div className={styles.applicationContainer}>
        <SearchComponent />
      </div>
    </>
  )
}

export default App
