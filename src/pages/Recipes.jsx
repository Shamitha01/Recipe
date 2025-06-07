import { useRecipes } from "../hooks/useRecipes";
import RecipeCard from "../components/RecipeCard"
import Spinner from "../components/Spinner"
export default function Recipes() {
  const { data, isLoading, isError } = useRecipes();

  if (isLoading) return <Spinner/>;
  if (isError) return <p className="p-4 text-danger">Error loading recipes.</p>;

  return (
    <div className="p-4 pt-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold text-brand uppercase text-center mb-4">Recipes</h2>
  
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {data?.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
  
}
