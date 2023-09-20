import React from 'react';
import logo from './logo.svg';
import './App.css';
import ChildComponent from './ChildComponent';

function App() {
  const name = "John Doe";
  const age = 30;

  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponent name={name} age={age} />
    </div>
  );
}

export default App;
