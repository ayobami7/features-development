import React from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver';


const DownloadFile = ({ apiUrl, fileName }) => {
  const handleDownload = async () => {
    try {
      const response = await axios.get(apiUrl, {
        responseType: 'blob',
      });

      // Use file-saver to save the file
      saveAs(response.data, fileName);
    } catch (error) {
      console.error('Error downloading the file:', error);
    }
  };

  return (
    <button onClick={handleDownload} >
        Download {fileName}
    </button>
  );
};

export default DownloadFile;
