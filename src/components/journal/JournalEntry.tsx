import React from 'react';
import { Calendar, Tag } from 'lucide-react';

interface JournalEntryProps {
  title: string;
  content: string;
  date: string;
  mood: string;
  tags: string[];
}

export default function JournalEntry({ title, content, date, mood, tags }: JournalEntryProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <div className="flex items-center text-sm text-gray-500">
          <Calendar className="w-4 h-4 mr-2" />
          <span>{date}</span>
        </div>
      </div>
      <p className="text-gray-700 mb-4">{content}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Tag className="w-4 h-4 text-gray-500" />
          <div className="flex space-x-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">
          {mood}
        </span>
      </div>
    </div>
  );
}