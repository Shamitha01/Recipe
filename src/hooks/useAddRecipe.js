import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addRecipe } from "../services/api";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useAddRecipe() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
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
}
