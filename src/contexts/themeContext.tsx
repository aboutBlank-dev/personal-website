import { createContext, useEffect, useState } from "react";

type Theme = "light" | "dark";
type ThemeContextType = {
  currentTheme: Theme;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  currentTheme: "light",
  toggleTheme: () => {},
});

export function ThemeContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<Theme>("light");

  //When the component mounts, set the theme based on user preference
  useEffect(() => {
    const userPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (userPrefersDark) {
      setTheme("dark");
      document.body.classList.add("dark");
    } else {
      setTheme("light");
      document.body.classList.add("light");
    }
  }, []);

  //Update the body class when the theme changes
  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    console.log("toggling theme");
  };

  return (
    <ThemeContext.Provider value={{ currentTheme: theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
