import React, { useState, useEffect } from 'react';
import useFormInput from './hooks/useForminput';

function App() {
  const firstName = useFormInput('');
  const lastName = useFormInput('');

  const handleSubmit = (e:any) => {
    e.preventDefault();
    alert(`Submitted: ${firstName.value} ${lastName.value}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name:</label>
        <input type="text" {...firstName} />
      </div>
      <div>
        <label>Last Name:</label>
        <input type="text" {...lastName} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
