import React, { createContext, useContext, useState } from 'react';

// Step 1: Create a Context
const AppContext = createContext({} as any);

// Step 2: Create a Provider
function AppProvider({ children }:any) {
  const [count, setCount] = useState(0);

  return (
    <AppContext.Provider value={{ count, setCount }}>
      {children}
    </AppContext.Provider>
  );
}

// Step 3: Create a Custom Hook to use the Context
function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}

// Component using the Context
function Counter() {
  const { count, setCount } = useAppContext();

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

// Using the AppProvider to wrap the component tree
function App() {
  return (
    <AppProvider>
      <Counter />
    </AppProvider>
  );
}

export default App;
