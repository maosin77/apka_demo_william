import styles from './Topbar.module.css';

const Topbar = () => {
  const isLogged = true;

  return (
    <nav className={styles.container}>
      <div>william-demo</div>
      <form>
        <input placeholder="miasto" />
        <input placeholder="Zagadnienie prawne" />
        <button type="button">Szukaj</button>
      </form>
      <div>
        {!isLogged && <button type="button">Zaloguj</button>}
        {isLogged && (
          <>
            <button type="button">Dodaj kancelarie</button>
            <button type="button">Wyloguj</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Topbar;
