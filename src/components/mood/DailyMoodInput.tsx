import React, { useState } from 'react';
import { Smile, Meh, Frown, Sun, Cloud, CloudRain, Moon, Coffee } from 'lucide-react';
import { saveMoodEntry } from '../../utils/moodStorage';
import type { MoodEntry, MoodFactor } from '../../types/mood';

const moods = [
  { icon: Smile, label: 'Happy', value: 5, color: 'bg-green-500' },
  { icon: Meh, label: 'Neutral', value: 3, color: 'bg-yellow-500' },
  { icon: Frown, label: 'Sad', value: 1, color: 'bg-red-500' },
];

const factors = [
  { icon: Sun, label: 'Weather', options: ['Sunny', 'Cloudy', 'Rainy'] },
  { icon: Moon, label: 'Sleep', options: ['Good', 'Fair', 'Poor'] },
  { icon: Coffee, label: 'Energy', options: ['High', 'Medium', 'Low'] },
];

export default function DailyMoodInput() {
  const [selectedMood, setSelectedMood] = useState<number | null>(null);
  const [note, setNote] = useState('');
  const [factorValues, setFactorValues] = useState<Record<string, string>>({});
  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState('');

  const handleFactorChange = (label: string, value: string) => {
    setFactorValues((prev) => ({ ...prev, [label]: value }));
  };

  const handleSubmit = () => {
    if (!selectedMood) {
      setSaveMessage('Please select a mood');
      return;
    }

    setIsSaving(true);
    setSaveMessage('');

    const moodFactors: MoodFactor[] = Object.entries(factorValues).map(([label, value]) => ({
      label,
      value,
    }));

    const entry: MoodEntry = {
      moodLevel: selectedMood,
      factors: moodFactors,
      note,
    };

    try {
      saveMoodEntry(entry);
      setSaveMessage('Mood saved successfully!');
      // Reset form
      setSelectedMood(null);
      setNote('');
      setFactorValues({});
    } catch (error) {
      setSaveMessage('Error saving mood. Please try again.');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-4">How are you feeling today?</h2>
      
      <div className="flex justify-around mb-6">
        {moods.map((mood) => (
          <button
            key={mood.label}
            onClick={() => setSelectedMood(mood.value)}
            className={`flex flex-col items-center p-4 rounded-lg transition-all ${
              selectedMood === mood.value
                ? `${mood.color} text-white`
                : 'hover:bg-gray-50'
            }`}
          >
            <mood.icon className="w-8 h-8 mb-2" />
            <span className="text-sm">{mood.label}</span>
          </button>
        ))}
      </div>

      <div className="space-y-4 mb-6">
        {factors.map((factor) => (
          <div key={factor.label} className="flex items-center space-x-4">
            <factor.icon className="w-5 h-5 text-gray-500" />
            <select
              className="flex-1 rounded-lg border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
              value={factorValues[factor.label] || ''}
              onChange={(e) => handleFactorChange(factor.label, e.target.value)}
            >
              <option value="">Select {factor.label}</option>
              {factor.options.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
        ))}
      </div>

      <textarea
        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        placeholder="Add a note about your day..."
        value={note}
        onChange={(e) => setNote(e.target.value)}
        rows={3}
      />

      {saveMessage && (
        <p className={`mt-2 text-sm ${
          saveMessage.includes('Error') ? 'text-red-600' : 'text-green-600'
        }`}>
          {saveMessage}
        </p>
      )}

      <button
        onClick={handleSubmit}
        disabled={isSaving}
        className={`mt-4 w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 
          ${isSaving ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        {isSaving ? 'Saving...' : 'Save Today\'s Mood'}
      </button>
    </div>
  );
}