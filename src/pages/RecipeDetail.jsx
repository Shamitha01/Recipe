import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getRecipe } from "../services/api";
import { FaHeart, FaRegHeart, FaEdit } from "react-icons/fa";
import { useState } from "react";

export default function RecipeDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [liked, setLiked] = useState(false);

  const {
    data: recipe,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["recipe", id],
    queryFn: () => getRecipe(id),
  });

  if (isLoading) {
    return (
      <div className="text-center text-base-muted dark:text-base-darkMuted py-10">
        Loading...
      </div>
    );
  }

  if (isError || !recipe) {
    return (
      <p className="text-center text-danger dark:text-red-500 font-semibold py-10">
        Error loading recipe.
      </p>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-10 bg-white dark:bg-gray-900 text-base-text dark:text-base-darkText rounded shadow-teal dark:shadow-none">
      <h1 className="text-3xl font-bold text-brand mb-1">{recipe.title}</h1>
      <p className="text-base-muted dark:text-base-darkMuted mb-4">
        {recipe.category}
      </p>

      <div className="flex items-center space-x-4 mb-6 text-lg">
        <button
          onClick={() => setLiked((prev) => !prev)}
          className={`transition ${
            liked
              ? "text-brand"
              : "text-black hover:text-brand dark:text-white dark:hover:text-brand"
          }`}
        >
          {liked ? <FaHeart /> : <FaRegHeart />}
        </button>

        <button
          onClick={() => navigate(`/edit-recipe/${recipe.id}`)}
          title="Edit Recipe"
          className="text-black dark:text-white hover:text-brand dark:hover:text-brand transition"
        >
          <FaEdit />
        </button>
      </div>

      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-60 object-cover rounded mb-6"
      />

      <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
        Ingredients
      </h3>
      <ul className="list-disc list-inside space-y-1 text-base-muted dark:text-base-darkMuted mb-6">
        {recipe.ingredients.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
        Instructions
      </h3>
      <p className="text-base-muted dark:text-base-darkMuted">
        {recipe.instructions}
      </p>
    </div>
  );
}
