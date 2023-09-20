import React from 'react';
import { useParams } from 'react-router-dom';

function UserProfile() {
  let { username } = useParams();

  return (
    <div>
      <h2>User Profile</h2>
      <p>Username: {username}</p>
    </div>
  );
}

export default UserProfile;
