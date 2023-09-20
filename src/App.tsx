import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([] as any[]);

  useEffect(() => {
    // Define a function to fetch data from an API
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call the fetch function
    fetchData();
  }, []); // The empty dependency array means this effect runs once after the component mounts

  return (
    <div>
      <h1>Data from API:</h1>
      {data ? (
        <ul>
          {data.map(item => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
