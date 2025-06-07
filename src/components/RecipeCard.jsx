import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaHeart, FaRegHeart, FaEdit } from "react-icons/fa";

export default function RecipeCard({ recipe }) {
  const [liked, setLiked] = useState(false);
  const navigate = useNavigate();

  const toggleLike = (e) => {
    e.stopPropagation(); // Prevent click from triggering card navigation
    setLiked((prev) => !prev);
  };

  const goToEdit = (e) => {
    e.stopPropagation();
    navigate(`/edit-recipe/${recipe.id}`);
  };

  const goToDetails = () => {
    navigate(`/recipes/${recipe.id}`);
  };

  return (
    <div
      className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 hover:shadow-lg transition cursor-pointer"
      onClick={goToDetails}
    >
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-40 object-cover rounded mb-3"
      />

      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-lg font-semibold text-base-text dark:text-white">
            {recipe.title}
          </h2>
          <p className="text-sm text-base-muted dark:text-gray-400">
            {recipe.category}
          </p>
        </div>

        <div className="flex space-x-3 text-lg">
          <button
            onClick={toggleLike}
            title="Add to Favorites"
            className={`transition ${
              liked ? "text-brand" : "text-black dark:text-white"
            }`}
          >
            {liked ? <FaHeart /> : <FaRegHeart />}
          </button>

          <button
            onClick={goToEdit}
            title="Edit Recipe"
            className="text-black dark:text-white hover:text-brand transition"
          >
            <FaEdit />
          </button>
        </div>
      </div>
    </div>
  );
}
