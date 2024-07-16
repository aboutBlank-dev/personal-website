import { useEffect, useState } from "react";
import { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import DarkModeToggle from "./components/darkmodeToggle";
import ParticleBackground from "./components/particleBackground";
import { ThemeContextProvider } from "./contexts/themeContext";

function App() {
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
    <ThemeContextProvider>
      {particlesInit && <ParticleBackground />}
      <DarkModeToggle />
    </ThemeContextProvider>
  );
}

export default App;
