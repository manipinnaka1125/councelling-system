import React from 'react';
import { useLocation } from 'react-router-dom';

const Homepage = () => {
  const location = useLocation();
  const email = location?.state?.email || '';

  return (
    <div>
      <center>
        <h2>Welcome, {email}!</h2>
      </center>
    </div>
  );
};

export default Homepage;
