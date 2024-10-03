import React from 'react';

const SearchResults = ({ userData }) => {
  if (!userData) {
    return <p>No results yet. Enter a username and search.</p>;
  }

  return (
    <div>
      <h2>Results:</h2>
      <p>Username: {userData.login}</p>
      <p>Profile URL: <a href={userData.html_url}>{userData.html_url}</a></p>
      <img src={userData.avatar_url} alt="User Avatar" width="100" />
    </div>
  );
};

export default SearchResults;
