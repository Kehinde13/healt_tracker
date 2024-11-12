"use client"
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

// Register necessary components
ChartJS.register(ArcElement, Tooltip, Legend);


const data = {
  labels: ['Achieved', 'Goals'],
  datasets: [
    {
      label: 'Statistics',
      data: [10, 6],
      backgroundColor: [
        'rgb(128, 128, 128)',
        'rgb(0, 0, 0)',
      ],
      hoverOffset: 4,
    },
  ],
};

const DoughnutChart = () => {
  return (
    <div style={{ width: '100%', maxWidth: '400px', margin: '0 auto' }}>
      <Doughnut data={data} />
    </div>
  );
};

export default DoughnutChart;
