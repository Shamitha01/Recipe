import { BrowserRouter } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App() {
  const navigate = useNavigate(); 
  return (
    <div className="min-h-screen bg-base-bg text-base-text flex items-center justify-center px-4">
      <div className="text-center max-w-md sm:max-w-lg md:max-w-2xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand mb-4">
          Welcome to Recipe Book
        </h1>
        <p className="text-base text-base-muted mb-6">
          A clean and colorful place to collect, browse, and share your favorite recipes.
        </p>
        <button 
         onClick={() => navigate("/recipes")}
        className="bg-brand hover:bg-brand-dark text-white px-6 py-3 rounded shadow text-base sm:text-lg">
          Start Searching for Recipes
        </button>
      </div>
    </div>
  );
}


