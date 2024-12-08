import React, { useState } from 'react';
import { Bell } from 'lucide-react';
import NotificationCard from '../../components/notifications/NotificationCard';
import NotificationFilters from '../../components/notifications/NotificationFilters';
import NotificationPreferences from '../../components/notifications/NotificationPreferences';
import { Notification, NotificationType, NotificationPreferences as Preferences } from '../../types/notifications';

const defaultPreferences: Preferences = {
  enabledTypes: ['motivational', 'reminder', 'update', 'alert', 'emergency'],
  deliveryMethods: {
    push: true,
    email: true,
    inApp: true,
  },
  doNotDisturb: {
    enabled: false,
    startTime: '22:00',
    endTime: '07:00',
    allowEmergency: true,
  },
  frequency: {
    motivational: 'daily',
    reminders: 'daily',
  },
};

export default function NotificationsCenter() {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: '1',
      type: 'motivational',
      priority: 'low',
      title: 'Daily Inspiration',
      message: 'Remember: Every small step counts towards your well-being.',
      timestamp: new Date().toISOString(),
      read: false,
    },
    {
      id: '2',
      type: 'reminder',
      priority: 'medium',
      title: 'Mood Check-in',
      message: "It's time for your daily mood check-in. How are you feeling?",
      timestamp: new Date().toISOString(),
      read: false,
      actionUrl: '/mood',
      actionLabel: 'Log Mood',
    },
    {
      id: '3',
      type: 'emergency',
      priority: 'urgent',
      title: 'Crisis Support Available',
      message: 'We noticed signs of distress. Professional support is available 24/7.',
      timestamp: new Date().toISOString(),
      read: false,
      actionUrl: '/support',
      actionLabel: 'Get Help Now',
    },
  ]);

  const [selectedTypes, setSelectedTypes] = useState<NotificationType[]>(['motivational', 'reminder', 'update', 'alert', 'emergency']);
  const [preferences, setPreferences] = useState<Preferences>(defaultPreferences);

  const handleDismiss = (id: string) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  const handleMarkAsRead = (id: string) => {
    setNotifications(notifications.map(n => 
      n.id === id ? { ...n, read: true } : n
    ));
  };

  const filteredNotifications = notifications.filter(n => selectedTypes.includes(n.type));

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <Bell className="w-6 h-6 text-indigo-600 mr-2" />
          <h1 className="text-2xl font-bold text-gray-900">Notifications</h1>
        </div>
        <NotificationPreferences
          preferences={preferences}
          onSave={setPreferences}
        />
      </div>

      <NotificationFilters
        selectedTypes={selectedTypes}
        onTypeChange={setSelectedTypes}
      />

      <div className="space-y-4">
        {filteredNotifications.length > 0 ? (
          filteredNotifications.map(notification => (
            <NotificationCard
              key={notification.id}
              notification={notification}
              onDismiss={handleDismiss}
              onMarkAsRead={handleMarkAsRead}
            />
          ))
        ) : (
          <div className="text-center py-8 bg-gray-50 rounded-lg">
            <p className="text-gray-600">No notifications to display</p>
          </div>
        )}
      </div>
    </div>
  );
}