import React, { useState } from 'react';
import { Trophy, Target, Calendar, TrendingUp, ChevronRight } from 'lucide-react';
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

const progressMetrics = [
  {
    icon: Trophy,
    label: 'Exercises Completed',
    value: '12',
    change: '+3 this week',
    changeType: 'positive',
  },
  {
    icon: Target,
    label: 'Current Streak',
    value: '5 days',
    change: '+2 days',
    changeType: 'positive',
  },
  {
    icon: Calendar,
    label: 'Weekly Goal Progress',
    value: '80%',
    change: '+15%',
    changeType: 'positive',
  },
  {
    icon: TrendingUp,
    label: 'Well-being Score',
    value: '7.5/10',
    change: '+0.5',
    changeType: 'positive',
  },
];

const chartData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'Daily Practice (minutes)',
      data: [15, 30, 20, 45, 25, 35, 40],
      borderColor: 'rgb(99, 102, 241)',
      backgroundColor: 'rgba(99, 102, 241, 0.1)',
      tension: 0.4,
      fill: true,
    },
  ],
};

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Weekly Practice Duration',
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      title: {
        display: true,
        text: 'Minutes',
      },
    },
  },
};

export default function TherapyProgress() {
  const [showDetailedReport, setShowDetailedReport] = useState(false);

  const handleViewReport = () => {
    setShowDetailedReport(true);
    // Generate and display detailed report
    const report = generateDetailedReport();
    console.log('Detailed report:', report);
  };

  const generateDetailedReport = () => {
    // Generate detailed progress report
    return {
      weeklyProgress: chartData,
      metrics: progressMetrics,
      recommendations: [
        'Increase mindfulness practice duration',
        'Try new relaxation techniques',
        'Maintain consistent CBT exercise schedule',
      ],
    };
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-6">Your Progress</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {progressMetrics.map((metric) => {
          const Icon = metric.icon;
          return (
            <div key={metric.label} className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center">
                <div className="p-2 bg-indigo-100 rounded-lg">
                  <Icon className="w-6 h-6 text-indigo-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">{metric.label}</p>
                  <div className="flex items-baseline">
                    <p className="text-2xl font-semibold text-gray-900">{metric.value}</p>
                    <span className={`ml-2 text-sm ${
                      metric.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {metric.change}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="h-80">
        <Line options={chartOptions} data={chartData} />
      </div>

      <div className="mt-6 flex justify-end">
        <button
          onClick={handleViewReport}
          className="flex items-center px-4 py-2 text-indigo-600 hover:text-indigo-700 font-medium transition-colors"
        >
          View Detailed Progress Report
          <ChevronRight className="w-4 h-4 ml-1" />
        </button>
      </div>

      {showDetailedReport && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <h3 className="text-xl font-semibold mb-4">Detailed Progress Report</h3>
            
            <div className="space-y-6">
              <section>
                <h4 className="text-lg font-medium mb-3">Weekly Overview</h4>
                <div className="h-64">
                  <Line options={chartOptions} data={chartData} />
                </div>
              </section>

              <section>
                <h4 className="text-lg font-medium mb-3">Key Metrics</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {progressMetrics.map((metric) => (
                    <div key={metric.label} className="p-4 bg-gray-50 rounded-lg">
                      <p className="font-medium">{metric.label}</p>
                      <div className="flex items-center mt-2">
                        <span className="text-xl font-semibold">{metric.value}</span>
                        <span className={`ml-2 text-sm ${
                          metric.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {metric.change}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h4 className="text-lg font-medium mb-3">Recommendations</h4>
                <ul className="space-y-2">
                  {generateDetailedReport().recommendations.map((rec, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
                      {rec}
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setShowDetailedReport(false)}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
              >
                Close Report
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}