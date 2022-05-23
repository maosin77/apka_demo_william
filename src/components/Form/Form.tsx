import React from 'react';
import styles from './Form.module.css';

interface FormProps {
  header: string;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  children: React.ReactNode;
}

const Form: React.FC<FormProps> = ({ header, onSubmit, children }) => {
  return (
    <form className={styles.container} onSubmit={onSubmit}>
      <h2 className={styles.formHeader}>{header}</h2>
      {children}
    </form>
  );
};

export default Form;
