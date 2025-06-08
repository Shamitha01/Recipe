

import { Outlet } from "react-router-dom";

export default function Layout() {

  return (
    <main className="flex-grow max-w-6xl w-full mx-auto px-2 sm:px-4 pt-6 pb-10">
      <Outlet />
    </main>
  );
}