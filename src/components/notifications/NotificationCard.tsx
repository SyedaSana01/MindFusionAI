import React from 'react';
import { Bell, CheckCircle, AlertTriangle, MessageCircle, Clock, X, ExternalLink } from 'lucide-react';
import { Notification } from '../../types/notifications';

interface NotificationCardProps {
  notification: Notification;
  onDismiss: (id: string) => void;
  onMarkAsRead: (id: string) => void;
}

export default function NotificationCard({ notification, onDismiss, onMarkAsRead }: NotificationCardProps) {
  const getIcon = () => {
    switch (notification.type) {
      case 'motivational':
        return <MessageCircle className="w-5 h-5 text-green-500" />;
      case 'reminder':
        return <Clock className="w-5 h-5 text-blue-500" />;
      case 'update':
        return <Bell className="w-5 h-5 text-purple-500" />;
      case 'emergency':
        return <AlertTriangle className="w-5 h-5 text-red-500" />;
      default:
        return <CheckCircle className="w-5 h-5 text-gray-500" />;
    }
  };

  const getPriorityStyles = () => {
    switch (notification.priority) {
      case 'urgent':
        return 'border-l-4 border-red-500 bg-red-50';
      case 'high':
        return 'border-l-4 border-orange-500 bg-orange-50';
      case 'medium':
        return 'border-l-4 border-blue-500 bg-blue-50';
      default:
        return 'border-l-4 border-gray-300 bg-white';
    }
  };

  return (
    <div className={`relative p-4 mb-3 rounded-lg shadow-sm ${getPriorityStyles()} ${
      !notification.read ? 'bg-opacity-100' : 'bg-opacity-60'
    }`}>
      <div className="flex items-start">
        <div className="flex-shrink-0">{getIcon()}</div>
        
        <div className="ml-3 flex-1">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-gray-900">{notification.title}</p>
            <div className="flex items-center space-x-2">
              {!notification.read && (
                <button
                  onClick={() => onMarkAsRead(notification.id)}
                  className="text-xs text-blue-600 hover:text-blue-800"
                >
                  Mark as read
                </button>
              )}
              <button
                onClick={() => onDismiss(notification.id)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
          
          <p className="mt-1 text-sm text-gray-600">{notification.message}</p>
          
          {notification.actionUrl && (
            <a
              href={notification.actionUrl}
              className="mt-2 inline-flex items-center text-sm text-indigo-600 hover:text-indigo-800"
            >
              {notification.actionLabel || 'Take action'}
              <ExternalLink className="ml-1 w-4 h-4" />
            </a>
          )}
          
          <p className="mt-2 text-xs text-gray-500">
            {new Date(notification.timestamp).toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
}