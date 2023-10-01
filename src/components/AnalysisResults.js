import React from 'react';

function AnalysisResults({ analysisData }) {
  // Assuming analysisData is an object containing the calculated ratios and results

  return (
    <div className="mt-4">
      <h2 className="text-lg font-semibold mb-2">Analysis Results</h2>
      {analysisData && (
        <div className="bg-white p-4 rounded shadow">
          <p className="text-blue-600 font-semibold">Acid Test Ratio: <span className="font-normal text-gray-700">{analysisData.acidTestRatio}</span></p>
          <p className="text-blue-600 font-semibold">Quick Test Ratio: <span className="font-normal text-gray-700">{analysisData.quickTestRatio}</span></p>
          <p className="text-blue-600 font-semibold">Repayment Ability: <span className="font-normal text-gray-700">{analysisData.repaymentAbility}</span></p>
          <p className="text-blue-600 font-semibold">Debt Capacity: <span className="font-normal text-gray-700">{analysisData.debtCapacity}</span></p>
        </div>
      )}
    </div>
  );
}

export default AnalysisResults;