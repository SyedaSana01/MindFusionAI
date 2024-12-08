import React, { useState } from 'react';
import { Shield, ExternalLink, Phone, BookOpen, MapPin, Star } from 'lucide-react';
import ResourceCard from './ResourceCard';

export default function TherapistApproved() {
  const [showTherapistFinder, setShowTherapistFinder] = useState(false);
  const [location, setLocation] = useState('');

  const resources = [
    {
      id: '1',
      title: 'Online Therapy Platforms',
      description: 'Connect with licensed therapists online',
      links: [
        { name: 'BetterHelp', url: 'https://www.betterhelp.com' },
        { name: 'Talkspace', url: 'https://www.talkspace.com' }
      ],
      category: 'therapy'
    },
    {
      id: '2',
      title: 'Crisis Support',
      description: '24/7 mental health support hotlines',
      links: [
        { name: 'National Crisis Line', url: 'tel:1-800-273-8255' },
        { name: 'Crisis Text Line', url: 'sms:741741' }
      ],
      category: 'emergency'
    },
    {
      id: '3',
      title: 'Recommended Reading',
      description: 'Books approved by our therapist network',
      links: [
        { name: 'Feeling Good: The New Mood Therapy', url: 'https://www.amazon.com/Feeling-Good-New-Mood-Therapy/dp/0380810336' },
        { name: 'The Anxiety and Phobia Workbook', url: 'https://www.amazon.com/Anxiety-Phobia-Workbook-Edmund-Bourne/dp/1626252157' }
      ],
      category: 'education'
    }
  ];

  const handleFindTherapist = () => {
    if (!location.trim()) return;
    // Simulate API call to find therapists
    console.log('Finding therapists in:', location);
    // In a real app, this would make an API call to a therapist directory
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center mb-6">
        <Shield className="w-6 h-6 text-indigo-600 mr-2" />
        <h2 className="text-lg font-semibold">Therapist-Approved Resources</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((resource) => (
          <ResourceCard key={resource.id} {...resource} />
        ))}
      </div>

      <div className="mt-8 p-4 bg-indigo-50 rounded-lg">
        <h3 className="font-medium text-indigo-900 mb-2">Professional Help</h3>
        <p className="text-sm text-indigo-700 mb-4">
          If you're experiencing severe symptoms, we recommend consulting a licensed therapist.
          Our network of professionals is here to help.
        </p>
        <button
          onClick={() => setShowTherapistFinder(true)}
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center"
        >
          <Phone className="w-4 h-4 mr-2" />
          Find a Therapist
        </button>
      </div>

      {showTherapistFinder && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl">
            <h3 className="text-xl font-semibold mb-4">Find a Therapist</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Enter your location
                </label>
                <div className="flex gap-2">
                  <div className="flex-1">
                    <input
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="City, State or ZIP code"
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  </div>
                  <button
                    onClick={handleFindTherapist}
                    className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center"
                  >
                    <MapPin className="w-4 h-4 mr-2" />
                    Search
                  </button>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="font-medium mb-3">Featured Therapists</h4>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start">
                        <div>
                          <h5 className="font-medium">Dr. Sarah Johnson</h5>
                          <p className="text-sm text-gray-600">Licensed Clinical Psychologist</p>
                          <div className="flex items-center mt-1">
                            <Star className="w-4 h-4 text-yellow-400" />
                            <span className="text-sm text-gray-600 ml-1">4.9 (120 reviews)</span>
                          </div>
                        </div>
                        <button className="px-3 py-1 text-indigo-600 border border-indigo-600 rounded hover:bg-indigo-50">
                          View Profile
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setShowTherapistFinder(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-900"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}