import { FC } from 'react';
import { User } from '../Beds/types';
import { alpha, styled } from '@mui/material/styles';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Email from '@mui/icons-material/Email';
import Phone from '@mui/icons-material/Phone';
import Vaccines from '@mui/icons-material/Vaccines';

const StyledCardContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: '12px',
  width: '80%',
  boxSizing: 'border-box',
  borderRadius: '4px',
  boxShadow: `0px 0px 10px 0px ${alpha(theme.palette.primary.dark, 1)}`,
  background: alpha(theme.palette.primary.light, 0.8),

  '&:hover': {
    background: theme.palette.action.hover,
  },
}));

const StyledPatientTitle = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '8px',
  color: theme.palette.primary.dark,
}));

const StyledPersonAddIcon = styled(PersonAddIcon)(({ theme }) => ({
  marginRight: '8px',
  width: '24px',
  borderRadius: '50%',
  padding: '4px',
  color: theme.palette.primary.dark,
  background: alpha(theme.palette.primary.main, 0.8),
}));

const iconStyle = {
  marginRight: '8px',
  width: '18px',
  marginBottom: '-5px',
};
const StyledEmailIcon = styled(Email)(({ theme }) => iconStyle);
const StyledPhoneIcon = styled(Phone)(({ theme }) => iconStyle);
const StyledVaccinesIcon = styled(Vaccines)(({ theme }) => iconStyle);

export const UserCard: FC<{ user: User }> = ({ user }) => {
  return (
    <StyledCardContainer>
      <StyledPatientTitle>
        <StyledPersonAddIcon />
        {user.label}
      </StyledPatientTitle>
      <div>
        <StyledEmailIcon />
        {user.email}
      </div>
      <div>
        <StyledPhoneIcon />
        {user.phoneNumber}
      </div>
      <div>
        <StyledVaccinesIcon />
        {user.cancerType}
      </div>
    </StyledCardContainer>
  );
};
