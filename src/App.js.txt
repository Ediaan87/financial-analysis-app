import React from 'react';
import FileUpload from './components/FileUpload';
import InputForm from './components/InputForm';
import AnalysisResults from './components/AnalysisResults'; // Import the AnalysisResults component

function App() {
  const mockAnalysisData = {
    acidTestRatio: 1.5,
    quickTestRatio: 1.2,
    repaymentAbility: 'Good',
    debtCapacity: 'High',
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Financial Analysis App</h1>
      <FileUpload />
      <InputForm />
      <AnalysisResults analysisData={mockAnalysisData} /> {/* Pass the analysis data */}
      {/* Add more components here */}
    </div>
  );
}

export default App;
