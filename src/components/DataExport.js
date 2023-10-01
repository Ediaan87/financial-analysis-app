import React from 'react';
import { jsPDF } from 'jspdf'; // For PDF conversion
import { writeFileSync } from 'fs'; // For Excel and .csv conversion
import { utils, writeFile } from 'xlsx'; // For Excel conversion
import Papa from 'papaparse'; // For .csv conversion

function DataExport({ data }) {
  // Assuming data is an object containing the financial data and calculated ratios

  const handleExportToPDF = () => {
    const doc = new jsPDF();
    doc.text(JSON.stringify(data), 10, 10);
    doc.save('financial_data.pdf');
  };

  const handleExportToExcel = () => {
    const wb = utils.book_new();
    const ws = utils.json_to_sheet(data);
    utils.book_append_sheet(wb, ws, 'Financial Data');
    writeFile(wb, 'financial_data.xlsx');
  };

  const handleExportToCSV = () => {
    const csv = Papa.unparse(data);
    writeFileSync('financial_data.csv', csv);
  };

  return (
    <div className="mt-4">
      <h2 className="text-lg font-semibold mb-2">Export Data</h2>
      <button onClick={handleExportToPDF}>Export to PDF</button>
      <button onClick={handleExportToExcel}>Export to Excel</button>
      <button onClick={handleExportToCSV}>Export to .csv</button>
    </div>
  );
}

export default DataExport;