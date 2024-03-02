import React from 'react';
import { useLocation } from 'react-router-dom';

const Homepage = () => {
  const location = useLocation();
  const username = location.state?.username || '';

  return (
    <div>
      <center>
        <h2>Welcome, {username}!</h2>
      </center>
    </div>
  );
};

export default Homepage;
