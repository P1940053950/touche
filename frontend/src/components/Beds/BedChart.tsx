import { CChartLine } from '@coreui/react-chartjs'



// Assuming you have a function to generate random values
const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

// Function to generate an array of random values for a dataset
const generateRandomData = () => Array.from({ length: 7 }, () => random(50, 200));

const RoomAvailabilityChart = () => {
    return (
        <CChartLine
            data={{
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                        label: 'My First dataset',
                        backgroundColor: 'rgba(220, 220, 220, 0.2)',
                        borderColor: 'rgba(220, 220, 220, 1)',
                        pointBackgroundColor: 'rgba(220, 220, 220, 1)',
                        pointBorderColor: '#fff',
                        data: [random(), random(), random(), random(), random(), random(), random()],
                    },
                    {
                        label: 'My Second dataset',
                        backgroundColor: 'rgba(151, 187, 205, 0.2)',
                        borderColor: 'rgba(151, 187, 205, 1)',
                        pointBackgroundColor: 'rgba(151, 187, 205, 1)',
                        pointBorderColor: '#fff',
                        data: [random(), random(), random(), random(), random(), random(), random()],
                    },
                ],
            }}
        />
    );
};

export default RoomAvailabilityChart;
