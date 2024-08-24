import React, { useEffect } from 'react';
import useRecipeStore from '../store/recipeStore'; // Adjust path as necessary

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.filteredRecipes);
  const filterRecipes = useRecipeStore(state => state.filterRecipes);

  useEffect(() => {
    filterRecipes(); // Ensure recipes are filtered on initial render
  }, [filterRecipes]);

  return (
    <div>
      {recipes.length === 0 ? (
        <p>No recipes found.</p>
      ) : (
        recipes.map(recipe => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
