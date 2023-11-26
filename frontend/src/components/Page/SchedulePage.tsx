/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ChangeEvent,
  FC,
  PropsWithChildren,
  useCallback,
  useState,
} from 'react';
import styles from './Page.module.css';
import { UserCard } from '../UserCard/UserCard';
import { useFetchPatientsQuery } from '../../redux/apiSlice';
import { styled } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../redux/reducer';
import {
  selectSearchedUserResults,
  setUserSearchTerm,
} from '../../redux/uiSlice';
import { User } from '../Beds/types';

const StyledToolbarContainer = styled('div')(({ theme }) => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '8px',
  overflowY: 'scroll',
}));

const StyledSearchContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '8px',
}));

const StyledSearchButtonContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '8px',
}));

export const SchedulePage: FC<PropsWithChildren> = ({ children }) => {
  const dispatch = useAppDispatch();
  const users = useFetchPatientsQuery(100).data?.items ?? [];
  const [searchTerm, setSearchTerm] = useState('');
  const userSearchResults = useAppSelector((state) =>
    selectSearchedUserResults(state, users),
  );
  const handleUserSearch = useCallback(() => {
    dispatch(setUserSearchTerm(searchTerm));
  }, [dispatch, searchTerm]);

  const handleUserSearchClear = useCallback(() => {
    dispatch(setUserSearchTerm(''));
  }, [dispatch]);

  const updateSearchTerm = useCallback((evt: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(evt.currentTarget.value);
  }, []);

  return (
    <div className={styles.pageContainer}>
      <StyledToolbarContainer>
        <StyledSearchContainer>
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={updateSearchTerm}
          />
          <StyledSearchButtonContainer>
            <button onClick={handleUserSearch}>Search</button>
            <button onClick={handleUserSearchClear}>Clear</button>
          </StyledSearchButtonContainer>
        </StyledSearchContainer>
        {userSearchResults.map((user: User) => (
          <UserCard key={user.name} user={user} />
        ))}
      </StyledToolbarContainer>
      <div className={styles.contentContainer}>{children}</div>
    </div>
  );
};
