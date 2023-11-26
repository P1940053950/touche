/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useCallback, useEffect } from 'react';
import { User } from '../Beds/types';
import { alpha, styled } from '@mui/material/styles';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Vaccines from '@mui/icons-material/Vaccines';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import { useSchedulePatientMutation } from '../../redux/apiSlice';
import { useAppDispatch } from '../../redux/reducer';
import { addSchedule } from '../../redux/uiSlice';

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
const StyledHourglassTopIcon = styled(HourglassTopIcon)(
  ({ theme }) => iconStyle,
);
const StyledCalendarMonthIcon = styled(CalendarMonthIcon)(
  ({ theme }) => iconStyle,
);
const StyledVaccinesIcon = styled(Vaccines)(({ theme }) => iconStyle);

export const UserCard: FC<{ user: User }> = ({ user }) => {
  const dispatch = useAppDispatch();
  const [schedulePatient, { data }] = useSchedulePatientMutation();
  const handlePatientSchedule = useCallback(() => {
    schedulePatient({
      name: user.name,
      cancerType: user.cancer.name,
      fractionTime: user.fraction_time_days,
      isUrgent: false,
    });
  }, [schedulePatient, user]);

  useEffect(() => {
    if (data) {
      dispatch(
        addSchedule({
          data,
          treatmentTimeMinutes: user.cancer.treatment_time_minutes,
        }),
      );
    }
  }, [data, dispatch, user.cancer.treatment_time_minutes]);
  return (
    <StyledCardContainer onClick={handlePatientSchedule}>
      <StyledPatientTitle>
        <StyledPersonAddIcon />
        {user?.name}
      </StyledPatientTitle>
      <div>
        <StyledCalendarMonthIcon />
        {user?.fraction_time_days} days
      </div>
      <div>
        <StyledHourglassTopIcon />
        {user?.cancer?.treatment_time_minutes} mins
      </div>
      <div>
        <StyledVaccinesIcon />
        {user?.cancer?.name}
      </div>
    </StyledCardContainer>
  );
};
