import { createContext } from "react";

type DarkModeContextType = {
  isDarkMode: boolean;
  setDarkMode: (isDarkMode: boolean) => void;
};

export const DarkModeContext = createContext<DarkModeContextType>({
  isDarkMode: false,
  setDarkMode: () => {},
});
