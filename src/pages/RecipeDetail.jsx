import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getRecipe } from "../services/api";
import { useState } from "react";
import { FaHeart, FaRegHeart, FaEdit } from "react-icons/fa";

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

  if (isLoading)
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <div className="w-12 h-12 border-4 border-brand border-t-transparent rounded-full animate-spin" />
      </div>
    );

  if (isError)
    return (
      <p className="text-center text-danger font-semibold py-10">
        Error loading recipe.
      </p>
    );

  const toggleLike = () => setLiked((prev) => !prev);
  const goToEdit = () => navigate(`/edit-recipe/${recipe.id}`);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 space-y-6">
      {/* Title, Category, and Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-brand mb-1">
            {recipe.title}
          </h1>
          <p className="text-base-muted text-sm">{recipe.category}</p>
        </div>

        <div className="flex items-center gap-4 text-lg">
          <button
            onClick={toggleLike}
            title="Add to Favorites"
            className={`transition ${
              liked ? "text-brand" : "text-black"
            }`}
          >
            {liked ? <FaHeart /> : <FaRegHeart />}
          </button>

          <button
            onClick={goToEdit}
            title="Edit Recipe"
            className="text-black hover:text-brand transition"
          >
            <FaEdit />
          </button>
        </div>
      </div>

      {/* Image */}
      {recipe.image && (
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full rounded shadow-sm"
        />
      )}

      {/* Ingredients */}
      <div>
        <h2 className="text-xl font-semibold text-base-text mb-2">
          Ingredients
        </h2>
        <ul className="list-disc list-inside space-y-1 text-base-muted">
          {recipe.ingredients?.map((ing, i) => (
            <li key={i}>{ing}</li>
          ))}
        </ul>
      </div>

      {/* Instructions */}
      <div>
        <h2 className="text-xl font-semibold text-base-text mb-2">
          Instructions
        </h2>
        <p className="text-base-muted whitespace-pre-line leading-relaxed">
          {recipe.instructions}
        </p>
      </div>
    </div>
  );
}
