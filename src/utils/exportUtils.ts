import html2pdf from 'html2pdf.js';
import { MoodEntry } from '../types/mood';

export const generatePDF = async (entries: MoodEntry[]) => {
  // Create content for PDF
  const content = document.createElement('div');
  content.innerHTML = `
    <h1 style="color: #4F46E5; font-size: 24px; margin-bottom: 20px;">MindFusion AI - Mood Report</h1>
    <p style="margin-bottom: 20px;">Generated on ${new Date().toLocaleDateString()}</p>
    
    ${entries.map(entry => `
      <div style="margin-bottom: 20px; padding: 15px; border: 1px solid #E5E7EB; border-radius: 8px;">
        <div style="margin-bottom: 10px;">
          <strong>Date:</strong> ${entry.timestamp ? new Date(entry.timestamp).toLocaleDateString() : 'N/A'}
        </div>
        <div style="margin-bottom: 10px;">
          <strong>Mood Level:</strong> ${entry.moodLevel}/5
        </div>
        <div style="margin-bottom: 10px;">
          <strong>Factors:</strong><br/>
          ${entry.factors.map(factor => `${factor.label}: ${factor.value}`).join('<br/>')}
        </div>
        ${entry.note ? `
          <div>
            <strong>Notes:</strong><br/>
            ${entry.note}
          </div>
        ` : ''}
      </div>
    `).join('')}
  `;

  // PDF options
  const options = {
    margin: 10,
    filename: `mood-report-${new Date().toISOString().split('T')[0]}.pdf`,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };

  // Generate PDF
  try {
    await html2pdf().from(content).set(options).save();
    return true;
  } catch (error) {
    console.error('Error generating PDF:', error);
    return false;
  }
};