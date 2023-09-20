import React, { useState, useEffect } from 'react';

function App() {
 // Define a state variable named "count" and initialize it to 0
 const [count, setCount] = useState(0);

 // Define a state variable named "isActive" and initialize it to true
 const [isActive, setIsActive] = useState(true);

 // Effect to update document title when count changes
 useEffect(() => {
   document.title = `Count: ${count}`;
 }, [count]); // Runs whenever "count" changes

 return (
   <div>
     <h1>Count: {count}</h1>
     <button onClick={() => setCount(count + 1)} style={{marginRight:'10px'}}>Increment</button>
     <button onClick={() => setIsActive(!isActive)}>
       {isActive ? 'Deactivate' : 'Activate'}
     </button>
   </div>
 );
}

export default App;
