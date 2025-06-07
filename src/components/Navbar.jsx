import { NavLink } from "react-router-dom";

export default function Navbar() {
  const baseClasses =
    "px-3 py-2 rounded transition duration-200 text-sm sm:text-base";

  const getLinkClasses = ({ isActive }) =>
    isActive
      ? `${baseClasses} bg-brand text-white`
      : `${baseClasses} text-base-text hover:bg-brand hover:text-white`;

  return (
    <nav className="bg-white shadow-md shadow-brand/20 px-4 py-2 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Brand */}
        <NavLink to="/" className="text-xl font-bold text-brand">
          RecipeBook
        </NavLink>

        {/* Nav Links */}
        <div className="space-x-2">
          <NavLink to="/recipes" className={getLinkClasses}>
            Recipes
          </NavLink>
          <NavLink to="/add-recipe" className={getLinkClasses}>
            Add Recipe
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
