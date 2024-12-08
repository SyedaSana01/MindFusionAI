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
      label: 'Well-being Score',
      data: [75, 68, 82, 84, 79, 85, 88],
      borderColor: 'rgb(99, 102, 241)',
      tension: 0.4,
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
      text: 'Weekly Well-being Trend',
    },
  },
  scales: {
    y: {
      min: 0,
      max: 100,
      ticks: {
        stepSize: 20,
      },
    },
  },
};

export default function WeeklyReport() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-4">Weekly Progress Report</h2>
      <div className="h-64">
        <Line options={options} data={data} />
      </div>
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="p-4 bg-green-50 rounded-lg">
          <p className="text-sm font-medium text-green-800">Highest Score</p>
          <p className="text-2xl font-semibold text-green-900">88</p>
          <p className="text-sm text-green-700">Sunday</p>
        </div>
        <div className="p-4 bg-indigo-50 rounded-lg">
          <p className="text-sm font-medium text-indigo-800">Weekly Average</p>
          <p className="text-2xl font-semibold text-indigo-900">80.1</p>
          <p className="text-sm text-indigo-700">+5.2 from last week</p>
        </div>
      </div>
    </div>
  );
}