import { useQuery } from "@tanstack/react-query";
import { getRecipes } from "../services/api";

export const useRecipes = () => {
  return useQuery({
    queryKey: ["recipes"],
    queryFn: getRecipes,
  });
};
