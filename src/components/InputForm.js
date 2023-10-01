import React, { useState } from 'react';
import axios from 'axios';

function InputForm() {
  const [taxPercentage, setTaxPercentage] = useState('');
  const [interestRate, setInterestRate] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // You can handle form submission here, such as sending data to the backend
    // For example: create a function to send data to the backend API
    axios.post('/api/submit', { taxPercentage, interestRate })
      .then(response => {
        // Handle success
      })
      .catch(error => {
        // Handle error
      });
  };

  return (
    <div className="mt-4">
      <h2 className="text-lg font-semibold mb-2">Additional Information</h2>
      <form onSubmit={handleFormSubmit} className="flex flex-col gap-2">
        <div>
          <label htmlFor="taxPercentage" className="font-medium">
            Tax Percentage:
          </label>
          <input
            type="text"
            id="taxPercentage"
            value={taxPercentage}
            onChange={(e) => setTaxPercentage(e.target.value)}
            className="border p-2 rounded-md w-full"
          />
        </div>
        <div>
          <label htmlFor="interestRate" className="font-medium">
            Interest Rate:
          </label>
          <input
            type="text"
            id="interestRate"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            className="border p-2 rounded-md w-full"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 mt-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default InputForm;