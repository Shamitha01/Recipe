import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center px-4 py-12">
      <div className="text-center max-w-md sm:max-w-lg md:max-w-2xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand mb-4">
          Welcome to Recipe Book
        </h1>
        <p className="text-base-muted mb-6">
          Discover, add, and manage your favorite recipes — fast and
          beautifully.
        </p>
        <button
          onClick={() => navigate("/recipes")}
          className="bg-brand hover:bg-brand-dark text-white px-6 py-3 rounded shadow text-base sm:text-lg"
        >
          Start Searching for Recipes
        </button>
      </div>
    </div>
  );
}
