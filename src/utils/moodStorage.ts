import { MoodEntry, MoodFactor } from '../types/mood';

export function saveMoodEntry(entry: MoodEntry): void {
  const entries = getMoodEntries();
  entries.push({ ...entry, timestamp: new Date().toISOString() });
  localStorage.setItem('moodEntries', JSON.stringify(entries));
}

export function getMoodEntries(): MoodEntry[] {
  const entries = localStorage.getItem('moodEntries');
  return entries ? JSON.parse(entries) : [];
}

export function generateMoodReport(): string {
  const entries = getMoodEntries();
  let csvContent = 'Date,Mood Level,Factors,Notes\n';
  
  entries.forEach((entry) => {
    const factors = entry.factors
      .map((f) => `${f.label}: ${f.value}`)
      .join('; ');
    
    csvContent += `${new Date(entry.timestamp).toLocaleDateString()},${
      entry.moodLevel
    },"${factors}","${entry.note}"\n`;
  });
  
  return csvContent;
}