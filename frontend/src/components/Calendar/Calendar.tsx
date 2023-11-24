/* eslint-disable @typescript-eslint/no-explicit-any */
import Paper from '@mui/material/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
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
} from '@devexpress/dx-react-scheduler-material-ui';
import { FC } from 'react';

interface SchedulerDataPoint {
  startDate: Date;
  endDate: Date;
  title: string;
}
export type SchedulerDataArray = Array<SchedulerDataPoint>;

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
  viewType?: 'day' | 'week' | 'month' | 'switcher';
}> = ({ schedulerData, currentDate, viewType = 'week' }) => (
  <Paper>
    <Scheduler data={schedulerData}>
      <ViewState defaultCurrentDate={currentDate} />
      {(viewType === 'day' || viewType === 'switcher') && (
        <DayView startDayHour={9} endDayHour={14} />
      )}
      {(viewType === 'week' || viewType === 'switcher') && (
        <WeekView
          startDayHour={9}
          endDayHour={19}
          timeTableCellComponent={TimeTableCell}
          dayScaleCellComponent={DayScaleCell}
        />
      )}
      {(viewType === 'month' || viewType === 'switcher') && <MonthView />}
      <Toolbar />
      {viewType === 'switcher' && <ViewSwitcher />}
      <DateNavigator />
      <TodayButton />
      <Appointments />
    </Scheduler>
  </Paper>
);
