import React from 'react';
import styles from './Input.module.css';

interface ReusableInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

const Input: React.FC<ReusableInputProps> = ({ error, ...inputProps }) => {
  return (
    <input
      {...inputProps}
      className={[styles.input, error ? styles.error : ''].join(' ')}
    />
  );
};
export default Input;
