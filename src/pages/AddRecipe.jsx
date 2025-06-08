import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addRecipe } from "../services/api";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function AddRecipe() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: (data) =>
      addRecipe({
        ...data,
        ingredients: data.ingredients.split(",").map((i) => i.trim()),
      }),
    onSuccess: () => {
      toast.success("Recipe added successfully");
      queryClient.invalidateQueries({ queryKey: ["recipes"] });
      navigate(-1);
    },
    onError: () => toast.error("Failed to add recipe"),
  });

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold text-brand mb-6">Add Recipe</h1>

      <form
        onSubmit={handleSubmit((data) => mutate(data))}
        className="space-y-6"
      >
        {/* Title */}
        <div>
          <label className="block font-medium mb-1">Title</label>
          <input
            {...register("title", { required: "Title is required" })}
            className="w-full border border-gray-300 focus:border-brand focus:ring-1 focus:ring-brand focus:outline-none px-3 py-2 rounded"
          />
          {errors.title && (
            <p className="text-danger text-sm mt-1">{errors.title.message}</p>
          )}
        </div>

        {/* Category */}
        <div>
          <label className="block font-medium mb-1">Category</label>
          <input
            {...register("category", { required: "Category is required" })}
            className="w-full border border-gray-300 focus:border-brand focus:ring-1 focus:ring-brand focus:outline-none px-3 py-2 rounded"
          />
          {errors.category && (
            <p className="text-danger text-sm mt-1">
              {errors.category.message}
            </p>
          )}
        </div>

        {/* Image URL */}
        <div>
          <label className="block font-medium mb-1">Image URL</label>
          <input
            {...register("image", { required: "Image URL is required" })}
            className="w-full border border-gray-300 focus:border-brand focus:ring-1 focus:ring-brand focus:outline-none px-3 py-2 rounded"
          />
          {errors.image && (
            <p className="text-danger text-sm mt-1">{errors.image.message}</p>
          )}
        </div>

        {/* Ingredients */}
        <div>
          <label className="block font-medium mb-1">
            Ingredients (comma separated)
          </label>
          <input
            {...register("ingredients", {
              required: "Ingredients are required",
            })}
            className="w-full border border-gray-300 focus:border-brand focus:ring-1 focus:ring-brand focus:outline-none px-3 py-2 rounded"
          />
          {errors.ingredients && (
            <p className="text-danger text-sm mt-1">
              {errors.ingredients.message}
            </p>
          )}
        </div>

        {/* Instructions */}
        <div>
          <label className="block font-medium mb-1">Instructions</label>
          <textarea
            {...register("instructions", {
              required: "Instructions are required",
            })}
            rows={6}
            className="w-full border border-gray-300 focus:border-brand focus:ring-1 focus:ring-brand focus:outline-none px-3 py-2 rounded"
          />
          {errors.instructions && (
            <p className="text-danger text-sm mt-1">
              {errors.instructions.message}
            </p>
          )}
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          <button
            type="submit"
            disabled={isPending}
            className="bg-brand text-white px-6 py-2 rounded hover:bg-brand-dark transition"
          >
            {isPending ? "Adding..." : "Add Recipe"}
          </button>

          <button
            type="button"
            onClick={() => navigate(-1)}
            className="border border-gray-300 text-base-text px-6 py-2 rounded hover:bg-gray-100 transition"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
