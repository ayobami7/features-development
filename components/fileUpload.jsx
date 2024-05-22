import React, { useState } from 'react';
import axios from 'axios';

const UploadFile = ({ apiUrl }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async (event) => {
    event.preventDefault();
    if (!file) {
      alert('Please select a file first!');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post(apiUrl, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      alert(response.data.message);
      console.log(response.data);
    } catch (error) {
      console.error('Error uploading the file:', error);
    }
  };

  return (
    // <form onSubmit={handleUpload}>
    //   <input type="file" multiple placeholder="Upload Assignment" onChange={handleFileChange} />
    //   <button type="submit">Upload</button>
    // </form>
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Submit</button>
    </div>
  );
};

export default UploadFile;
