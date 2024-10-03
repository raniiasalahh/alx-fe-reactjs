import React, { useState } from 'react';
import { searchUsers } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const queryParams = {
      username,
      location,
      minRepos: minRepos ? parseInt(minRepos) : undefined,
    };

    try {
      const data = await searchUsers(queryParams);
      setUserData(data);
    } catch (err) {
      setError('Looks like we can’t find any users matching that criteria.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
          required
          className="search-input"
        />
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter location (optional)"
          className="search-input"
        />
        <input
          type="number"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          placeholder="Minimum repositories (optional)"
          className="search-input"
        />
        <button type="submit" className="search-button">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      
      <div className="user-list">
        {userData.map((user) => (
          <div key={user.id} className="user-item">
            <img src={user.avatar_url} alt={`${user.login}'s avatar`} className="avatar" />
            <h2>{user.login}</h2>
            {user.location && <p>Location: {user.location}</p>}
            <p>Repositories: {user.public_repos}</p>
            <a href={`https://github.com/${user.login}`} target="_blank" rel="noopener noreferrer">
              View Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
