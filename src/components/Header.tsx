import logo from '../assets/logo.svg';

import styles from './Header.module.css';

export function Header() {
  return (
    <div className={styles.headerApplication}>
      <img src={logo} alt="Logotipo da aplicação" />
    </div>
  );
}