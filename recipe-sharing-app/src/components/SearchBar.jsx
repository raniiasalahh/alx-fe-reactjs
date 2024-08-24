import React, { useEffect } from 'react';
import useRecipeStore from '../store/recipeStore'; // Adjust path as necessary

const SearchBar = () => {
  const setSearchTerm = useRecipeStore(state => state.setSearchTerm);
  const filterRecipes = useRecipeStore(state => state.filterRecipes);

  const handleChange = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);
    filterRecipes(); // Trigger filtering
  };

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      onChange={handleChange}
      style={{ marginBottom: '20px', padding: '8px', width: '100%' }}
    />
  );
};

export default SearchBar;
