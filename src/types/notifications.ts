export type NotificationType = 'motivational' | 'reminder' | 'update' | 'alert' | 'emergency';
export type NotificationPriority = 'low' | 'medium' | 'high' | 'urgent';

export interface Notification {
  id: string;
  type: NotificationType;
  priority: NotificationPriority;
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
  actionUrl?: string;
  actionLabel?: string;
  category?: string;
  icon?: string;
}

export interface NotificationPreferences {
  enabledTypes: NotificationType[];
  deliveryMethods: {
    push: boolean;
    email: boolean;
    inApp: boolean;
  };
  doNotDisturb: {
    enabled: boolean;
    startTime: string;
    endTime: string;
    allowEmergency: boolean;
  };
  frequency: {
    motivational: 'hourly' | 'daily' | 'weekly';
    reminders: 'hourly' | 'daily' | 'weekly';
  };
}