import { useUser } from 'context/UserContext';
import styles from './LoginForm.module.css';

const LoginForm = () => {
  const { handleLogin } = useUser();

  return (
    <div className={styles.container}>
      <input placeholder="login" />
      <input placeholder="hasło" />
      <button type="button" onClick={handleLogin}>
        Zaloguj
      </button>
    </div>
  );
};

export default LoginForm;
