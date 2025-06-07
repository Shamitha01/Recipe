import Navbar from "./components/Navbar";
import AppRoutes from "./router/AppRoutes";
import { Toaster } from "react-hot-toast";
export default function App() {
  return (
    <>
      <Navbar />
      <AppRoutes />
      <Toaster
  position="top-center"
  toastOptions={{
    duration: 3000,
    style: {
      background: "#fff",
      color: "#14b8a6", // brand teal
      border: "1px solid #14b8a6",
      fontWeight: "500",
    },
  }}
/>
    </>
  );
}
