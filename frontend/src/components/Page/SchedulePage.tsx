/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, PropsWithChildren } from 'react';
import styles from './Page.module.css';
import { UserCard } from '../UserCard/UserCard';
import { useFetchPatientsQuery } from '../../redux/apiSlice';

export const SchedulePage: FC<PropsWithChildren> = ({ children }) => {
  // const users = useAppSelector((state) => state.ui.users);
  const users = useFetchPatientsQuery(100).data || [];
  return (
    <div className={styles.pageContainer}>
      <div className={styles.toolbarContainer}>
        {users.map((user: any) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
      <div className={styles.contentContainer}>{children}</div>
    </div>
  );
};
