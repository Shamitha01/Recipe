// src/App.js

import Navbar from "./components/Navbar";
import AppRoutes from "./router/AppRoutes";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    // Make this the main container that fills the screen
    <div className="flex flex-col min-h-screen bg-white text-black">
      <Navbar />
      <AppRoutes />
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 3000,
          style: {
            background: "#fff",
            color: "#14b8a6",
            border: "1px solid #14b8a6",
            fontWeight: "500",
          },
        }}
      />
    </div>
  );
}