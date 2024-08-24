// src/components/RecipeList.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import useRecipeStore from '../store/recipeStore'; // Adjust the path to your Zustand store

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.filteredRecipes); // Get filtered recipes from Zustand store

  return (
    <div>
      <h2>Recipe List</h2>
      {recipes.length === 0 ? (
        <p>No recipes found.</p>
      ) : (
        recipes.map(recipe => (
          <div key={recipe.id}>
            <Link to={`/recipes/${recipe.id}`}>
              <h3>{recipe.title}</h3>
              <p>{recipe.description}</p>
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
