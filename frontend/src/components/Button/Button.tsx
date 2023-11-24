import { FC } from 'react';
import styles from './Button.module.css';

export const Button: FC<{ label: string }> = ({ label }) => {
  return <button className={styles.clickMe}>{label}</button>;
};
