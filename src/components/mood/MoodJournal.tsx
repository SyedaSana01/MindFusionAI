import React, { useState } from 'react';
import { Calendar, MessageSquare, Mic } from 'lucide-react';

export default function MoodJournal() {
  const [isRecording, setIsRecording] = useState(false);
  const [journalText, setJournalText] = useState('');

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Mood Journal</h2>
        <div className="flex space-x-2">
          <button
            onClick={() => setIsRecording(!isRecording)}
            className={`p-2 rounded-full ${
              isRecording ? 'bg-red-500' : 'bg-gray-100'
            } hover:opacity-80`}
          >
            <Mic className={`w-5 h-5 ${isRecording ? 'text-white' : 'text-gray-600'}`} />
          </button>
          <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
            <Calendar className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      <div className="space-y-4">
        <textarea
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          placeholder="Write about your feelings, experiences, or thoughts..."
          value={journalText}
          onChange={(e) => setJournalText(e.target.value)}
          rows={8}
        />
        
        <div className="flex items-center text-sm text-gray-500">
          <MessageSquare className="w-4 h-4 mr-2" />
          <span>Your entries are private and secure</span>
        </div>
      </div>
    </div>
  );
}