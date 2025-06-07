import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black overflow-x-hidden">
     <main className="flex-grow max-w-6xl w-full mx-auto px-2 sm:px-4 pt-6 pb-10">
        <Outlet />
      </main>
    </div>
  );
}
