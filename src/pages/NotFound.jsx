import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h1 className="text-6xl font-bold text-brand mb-4">404</h1>
      <p className="text-lg text-base-muted mb-6">
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <button
        onClick={() => navigate("/")}
        className="bg-brand hover:bg-brand-dark text-white px-6 py-2 rounded transition"
      >
        Go to Home
      </button>
    </div>
  );
}
