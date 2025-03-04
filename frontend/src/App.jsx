import React, { useState } from 'react';
import axios from 'axios';
import Upload from './components/Upload';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showUpload, setShowUpload] = useState(false);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    try {
      const url= import.meta.env.VITE_BACKEND_URL;
      console.log(url);
      const response = await axios.get(`${url}/getmodels?name=${searchQuery}`);
      console.log('Search Response:', response.data);
    } catch (error) {
      console.error('Search Error:', error);
    }
  };

  const handleUploadClick = () => {
    setShowUpload(true);
  };

  const handleCancelClick = () => {
    setShowUpload(false);
  };

  return (
    <div className="bg-gray-200 min-h-screen p-4">
      <div className="container flex justify-center items-center mb-4">
        <form className="flex space-x-2" onSubmit={handleSearchSubmit}>
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search..."
            required
            className="border p-2 rounded-xl"
          />
          <button type="submit" className="bg-green-500 p-2 rounded-xl text-white">
            Search
          </button>
        </form>
      </div>
      <div className="container flex justify-end items-center">
        {!showUpload ? (
          <button
            className="bg-blue-500 px-8 py-2 rounded-xl text-white"
            onClick={handleUploadClick}
          >
            Upload
          </button>
        ) : (
          <button
            className="bg-red-500 px-8 py-2 rounded-xl text-white"
            onClick={handleCancelClick}
          >
            Cancel
          </button>
        )}
      </div>
        <div className=''>

        </div>

      {showUpload && <Upload />}

    </div>
  );
};

export default App;