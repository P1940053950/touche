/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Autocomplete,
  Box,
  Container,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import { FC, useCallback } from 'react';
import { User } from './Bed';
import { useAppDispatch, useAppSelector } from '../../redux/reducer';
import { selectUser } from '../../redux/uiSlice';

export const UserSearchBox: FC = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.ui.users);
  const selectedUser = useAppSelector((state) => state.ui.selectedUser);

  const onSelectUser = useCallback(
    (_: any, value: User | null) => {
      dispatch(selectUser(value));
    },
    [dispatch],
  );
  return (
    <Container>
      <Box display="flex" marginTop={4} flexDirection={'column'} gap={'8px'}>
        <Paper
          elevation={3}
          style={{
            padding: 20,
            flex: 1,
            textAlign: 'center',
          }}
        >
          <Autocomplete
            options={users}
            getOptionLabel={(option) => option.label}
            renderInput={(params) => (
              <TextField {...params} label="Search Users" variant="outlined" />
            )}
            onChange={onSelectUser}
          />
        </Paper>

        <Paper
          elevation={3}
          style={{
            padding: 20,
            flex: 1,
            textAlign: 'left',
            minHeight: '150px',
          }}
        >
          <div>
            {selectedUser && (
              <>
                <Typography variant="body1" style={{ marginBottom: 8 }}>
                  Name: {selectedUser.label}
                </Typography>
                <Typography variant="body1" style={{ marginBottom: 8 }}>
                  Email: {selectedUser.email}
                </Typography>
                <Typography variant="body1" style={{ marginBottom: 8 }}>
                  Phone Number: {selectedUser.phoneNumber}
                </Typography>
                <Typography variant="body1">
                  Cancer Type: {selectedUser.cancerType}
                </Typography>
              </>
            )}
          </div>
        </Paper>
      </Box>
    </Container>
  );
};
