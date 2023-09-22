import React, { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("set interval1234")
      setCount(prevCount => prevCount + 1);
    }, 1000);

    // Cleanup function - clears the interval when component is unmounted
    return () => clearInterval(interval);
  }, []); // Empty dependency array means this effect runs only on mount and unmount

  return (
    <div>
      <h1>Timer : {count}</h1>
    </div>
  );
}

export default App;

