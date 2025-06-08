import { useState } from "react";
import { useRecipes } from "../hooks/useRecipes";
import RecipeCard from "../components/RecipeCard";
import Spinner from "../components/Spinner";

export default function Recipes() {
  const { data, isLoading, isError } = useRecipes();
  const [search, setSearch] = useState("");

  if (isLoading) return <Spinner />;
  if (isError) return <p className="p-4 text-danger">Error loading recipes.</p>;

  const filteredRecipes = data?.filter(
    (recipe) =>
      recipe.title.toLowerCase().includes(search.toLowerCase()) ||
      recipe.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 pt-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold text-brand uppercase text-center mb-6">
        Recipes
      </h2>

      {/* Search input */}
      <div className="mb-6 max-w-md mx-auto">
        <input
          type="text"
          placeholder="Search recipes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-brand"
        />
      </div>

      {/* Recipe cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))
        ) : (
          <p className="text-center col-span-full text-base-muted dark:text-base-darkMuted">
            No recipes found.
          </p>
        )}
      </div>
    </div>
  );
}
