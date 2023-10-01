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
      <input type="file" onChange={(e) => setSelectedFile(e.target.files[0])} />
      <button onClick={handleFileUpload}>Upload</button>
      {uploadStatus === 'uploading' && <p>Uploading...</p>}
      {uploadStatus === 'success' && <p style={{ color: 'green' }}>{uploadMessage}</p>}
      {uploadStatus === 'error' && <p style={{ color: 'red' }}>{uploadMessage}</p>}
    </div>
  );
}

export default FileUpload;