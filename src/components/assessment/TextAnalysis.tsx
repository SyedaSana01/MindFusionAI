import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';

export default function TextAnalysis() {
  const [text, setText] = useState('');
  const [sentiment, setSentiment] = useState<null | { score: number; label: string }>(null);

  const analyzeSentiment = () => {
    // Simplified sentiment analysis (in real app, use NLP API)
    const score = Math.random();
    const label = score > 0.6 ? 'Positive' : score > 0.4 ? 'Neutral' : 'Negative';
    setSentiment({ score, label });
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center mb-4">
        <MessageSquare className="w-6 h-6 text-indigo-600 mr-2" />
        <h2 className="text-lg font-semibold">Text Analysis</h2>
      </div>
      <textarea
        className="w-full h-32 p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        placeholder="How are you feeling today? Describe your thoughts and emotions..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
        onClick={analyzeSentiment}
      >
        Analyze
      </button>
      {sentiment && (
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <p className="font-medium">Sentiment Analysis:</p>
          <div className="flex items-center justify-between mt-2">
            <span className="text-sm text-gray-600">Emotional Tone:</span>
            <span className={`px-3 py-1 rounded-full text-white text-sm ${
              sentiment.label === 'Positive' ? 'bg-green-500' :
              sentiment.label === 'Neutral' ? 'bg-yellow-500' : 'bg-red-500'
            }`}>
              {sentiment.label}
            </span>
          </div>
          <div className="mt-2 h-2 bg-gray-200 rounded-full">
            <div
              className="h-full bg-indigo-600 rounded-full"
              style={{ width: `${sentiment.score * 100}%` }}
            />
          </div>
        </div>
      )}
    </div>
  );
}