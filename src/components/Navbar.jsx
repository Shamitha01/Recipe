import { NavLink } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";
import useDarkMode from "../hooks/useDarkMode";

export default function Navbar() {
  const [darkMode, setDarkMode] = useDarkMode();

  const baseClasses =
    "px-3 py-2 rounded transition duration-200 text-sm sm:text-base";

  const getLinkClasses = ({ isActive }) =>
    isActive
      ? `${baseClasses} bg-brand text-white`
      : `${baseClasses} text-base-text dark:text-white hover:bg-brand hover:text-white`;

  return (
    <nav className="bg-white dark:bg-gray-900 text-base-text dark:text-base-darkText shadow-tealDownward  px-4 py-2 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Brand */}
        <NavLink
          to="/"
          className="text-xl font-bold text-brand dark:text-brand-light"
        >
          RecipeBook
        </NavLink>

        {/* Nav Links */}
        <div className="flex items-center space-x-2">
          <NavLink to="/recipes" className={getLinkClasses}>
            Recipes
          </NavLink>
          <NavLink to="/add-recipe" className={getLinkClasses}>
            Add Recipe
          </NavLink>

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode((prev) => !prev)}
            className="p-2 rounded hover:bg-brand hover:text-white transition"
            title="Toggle Dark Mode"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </div>
    </nav>
  );
}
