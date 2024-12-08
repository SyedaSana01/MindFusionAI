import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import JournalEditor from '../../components/journal/JournalEditor';
import JournalList from '../../components/journal/JournalList';

interface JournalEntry {
  id: string;
  title: string;
  content: string;
  date: string;
  mood: string;
  tags: string[];
}

export default function JournalPage() {
  const [isEditing, setIsEditing] = useState(false);
  const [entries, setEntries] = useState<JournalEntry[]>([
    {
      id: '1',
      title: 'Morning Reflection',
      content: 'Today started with a peaceful meditation session...',
      date: new Date().toLocaleDateString(),
      mood: 'Calm',
      tags: ['meditation', 'morning'],
    },
  ]);

  const handleSave = (entry: { title: string; content: string; mood: string; tags: string[] }) => {
    const newEntry = {
      id: Date.now().toString(),
      ...entry,
      date: new Date().toLocaleDateString(),
    };
    setEntries([newEntry, ...entries]);
    setIsEditing(false);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Journal</h1>
        {!isEditing && (
          <button
            onClick={() => setIsEditing(true)}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center"
          >
            <Plus className="w-4 h-4 mr-2" />
            New Entry
          </button>
        )}
      </div>

      {isEditing ? (
        <JournalEditor
          onSave={handleSave}
          onCancel={() => setIsEditing(false)}
        />
      ) : (
        <JournalList entries={entries} />
      )}
    </div>
  );
}