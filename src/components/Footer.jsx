export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 text-base-muted dark:text-gray-400 py-4 px-4 border-t border-gray-200 dark:border-gray-700 shadow-tealUpward">
      <div className="max-w-6xl mx-auto text-center text-sm">
        © {new Date().getFullYear()} RecipeBook. All rights reserved.
      </div>
    </footer>
  );
}
