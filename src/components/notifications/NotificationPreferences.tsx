import React, { useState } from 'react';
import { Settings, Bell, Moon, Clock } from 'lucide-react';
import { NotificationPreferences as Preferences } from '../../types/notifications';

interface NotificationPreferencesProps {
  preferences: Preferences;
  onSave: (preferences: Preferences) => void;
}

export default function NotificationPreferences({ preferences, onSave }: NotificationPreferencesProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [localPreferences, setLocalPreferences] = useState(preferences);

  const handleSave = () => {
    onSave(localPreferences);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg"
      >
        <Settings className="w-4 h-4 mr-2" />
        Notification Settings
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 p-4 z-50">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Notification Preferences</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="flex items-center text-sm font-medium text-gray-700 mb-2">
                <Bell className="w-4 h-4 mr-2" />
                Delivery Methods
              </h4>
              <div className="space-y-2">
                {Object.entries(localPreferences.deliveryMethods).map(([method, enabled]) => (
                  <label key={method} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={enabled}
                      onChange={(e) => setLocalPreferences({
                        ...localPreferences,
                        deliveryMethods: {
                          ...localPreferences.deliveryMethods,
                          [method]: e.target.checked,
                        },
                      })}
                      className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <span className="ml-2 text-sm text-gray-600 capitalize">{method}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h4 className="flex items-center text-sm font-medium text-gray-700 mb-2">
                <Moon className="w-4 h-4 mr-2" />
                Do Not Disturb
              </h4>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={localPreferences.doNotDisturb.enabled}
                    onChange={(e) => setLocalPreferences({
                      ...localPreferences,
                      doNotDisturb: {
                        ...localPreferences.doNotDisturb,
                        enabled: e.target.checked,
                      },
                    })}
                    className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <span className="ml-2 text-sm text-gray-600">Enable Do Not Disturb</span>
                </label>
                
                {localPreferences.doNotDisturb.enabled && (
                  <div className="ml-6 space-y-2">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <input
                        type="time"
                        value={localPreferences.doNotDisturb.startTime}
                        onChange={(e) => setLocalPreferences({
                          ...localPreferences,
                          doNotDisturb: {
                            ...localPreferences.doNotDisturb,
                            startTime: e.target.value,
                          },
                        })}
                        className="text-sm border-gray-300 rounded-md"
                      />
                      <span className="text-sm text-gray-500">to</span>
                      <input
                        type="time"
                        value={localPreferences.doNotDisturb.endTime}
                        onChange={(e) => setLocalPreferences({
                          ...localPreferences,
                          doNotDisturb: {
                            ...localPreferences.doNotDisturb,
                            endTime: e.target.value,
                          },
                        })}
                        className="text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={localPreferences.doNotDisturb.allowEmergency}
                        onChange={(e) => setLocalPreferences({
                          ...localPreferences,
                          doNotDisturb: {
                            ...localPreferences.doNotDisturb,
                            allowEmergency: e.target.checked,
                          },
                        })}
                        className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <span className="ml-2 text-sm text-gray-600">Allow emergency alerts</span>
                    </label>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-end space-x-3">
            <button
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-4 py-2 text-sm bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
              Save Changes
            </button>
          </div>
        </div>
      )}
    </div>
  );
}