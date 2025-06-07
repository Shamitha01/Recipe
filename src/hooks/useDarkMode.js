import { useEffect, useState } from "react";

export default function useDarkMode() {
  const [enabled, setEnabled] = useState(
    () => localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    if (enabled) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", enabled);
  }, [enabled]);

  return [enabled, setEnabled];
}
