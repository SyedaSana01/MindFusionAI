import React from 'react';
import { Filter } from 'lucide-react';
import { NotificationType } from '../../types/notifications';

interface NotificationFiltersProps {
  selectedTypes: NotificationType[];
  onTypeChange: (types: NotificationType[]) => void;
}

export default function NotificationFilters({ selectedTypes, onTypeChange }: NotificationFiltersProps) {
  const notificationTypes: { value: NotificationType; label: string }[] = [
    { value: 'motivational', label: 'Motivational' },
    { value: 'reminder', label: 'Reminders' },
    { value: 'update', label: 'Updates' },
    { value: 'alert', label: 'Alerts' },
    { value: 'emergency', label: 'Emergency' },
  ];

  const handleTypeToggle = (type: NotificationType) => {
    if (selectedTypes.includes(type)) {
      onTypeChange(selectedTypes.filter(t => t !== type));
    } else {
      onTypeChange([...selectedTypes, type]);
    }
  };

  return (
    <div className="mb-6">
      <div className="flex items-center mb-3">
        <Filter className="w-5 h-5 text-gray-500 mr-2" />
        <h3 className="text-sm font-medium text-gray-700">Filter by type</h3>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {notificationTypes.map(({ value, label }) => (
          <button
            key={value}
            onClick={() => handleTypeToggle(value)}
            className={`px-3 py-1 rounded-full text-sm ${
              selectedTypes.includes(value)
                ? 'bg-indigo-100 text-indigo-800'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}