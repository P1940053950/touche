/* eslint-disable @typescript-eslint/no-explicit-any */
import Paper from '@mui/material/Paper';
import {
  EditingState,
  IntegratedEditing,
  ViewState,
} from '@devexpress/dx-react-scheduler';
import { styled, alpha } from '@mui/material/styles';
import {
  Scheduler,
  DayView,
  WeekView,
  MonthView,
  Appointments,
  Toolbar,
  DateNavigator,
  TodayButton,
  ViewSwitcher,
  ConfirmationDialog,
  AppointmentTooltip,
  AppointmentForm,
  Resources,
} from '@devexpress/dx-react-scheduler-material-ui';
import { FC } from 'react';
import { useAppSelector } from '../../redux/reducer';
import { SchedulerDataArray } from '../Beds/types';

const PREFIX = 'TreatmentCalendar';

const classes = {
  todayCell: `${PREFIX}-todayCell`,
  weekendCell: `${PREFIX}-weekendCell`,
  today: `${PREFIX}-today`,
  weekend: `${PREFIX}-weekend`,
};

// https://mui.com/material-ui/customization/default-theme/
const StyledWeekViewTimeTableCell = styled(WeekView.TimeTableCell)(
  ({ theme }) => ({
    [`&.${classes.todayCell}`]: {
      backgroundColor: alpha(theme.palette.primary.main, 0.1),
      '&:hover': {
        backgroundColor: alpha(theme.palette.primary.main, 0.14),
      },
      '&:focus': {
        backgroundColor: alpha(theme.palette.primary.main, 0.16),
      },
    },
    [`&.${classes.weekendCell}`]: {
      backgroundColor: alpha(theme.palette.action.disabledBackground, 0.04),
      '&:hover': {
        backgroundColor: alpha(theme.palette.action.disabledBackground, 0.04),
      },
      '&:focus': {
        backgroundColor: alpha(theme.palette.action.disabledBackground, 0.04),
      },
    },
  }),
);

const StyledWeekViewDayScaleCell = styled(WeekView.DayScaleCell)(
  ({ theme }) => ({
    [`&.${classes.today}`]: {
      backgroundColor: alpha(theme.palette.primary.main, 0.16),
    },
    [`&.${classes.weekend}`]: {
      backgroundColor: alpha(theme.palette.action.disabledBackground, 0.06),
    },
  }),
);

const TimeTableCell = (props: any) => {
  const { startDate } = props;
  const date = new Date(startDate);

  if (date.getDate() === new Date().getDate()) {
    return (
      <StyledWeekViewTimeTableCell {...props} className={classes.todayCell} />
    );
  }
  if (date.getDay() === 0 || date.getDay() === 6) {
    return (
      <StyledWeekViewTimeTableCell {...props} className={classes.weekendCell} />
    );
  }
  return <StyledWeekViewTimeTableCell {...props} />;
};

const DayScaleCell = (props: any) => {
  const { startDate, today } = props;

  if (today) {
    return <StyledWeekViewDayScaleCell {...props} className={classes.today} />;
  }
  if (startDate.getDay() === 0 || startDate.getDay() === 6) {
    return (
      <StyledWeekViewDayScaleCell {...props} className={classes.weekend} />
    );
  }
  return <StyledWeekViewDayScaleCell {...props} />;
};

export const Calendar: FC<{
  currentDate: Date;
  schedulerData: SchedulerDataArray;
  viewType: 'day' | 'week' | 'month' | 'switcher';
  onCommitChanges: (...args: any[]) => void;
}> = ({ schedulerData, currentDate, viewType, onCommitChanges }) => {
  const machineResources = useAppSelector((state) => state.ui.machineResources);
  return (
    <Paper>
      <Scheduler data={schedulerData} firstDayOfWeek={1}>
        <ViewState defaultCurrentDate={currentDate} />
        <EditingState onCommitChanges={onCommitChanges} />
        <IntegratedEditing />
        {(viewType === 'day' || viewType === 'switcher') && <DayView />}
        {(viewType === 'week' || viewType === 'switcher') && (
          <WeekView
            timeTableCellComponent={TimeTableCell}
            dayScaleCellComponent={DayScaleCell}
          />
        )}
        {(viewType === 'month' || viewType === 'switcher') && <MonthView />}
        <Toolbar />
        {viewType === 'switcher' && <ViewSwitcher />}
        <ConfirmationDialog />
        <DateNavigator />
        <TodayButton />
        <Appointments />
        <AppointmentTooltip showOpenButton showDeleteButton />
        <AppointmentForm />
        <Resources data={[machineResources]} mainResourceName={'machine'} />
      </Scheduler>
    </Paper>
  );
};
