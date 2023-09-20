// App.js
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import UserProfile from './UserProfile';

function App() {
  return (
    <Router>
      <div>
        <h1>My App</h1>
        <nav>
          <ul>
            <li>
              <Link to="/user/johndoe">John Doe's Profile</Link>
            </li>
            <li>
              <Link to="/user/janesmith">Jane Smith's Profile</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/user/:username" element={<UserProfile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
