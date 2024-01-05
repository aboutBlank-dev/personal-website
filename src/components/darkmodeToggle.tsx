import { useContext } from "react";
import { DarkModeContext } from "../contexts/darkModeContext";

const DarkModeToggle = () => {
  const { isDarkMode, setDarkMode } = useContext(DarkModeContext);
  return (
    <div
      onClick={() => setDarkMode(!isDarkMode)}
      className='bg-red-500 dark:bg-blue-500'
    >
      Dark Mode Toggle
    </div>
  );
};

export default DarkModeToggle;
