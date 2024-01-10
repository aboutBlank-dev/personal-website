export default class DarkModeUtils {
  static getDefaultIsDarkMode(): boolean {
    const matches = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (localStorage.getItem("color-theme") === "dark" || matches) {
      return true;
    } else {
      return false;
    }
  }

  static setDarkMode(isDarkMode: boolean): void {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      localStorage.setItem("color-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      localStorage.setItem("color-theme", "light");
    }
  }
}
