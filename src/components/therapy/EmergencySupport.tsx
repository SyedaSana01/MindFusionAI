import React, { useState } from 'react';
import { AlertCircle, X } from 'lucide-react';

export default function EmergencySupport() {
  const [showSupport, setShowSupport] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setShowSupport(!showSupport)}
        className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 flex items-center"
      >
        <AlertCircle className="w-4 h-4 mr-2" />
        Emergency Support
      </button>

      {showSupport && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border p-4 z-10">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-gray-900">Emergency Resources</h3>
            <button
              onClick={() => setShowSupport(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-gray-900">Crisis Hotline</h4>
              <p className="text-sm text-gray-600">24/7 Support: 1-800-273-8255</p>
            </div>

            <div>
              <h4 className="font-medium text-gray-900">Grounding Exercise</h4>
              <p className="text-sm text-gray-600">Try the 5-4-3-2-1 technique:</p>
              <ul className="text-sm text-gray-600 list-disc list-inside mt-1">
                <li>5 things you can see</li>
                <li>4 things you can touch</li>
                <li>3 things you can hear</li>
                <li>2 things you can smell</li>
                <li>1 thing you can taste</li>
              </ul>
            </div>

            <button className="w-full px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
              Contact Emergency Services
            </button>
          </div>
        </div>
      )}
    </div>
  );
}