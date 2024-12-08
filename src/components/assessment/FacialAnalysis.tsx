import React, { useState } from 'react';
import { Camera } from 'lucide-react';
import Webcam from 'react-webcam';

export default function FacialAnalysis() {
  const [showCamera, setShowCamera] = useState(false);
  const [analysis, setAnalysis] = useState<null | {
    emotions: { [key: string]: number };
  }>(null);

  const analyzeImage = () => {
    // Simplified emotion detection (in real app, use computer vision API)
    setAnalysis({
      emotions: {
        neutral: 0.5,
        happy: 0.2,
        sad: 0.15,
        anxious: 0.15,
      },
    });
    setShowCamera(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center mb-4">
        <Camera className="w-6 h-6 text-indigo-600 mr-2" />
        <h2 className="text-lg font-semibold">Facial Expression Analysis</h2>
      </div>
      <div className="flex flex-col items-center">
        {showCamera ? (
          <div className="relative w-full max-w-md">
            <Webcam className="rounded-lg" />
            <button
              className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
              onClick={analyzeImage}
            >
              Capture & Analyze
            </button>
          </div>
        ) : (
          <button
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            onClick={() => setShowCamera(true)}
          >
            Start Camera
          </button>
        )}
      </div>
      {analysis && (
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <p className="font-medium mb-3">Detected Emotions:</p>
          <div className="space-y-2">
            {Object.entries(analysis.emotions).map(([emotion, score]) => (
              <div key={emotion}>
                <div className="flex justify-between text-sm">
                  <span className="capitalize">{emotion}</span>
                  <span>{Math.round(score * 100)}%</span>
                </div>
                <div className="mt-1 h-2 bg-gray-200 rounded-full">
                  <div
                    className="h-full bg-indigo-600 rounded-full"
                    style={{ width: `${score * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}