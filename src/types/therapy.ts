export interface TherapyExercise {
  id: string;
  title: string;
  description: string;
  duration: number;
  completed: boolean;
}

export interface CBTExercise extends TherapyExercise {
  type: 'thought-record' | 'behavioral-activation' | 'cognitive-restructuring';
}

export interface MindfulnessActivity extends TherapyExercise {
  type: 'breathing' | 'body-scan' | 'gratitude';
  audioUrl?: string;
}

export interface RelaxationTechnique extends TherapyExercise {
  type: 'progressive-muscle' | 'guided-imagery' | 'sound-therapy';
  audioUrl?: string;
}

export interface TherapyRecommendations {
  cbtExercises: CBTExercise[];
  mindfulness: MindfulnessActivity[];
  relaxation: RelaxationTechnique[];
}