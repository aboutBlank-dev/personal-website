import { useEffect, useState } from "react";
import { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import DarkModeToggle from "./components/darkmodeToggle";
import ParticleBackground from "./components/particleBackground";
import DarkModeUtils from "./utils/darkModeUtils";
import { DarkModeContext } from "./contexts/darkModeContext";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(
    DarkModeUtils.getDefaultIsDarkMode()
  );

  const setDarkMode = (isDarkMode: boolean) => {
    setIsDarkMode(isDarkMode);
    DarkModeUtils.setDarkMode(isDarkMode);
  };

  //Set dark mode based on system preference/previous preference (only once at the start of app)
  useEffect(() => {
    DarkModeUtils.setDarkMode(isDarkMode);
  }, []);

  const [particlesInit, setParticlesInit] = useState(false);
  //Load particles.js. This should only run once per lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setParticlesInit(true);
    });
  }, []);

  return (
    <DarkModeContext.Provider
      value={{ isDarkMode: isDarkMode, setDarkMode: setDarkMode }}
    >
      {particlesInit && <ParticleBackground />}
      <DarkModeToggle />
    </DarkModeContext.Provider>
  );
}

export default App;
