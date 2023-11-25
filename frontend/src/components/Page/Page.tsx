import { FC, ReactElement } from 'react';
import styles from './Page.module.css';

export const Page: FC<{
  topLeft: ReactElement;
  topRight: ReactElement;
  bottomLeft: ReactElement;
  bottomRight: ReactElement;
}> = ({ bottomLeft, bottomRight, topLeft, topRight }) => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.topLeft}>{topLeft}</div>
      <div className={styles.topRight}>{topRight}</div>
      <div className={styles.bottomLeft}>{bottomLeft}</div>
      <div className={styles.bottomRight}>{bottomRight}</div>
    </div>
  );
};
