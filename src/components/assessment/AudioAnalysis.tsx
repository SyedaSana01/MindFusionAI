import React, { useState } from 'react';
import { Mic, Square } from 'lucide-react';

export default function AudioAnalysis() {
  const [isRecording, setIsRecording] = useState(false);
  const [analysis, setAnalysis] = useState<null | {
    emotionalIntensity: number;
    pitch: string;
  }>(null);

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    if (!isRecording) {
      // Start recording logic here
    } else {
      // Stop recording and analyze
      analyzeAudio();
    }
  };

  const analyzeAudio = () => {
    // Simplified audio analysis (in real app, use audio processing API)
    setAnalysis({
      emotionalIntensity: Math.random(),
      pitch: Math.random() > 0.5 ? 'Monotone' : 'Fluctuating',
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center mb-4">
        <Mic className="w-6 h-6 text-indigo-600 mr-2" />
        <h2 className="text-lg font-semibold">Speech Analysis</h2>
      </div>
      <div className="flex flex-col items-center">
        <button
          className={`p-4 rounded-full ${
            isRecording ? 'bg-red-500' : 'bg-indigo-600'
          } text-white hover:opacity-90`}
          onClick={toggleRecording}
        >
          {isRecording ? <Square className="w-6 h-6" /> : <Mic className="w-6 h-6" />}
        </button>
        <p className="mt-2 text-sm text-gray-600">
          {isRecording ? 'Recording... Click to stop' : 'Click to start recording'}
        </p>
      </div>
      {analysis && (
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <div className="space-y-4">
            <div>
              <p className="text-sm font-medium text-gray-600">Emotional Intensity</p>
              <div className="mt-1 h-2 bg-gray-200 rounded-full">
                <div
                  className="h-full bg-indigo-600 rounded-full"
                  style={{ width: `${analysis.emotionalIntensity * 100}%` }}
                />
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Speech Pattern</p>
              <p className="mt-1 text-lg font-semibold">{analysis.pitch}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}