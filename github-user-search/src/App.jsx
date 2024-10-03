import React, { useState } from 'react';
import Search from './components/Search';
import { fetchUserData } from './services/githubService';

function App() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async ({ username, location, minRepos }) => {
    setLoading(true);
    setError('');
    setUserData([]);

    try {
      const data = await fetchUserData({ username, location, minRepos });
      setUserData(data);
    } catch (err) {
      setError('Looks like we can’t find any users matching your criteria.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1 className="text-center text-2xl font-bold">GitHub User Search</h1>
      <Search 
        onSearch={handleSearch} 
        loading={loading} 
        userData={userData} 
        error={error} 
      />
    </div>
  );
}

export default App;
