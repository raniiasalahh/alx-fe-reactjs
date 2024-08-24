import React from 'react';
import useRecipeStore from '../store/recipeStore'; // Adjust the path as needed

const FavoritesList = () => {
  const recipes = useRecipeStore(state => state.recipes);
  const favorites = useRecipeStore(state => state.favorites);
  const favoriteRecipes = favorites.map(id => recipes.find(recipe => recipe.id === id));

  return (
    <div>
      <h2>My Favorites</h2>
      {favoriteRecipes.length === 0 ? (
        <p>No favorite recipes.</p>
      ) : (
        favoriteRecipes.map(recipe => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            {/* Add
