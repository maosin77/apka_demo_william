import React from 'react';
import { useCookies } from 'react-cookie';
import styles from './CookiesBar.module.css';

const CookiesBar: React.FC = () => {
  const [cookies, setCookie] = useCookies(['williamCookiesBar']);
  const areCookiesAllowed = cookies.williamCookiesBar;

  const allowCookies = () => {
    const maxAgeInSeconds = 60 * 60 * 24 * 30;

    setCookie('williamCookiesBar', true, {
      path: '/',
      maxAge: maxAgeInSeconds,
    });
  };

  if (areCookiesAllowed) {
    return <></>;
  }

  return (
    <div className={styles.container}>
      <p>
        Używamy ciasteczek, aby poprawić jakość naszej aplikacji! Jednak
        potrzebujemy do tego Twojej zgody!
      </p>
      <button type="button" onClick={allowCookies}>
        Zgadzam się
      </button>
    </div>
  );
};

export default CookiesBar;
