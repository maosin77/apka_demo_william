import Button from 'components/Button/Button';
import Form from 'components/Form/Form';
import Input from 'components/Input/Input';
import Spacer from 'components/Spacer/Spacer';
import { useUser } from 'context/UserContext';
import React, { useState } from 'react';
import { mockedUserCredentials } from './__mockedUserCredentials';
import formStyles from '../Form/Form.module.css';
import styles from './LoginForm.module.css';

const LoginForm = () => {
  const { login } = useUser();

  const [loginForm, setLoginForm] = useState({
    login: '',
    password: '',
  });

  const [error, setError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validate = () =>
    new Promise((resolve, reject) => {
      if (
        loginForm.login === mockedUserCredentials.login &&
        loginForm.password === mockedUserCredentials.password
      ) {
        setError(false);
        setLoginForm({
          login: '',
          password: '',
        });
        resolve(true);
      } else {
        setError(true);
        reject();
      }
    });

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await validate().then(() => {
      login();
    });
  };
  return (
    <div className={styles.container}>
      <Form onSubmit={handleLogin} header="Zaloguj się">
        <Input placeholder="Login" name="login" onChange={handleChange} />
        <Input
          placeholder="Hasło"
          name="password"
          type="password"
          onChange={handleChange}
        />
        {error && (
          <p className={formStyles.errorMsg}>
            Niepoprawny login lub hasło! Spróbuj jeszcze raz. Wpisz user/pass123
          </p>
        )}
        <Spacer height={50} />
        <Button text="Zaloguj" type="submit" />
      </Form>
    </div>
  );
};

export default LoginForm;
