import React from 'react';

function AnalysisResults({ analysisData }) {
  // Assuming analysisData is an object containing the calculated ratios and results

  return (
    <div className="mt-4">
      <h2 className="text-lg font-semibold mb-2">Analysis Results</h2>
      {analysisData && (
        <div>
          <p>Acid Test Ratio: {analysisData.acidTestRatio}</p>
          <p>Quick Test Ratio: {analysisData.quickTestRatio}</p>
          <p>Repayment Ability: {analysisData.repaymentAbility}</p>
          <p>Debt Capacity: {analysisData.debtCapacity}</p>
        </div>
      )}
    </div>
  );
}

export default AnalysisResults;
