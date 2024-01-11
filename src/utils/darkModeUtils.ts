export default class DarkModeUtils {
  static getDefaultIsDarkMode(): boolean {
    if (localStorage.getItem("color-theme") === "dark") {
      return true;
    } else if (localStorage.getItem("color-theme") === "light") {
      return false;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
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
