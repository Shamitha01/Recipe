export default function Spinner() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-4">
        <div className="w-20 h-20 border-4 border-teal-500 border-t-transparent rounded-full animate-spin" />
        <p className="text-teal-500 font-semibold text-lg">Loading...</p>
      </div>
    );
  }
  