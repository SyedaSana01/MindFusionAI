export interface MoodFactor {
  label: string;
  value: string;
}

export interface MoodEntry {
  moodLevel: number;
  factors: MoodFactor[];
  note: string;
  timestamp?: string;
}