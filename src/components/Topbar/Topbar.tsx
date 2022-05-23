import SearchBox from 'components/SearchBox/SearchBox';
import { useUser } from 'context/UserContext';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Topbar.module.css';

const Topbar: React.FC = () => {
  const { isLogged, handleLogout } = useUser();

  return (
    <nav className={styles.container}>
      <div>william-demo</div>
      <SearchBox />
      <div>
        {!isLogged && <Link to="/login">Zaloguj</Link>}
        {isLogged && (
          <>
            <Link to="/addLawFirm">Dodaj kancelarie</Link>
            <button type="button" onClick={handleLogout}>
              Wyloguj
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Topbar;
