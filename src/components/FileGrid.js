import React, { useEffect, useState } from 'react';


function FileGrid() {
    const [files, setFiles] = useState([]);
    const [isLoading, setIsLoading] = useState(false); 
  
    useEffect(() => {
      const fetchFiles = async () => {
        setIsLoading(true);
        try {
          const token = localStorage.getItem('bharatfreecloud_token');
          console.log('Token:', token)
          console.log('Token from localStorage:', localStorage.getItem('bharatfreecloud_token'));
console.log('Headers:', { headers: { 'Authorization': `Bearer ${token}` }}); 

          const response = await fetch('http://127.0.0.1:5000/fetch-files', {
            headers: {
              'Authorization': `Bearer ${token}` 
            }
          });
  
          const data = await response.json();
          setFiles(data);
        } catch (error) {
          console.error('Error fetching files:', error);
        } finally {
          setIsLoading(false);
        }
      };
  
      fetchFiles();
    }, []); 

  return (
    <div className="file-grid">
      {/* Placeholder file items */}
      <div className="file-item">
        <p className="file-name">Document.pdf</p> 
      </div>
      <div className="file-item">
        <p className="file-name">VacationPic.jpg</p> 
      </div>
      {/* ... add more placeholder file items as needed */}
    </div>
  );
}

export default FileGrid;
