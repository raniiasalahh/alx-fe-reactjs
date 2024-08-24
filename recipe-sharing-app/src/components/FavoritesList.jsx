import React from 'react';
import useRecipeStore from '../store/recipeStore'; // Adjust path as necessary

const FavoritesList = () => {
  const recipes = useRecipeStore(state => state.recipes);
  const favoriteIds = useRecipeStore(state => state.favorites);

  const favorites = recipes.filter(recipe => favoriteIds.includes(recipe.id));

  return (
    <div>
      <h2>My Favorites</h2>
      {favorites.length === 0 ? (
        <p>No favorite recipes.</p>
      ) : (
        favorites.map(recipe => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default FavoritesList;
