import { FC, PropsWithChildren } from 'react';
import styles from './Page.module.css';
import { useAppSelector } from '../../redux/reducer';
import { UserCard } from '../UserCard/UserCard';

export const Page: FC<PropsWithChildren> = ({ children }) => {
  const users = useAppSelector((state) => state.ui.users);
  return (
    <div className={styles.pageContainer}>
      <div className={styles.toolbarContainer}>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
      <div className={styles.contentContainer}>{children}</div>
    </div>
  );
};
