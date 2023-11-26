import { FC } from 'react';
import { useAppSelector } from '../../redux/reducer';
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  Legend,
} from 'recharts';
import { alpha, styled } from '@mui/system';

const StyledPageContainer = styled('div')(({ theme }) => ({
  width: '100vw',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
}));

const StyledBarChart = styled(BarChart)(({ theme }) => ({
  background: alpha(theme.palette.primary.light, 0.8),
  boxShadow: `0px 0px 10px 0px ${alpha(theme.palette.primary.dark, 1)}`,
}));

export const UtilizationPage: FC = () => {
  const machineUtilizations = useAppSelector(
    (state) => state.ui.machineUtilizations,
  );
  const bars = Object.keys(machineUtilizations[0]).filter(
    (key) => key !== 'date',
  );
  const colorIndex = ['lightgreen', 'darkgreen', 'blue', 'darkblue', 'orange'];
  return (
    <StyledPageContainer>
      <h1>Machine Utilization</h1>
      <StyledBarChart width={1000} height={800} data={machineUtilizations}>
        <CartesianGrid stroke={'#888'} strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        {bars.map((bar, index) => (
          <Bar dataKey={bar} fill={colorIndex[index]} />
        ))}
      </StyledBarChart>
    </StyledPageContainer>
  );
};
