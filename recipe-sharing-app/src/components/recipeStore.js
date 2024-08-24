import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [], // List of recipes
  favorites: [], // List of favorite recipe IDs
  searchTerm: '', // Term for search filtering
  filteredRecipes: [], // Filtered recipes based on search term
  recommendations: [], // List of recommended recipes

  // Add a new recipe to the recipes list
  addRecipe: (newRecipe) => set((state) => ({
    recipes: [...state.recipes, newRecipe],
  })),

  // Set recipes with an initial value (e.g., loading from an API)
  setRecipes: (recipes) => set({ recipes }),

  // Add a recipe to the favorites list
  addFavorite: (recipeId) => set((state) => ({
    favorites: [...state.favorites, recipeId],
  })),

  // Remove a recipe from the favorites list
  removeFavorite: (recipeId) => set((state) => ({
    favorites: state.favorites.filter((id) => id !== recipeId),
  })),

  // Generate recommendations based on favorites
  generateRecommendations: () => set((state) => {
    // Example recommendation logic
    const recommended = state.recipes.filter((recipe) =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5
    );
    return { recommendations: recommended };
  }),

  // Update the search term for filtering recipes
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(term.toLowerCase())
      ),
    }));
  },

  // Filter recipes based on the current search term
  filterRecipes: () => set((state) => ({
    filteredRecipes: state.recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    ),
  })),
}));

export { useRecipeStore };
