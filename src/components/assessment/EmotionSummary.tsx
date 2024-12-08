import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'Emotional Well-being',
      data: [65, 59, 80, 81, 56, 55, 70],
      fill: false,
      borderColor: 'rgb(99, 102, 241)',
      tension: 0.1,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Weekly Emotional Trend',
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      max: 100,
    },
  },
};

export default function EmotionSummary() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-4">Emotional Well-being Summary</h2>
      <div className="h-64">
        <Line options={options} data={data} />
      </div>
    </div>
  );
}