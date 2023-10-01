import React, { useState } from 'react';
import axios from 'axios';

function FileUpload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('idle');
  const [uploadMessage, setUploadMessage] = useState('');

  const handleFileUpload = async () => {
    const formData = new FormData();
    formData.append('file', selectedFile);

    setUploadStatus('uploading');
    try {
      await axios.post('/api/upload', formData);
      setUploadStatus('success');
      setUploadMessage('File uploaded successfully.');
    } catch (error) {
      setUploadStatus('error');
      setUploadMessage('An error occurred while uploading the file.');
      console.error(error);
    }
  };

  return (
    <div>
      <label htmlFor="fileUpload" className="font-medium mb-2 inline-block">Upload File:</label>
      <input type="file" id="fileUpload" onChange={(e) => setSelectedFile(e.target.files[0])} className="border p-2 rounded-md w-full" />
      <button onClick={handleFileUpload} className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 mt-2">Upload</button>
      {uploadStatus === 'uploading' && <p>Uploading...</p>}
      {uploadStatus === 'success' && <p style={{ color: 'green' }}>{uploadMessage}</p>}
      {uploadStatus === 'error' && <p style={{ color: 'red' }}>{uploadMessage}</p>}
    </div>
  );
}

export default FileUpload;