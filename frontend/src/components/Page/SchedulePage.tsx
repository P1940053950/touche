/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, PropsWithChildren } from 'react';
import styles from './Page.module.css';
import { UserCard } from '../UserCard/UserCard';
import { useFetchPatientsQuery } from '../../redux/apiSlice';
import { styled } from '@mui/material';

const StyledToolbarContainer = styled('div')(({ theme }) => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '8px',
  overflowY: 'scroll',
}));

export const SchedulePage: FC<PropsWithChildren> = ({ children }) => {
  // const users = useAppSelector((state) => state.ui.users);
  const users = useFetchPatientsQuery(100).data?.items ?? [];
  const mappedUsers = users.map((user: any) => {
    return {
      id: user.name,
      label: user.name,
      email: user.cancer.name,
      phoneNumber: user.fraction_time_days,
      cancerType: user.cancer.name,
    };
  });

  return (
    <div className={styles.pageContainer}>
      <StyledToolbarContainer>
        {mappedUsers.map((user: any) => (
          <UserCard key={user.id} user={user} />
        ))}
      </StyledToolbarContainer>
      <div className={styles.contentContainer}>{children}</div>
    </div>
  );
};
