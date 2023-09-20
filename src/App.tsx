import React, { useEffect, useRef } from 'react';

function App() {
  const inputRef = useRef(null as unknown as HTMLInputElement);

  const handleClick = () => {
    inputRef.current.focus()
  };

  useEffect(() => {
    // inputRef.current.focus()
  }, [])
  

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
}

export default App;
