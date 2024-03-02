import axios from 'axios';
import React, { useEffect, useState } from 'react';

const GitHubFollowing = () => {
  const [followingData, setFollowingData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://api.github.com/users/defunkt/following');
      setFollowingData(response.data.slice(1, 10));
    };

    fetchData();
  }, []);

  return (
    <div>
      <center><h2>Retrieving the data from GitHub Following Avatars 6th to 10th</h2></center>
      <ul>
        {followingData.map((user) => (
          <li key={user.id}>
            <center><p>Name (Login): {user.login}</p></center>
            <center><img src={user.avatar_url} alt={user.login} /></center>
            <center><p>ID: {user.id}</p></center>
            <center><p>HTML URL: <a href={user.html_url} target="_blank" rel="noopener noreferrer">{user.html_url}</a></p></center>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GitHubFollowing;
