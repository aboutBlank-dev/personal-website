import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { backgroundSourceOptions } from "./particles/sourceOptions/backgroundSourceOptions";

function App() {
  const [init, setInit] = useState(false);
  //Load particles.js. This should only run once per lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const backgroundOptions = useMemo(() => backgroundSourceOptions, []);
  if (init) {
    return (
      <div>
        {/* Background of the Entire App */}
        <Particles
          id='backgroundParticles'
          options={backgroundOptions}
          className='fixed z-[-10]'
        />
      </div>
    );
  }

  return <></>;
}

export default App;

export enum PageType {
  Home,
}
