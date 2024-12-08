import React, { useState } from 'react';
import { CheckCircle, Circle, Plus, X } from 'lucide-react';

interface Goal {
  id: string;
  title: string;
  description: string;
  progress: number;
  daysLeft: number;
  completed: boolean;
}

const initialGoals = [
  {
    id: '1',
    title: 'Complete Daily Mood Logs',
    description: 'Log your mood at least once every day',
    progress: 85,
    daysLeft: 3,
    completed: false,
  },
  {
    id: '2',
    title: 'Mindfulness Practice',
    description: 'Complete 10 mindfulness sessions',
    progress: 100,
    daysLeft: 0,
    completed: true,
  },
  {
    id: '3',
    title: 'Journal Entries',
    description: 'Write 5 journal entries this week',
    progress: 60,
    daysLeft: 4,
    completed: false,
  },
];

export default function GoalTracker() {
  const [goals, setGoals] = useState<Goal[]>(initialGoals);
  const [isAddingGoal, setIsAddingGoal] = useState(false);
  const [newGoal, setNewGoal] = useState({
    title: '',
    description: '',
    daysLeft: 7,
  });

  const handleAddGoal = () => {
    if (!newGoal.title) return;

    const goal: Goal = {
      id: Date.now().toString(),
      title: newGoal.title,
      description: newGoal.description,
      progress: 0,
      daysLeft: newGoal.daysLeft,
      completed: false,
    };

    setGoals([...goals, goal]);
    setNewGoal({ title: '', description: '', daysLeft: 7 });
    setIsAddingGoal(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold">Active Goals</h2>
        <button
          onClick={() => setIsAddingGoal(true)}
          className="flex items-center gap-2 px-4 py-2 text-indigo-600 hover:text-indigo-700 font-medium transition-colors"
        >
          <Plus className="w-4 h-4" />
          Add Goal
        </button>
      </div>
      
      <div className="space-y-6">
        {goals.map((goal) => (
          <div key={goal.id} className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                {goal.completed ? (
                  <CheckCircle className="w-5 h-5 text-green-500" />
                ) : (
                  <Circle className="w-5 h-5 text-gray-300" />
                )}
                <h3 className="font-medium">{goal.title}</h3>
              </div>
              <span className="text-sm text-gray-500">
                {goal.completed ? 'Completed' : `${goal.daysLeft} days left`}
              </span>
            </div>
            
            <p className="text-sm text-gray-600 ml-7">{goal.description}</p>
            
            <div className="ml-7">
              <div className="flex items-center justify-between text-sm text-gray-600 mb-1">
                <span>Progress</span>
                <span>{goal.progress}%</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${
                    goal.completed ? 'bg-green-500' : 'bg-indigo-600'
                  }`}
                  style={{ width: `${goal.progress}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {isAddingGoal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Add New Goal</h3>
              <button
                onClick={() => setIsAddingGoal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Goal Title
                </label>
                <input
                  type="text"
                  value={newGoal.title}
                  onChange={(e) => setNewGoal({ ...newGoal, title: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter goal title"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  value={newGoal.description}
                  onChange={(e) => setNewGoal({ ...newGoal, description: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  rows={3}
                  placeholder="Enter goal description"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Days to Complete
                </label>
                <input
                  type="number"
                  value={newGoal.daysLeft}
                  onChange={(e) => setNewGoal({ ...newGoal, daysLeft: parseInt(e.target.value) })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  min="1"
                  max="365"
                />
              </div>

              <div className="flex justify-end space-x-3 mt-6">
                <button
                  onClick={() => setIsAddingGoal(false)}
                  className="px-4 py-2 text-gray-700 hover:text-gray-900"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddGoal}
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                >
                  Add Goal
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}