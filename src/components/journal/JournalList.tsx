import React from 'react';
import JournalEntry from './JournalEntry';

interface JournalEntry {
  id: string;
  title: string;
  content: string;
  date: string;
  mood: string;
  tags: string[];
}

interface JournalListProps {
  entries: JournalEntry[];
}

export default function JournalList({ entries }: JournalListProps) {
  return (
    <div className="space-y-4">
      {entries.map((entry) => (
        <JournalEntry
          key={entry.id}
          title={entry.title}
          content={entry.content}
          date={entry.date}
          mood={entry.mood}
          tags={entry.tags}
        />
      ))}
    </div>
  );
}