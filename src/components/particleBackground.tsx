import { memo, useContext, useEffect, useMemo, useRef } from "react";
import Particles from "@tsparticles/react";
import { Container, ISourceOptions } from "@tsparticles/engine";
import { DarkModeContext } from "../contexts/darkModeContext";

const LightParticleColor = "#964B00";
const DarkParticleColor = "#ffffff";

const ParticleBackground = () => {
  const containerRef = useRef<Container | undefined>(undefined);
  const { isDarkMode } = useContext(DarkModeContext);
  const particleColor = isDarkMode ? DarkParticleColor : LightParticleColor;

  const backgroundOptions: ISourceOptions = {
    fpsLimit: 120,
    interactivity: {
      detectsOn: "canvas",
      events: {
        onHover: {
          enable: true,
          mode: "bubble",
        },
      },
      modes: {
        bubble: {
          distance: 100,
          size: 10,
          opacity: -1,
        },
      },
    },
    particles: {
      color: {
        value: particleColor,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        speed: 0.3,
      },
      number: {
        value: 250,
      },
      opacity: {
        value: 0.2,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 3, max: 5 },
      },
    },
    detectRetina: true,
  };

  const handleParticlesLoaded = (
    container?: Container | undefined
  ): Promise<void> => {
    if (!container) return Promise.resolve();

    containerRef.current = container;
    return Promise.resolve();
  };

  useEffect(() => {
    if (!containerRef.current) return;

    const particleColor = isDarkMode ? DarkParticleColor : LightParticleColor;
    containerRef.current.options.particles.color.value = particleColor;
    containerRef.current.refresh().then();
  }, [isDarkMode]);

  return useMemo(() => {
    return (
      <div>
        <Particles
          id='backgroundParticles'
          options={backgroundOptions}
          className='fixed z-[-10]'
          particlesLoaded={handleParticlesLoaded}
        />
      </div>
    );
  }, []);
};

export default memo(ParticleBackground);