import React, { createContext, useContext, useState } from 'react';

// Step 1: Create a Context
const AppContext = createContext({} as any);

// Step 2: Create a Provider
function AppProvider({ children }:any) {
  const [user, setUser] = useState(null);

  return (
    <AppContext.Provider value={{ user, setUser }}>
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
function UserComponent() {
  const { user, setUser } = useAppContext();

  const handleLogin = () => {
    setUser({ name: 'John Doe' });
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div>
      {user ? (
        <div>
          <p>Welcome, {user.name}!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
}

// Using the AppProvider to wrap the component tree
function App() {
  return (
    <AppProvider>
      <UserComponent />
    </AppProvider>
  );
}

export default App;
