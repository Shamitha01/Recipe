import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Recipes from "../pages/Recipes";
import RecipeDetails from "../pages/RecipeDetails";
import AddRecipes from "../pages/AddRecipes";
import EditRecipes from "../pages/EditRecipes";
import NotFound from "../pages/NotFound";

export default function AppRoutes() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/:id" element={<RecipeDetails />} />
        <Route path="/add-recipe" element={<AddRecipes />} />
        <Route path="/edit-recipe/:id" element={<EditRecipes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    );
  }
  