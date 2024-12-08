import React, { useState } from 'react';
import { Download } from 'lucide-react';
import { getMoodEntries } from '../../utils/moodStorage';
import { generatePDF } from '../../utils/exportUtils';

export default function ExportButton() {
  const [isExporting, setIsExporting] = useState(false);

  const handleExport = async () => {
    setIsExporting(true);
    try {
      const entries = getMoodEntries();
      const success = await generatePDF(entries);
      
      if (success) {
        // Show success message if needed
      } else {
        alert('Failed to generate report. Please try again.');
      }
    } catch (error) {
      console.error('Export error:', error);
      alert('An error occurred while generating the report.');
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <button
      onClick={handleExport}
      disabled={isExporting}
      className={`flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed`}
    >
      <Download className="w-4 h-4 mr-2" />
      {isExporting ? 'Generating...' : 'Export Report'}
    </button>
  );
}