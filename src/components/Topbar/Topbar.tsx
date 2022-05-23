import SearchBox from 'components/SearchBox/SearchBox';
import { useUser } from 'context/UserContext';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Topbar.module.css';

const Topbar: React.FC = () => {
  const { isLogged, logout } = useUser();

  return (
    <nav className={styles.container}>
      <div>
        <Link to="/">
          <h1 className={styles.logo}>#william-demo</h1>
        </Link>
      </div>
      {/* <SearchBox /> */}
      <div>
        <Link className={styles.navBtn} to="/">
          Przeglądaj kancelarie
        </Link>
        {!isLogged && (
          <Link to="/login" className={styles.navBtn}>
            Zaloguj
          </Link>
        )}
        {isLogged && (
          <>
            <Link className={styles.navBtn} to="/addLawFirm">
              Dodaj kancelarie
            </Link>
            <button className={styles.navBtn} type="button" onClick={logout}>
              Wyloguj
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Topbar;
