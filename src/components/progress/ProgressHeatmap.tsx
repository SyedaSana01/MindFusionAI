import React, { useState } from 'react';
import { Calendar, ChevronDown } from 'lucide-react';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const timeRanges = [
  { label: 'Last 30 Days', value: '30' },
  { label: 'Last 90 Days', value: '90' },
  { label: 'Last 6 Months', value: '180' },
  { label: 'Last Year', value: '365' },
];

export default function ProgressHeatmap() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRange, setSelectedRange] = useState(timeRanges[0]);

  const generateHeatmapData = () => {
    const data = [];
    for (let i = 0; i < 7; i++) {
      const row = [];
      for (let j = 0; j < 5; j++) {
        row.push(Math.floor(Math.random() * 100));
      }
      data.push(row);
    }
    return data;
  };

  const getIntensityClass = (value: number) => {
    if (value >= 80) return 'bg-green-500';
    if (value >= 60) return 'bg-green-400';
    if (value >= 40) return 'bg-green-300';
    if (value >= 20) return 'bg-green-200';
    return 'bg-green-100';
  };

  const handleRangeSelect = (range: typeof timeRanges[0]) => {
    setSelectedRange(range);
    setIsOpen(false);
  };

  const heatmapData = generateHeatmapData();

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold">Activity Heatmap</h2>
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          >
            <Calendar className="w-4 h-4 text-gray-500" />
            <span>{selectedRange.label}</span>
            <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
          </button>

          {isOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-10">
              {timeRanges.map((range) => (
                <button
                  key={range.value}
                  onClick={() => handleRangeSelect(range)}
                  className={`w-full px-4 py-2 text-sm text-left hover:bg-gray-50 ${
                    selectedRange.value === range.value ? 'bg-indigo-50 text-indigo-600' : 'text-gray-700'
                  }`}
                >
                  {range.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="flex">
        <div className="w-12 pt-6">
          {days.map((day) => (
            <div key={day} className="h-8 flex items-center justify-end pr-2">
              <span className="text-xs text-gray-500">{day}</span>
            </div>
          ))}
        </div>
        
        <div className="flex-1">
          <div className="grid grid-cols-5 gap-2 mb-2">
            {months.slice(0, 5).map((month) => (
              <div key={month} className="text-xs text-gray-500 text-center">
                {month}
              </div>
            ))}
          </div>
          
          <div className="grid grid-rows-7 gap-2">
            {heatmapData.map((row, i) => (
              <div key={i} className="grid grid-cols-5 gap-2">
                {row.map((value, j) => (
                  <div
                    key={`${i}-${j}`}
                    className={`h-8 rounded transition-colors duration-200 hover:opacity-75 cursor-pointer ${getIntensityClass(value)}`}
                    title={`${value}% activity`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center space-x-2">
        <span className="text-xs text-gray-500">Less</span>
        {[100, 80, 60, 40, 20].map((value) => (
          <div
            key={value}
            className={`w-4 h-4 rounded ${getIntensityClass(value)}`}
          />
        ))}
        <span className="text-xs text-gray-500">More</span>
      </div>
    </div>
  );
}