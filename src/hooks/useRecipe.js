import { useQuery } from "@tanstack/react-query";
import { getRecipe } from "../services/api";

export function useRecipe(id) {
  return useQuery({
    queryKey: ["recipe", id],
    queryFn: () => getRecipe(id),
  });
}
