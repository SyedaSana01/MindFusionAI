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

const moodData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'Mood Level',
      data: [4, 3, 5, 2, 4, 5, 4],
      borderColor: 'rgb(99, 102, 241)',
      tension: 0.4,
    },
    {
      label: 'Energy Level',
      data: [3, 4, 4, 3, 5, 4, 3],
      borderColor: 'rgb(234, 179, 8)',
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
      text: 'Weekly Mood & Energy Trends',
    },
  },
  scales: {
    y: {
      min: 0,
      max: 5,
      ticks: {
        stepSize: 1,
      },
    },
  },
};

export default function MoodInsights() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-6">Mood Insights</h2>
      <div className="h-80">
        <Line options={options} data={moodData} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <InsightCard
          title="Average Mood"
          value="3.8/5"
          trend="+0.5"
          trendUp={true}
        />
        <InsightCard
          title="Most Common Mood"
          value="Happy"
          trend="2 days streak"
          trendUp={true}
        />
        <InsightCard
          title="Journal Entries"
          value="15"
          trend="+3 this week"
          trendUp={true}
        />
      </div>
    </div>
  );
}

function InsightCard({ title, value, trend, trendUp }: {
  title: string;
  value: string;
  trend: string;
  trendUp: boolean;
}) {
  return (
    <div className="p-4 bg-gray-50 rounded-lg">
      <h3 className="text-sm font-medium text-gray-600">{title}</h3>
      <p className="text-2xl font-semibold mt-1">{value}</p>
      <p className={`text-sm mt-1 ${trendUp ? 'text-green-600' : 'text-red-600'}`}>
        {trend}
      </p>
    </div>
  );
}