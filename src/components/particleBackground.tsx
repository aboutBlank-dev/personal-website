import { useContext, useEffect, useMemo, useRef } from "react";
import Particles from "@tsparticles/react";
import { Container, ISourceOptions } from "@tsparticles/engine";
import { DarkModeContext } from "../contexts/darkModeContext";

const LightParticleColor = "#964B00";
const DarkParticleColor = "#ffffff";

const ParticleBackground = () => {
  const containerRef = useRef<Container | undefined>(undefined);
  const { isDarkMode } = useContext(DarkModeContext);
  const particleColor = isDarkMode ? DarkParticleColor : LightParticleColor;

  // const backgroundOptions: ISourceOptions = {
  //   fpsLimit: 60,
  //   particles: {
  //     rotate: {
  //       random: true,
  //       direction: "",
  //       animation: {
  //         enable: true,
  //         speed: 0.5,
  //         random: false,
  //       },
  //     },
  //     color: {
  //       value: particleColor,
  //     },
  //     opacity: {
  //       value: 0.5,
  //     },
  //     shape: {
  //       type: "char",
  //       options: {
  //         char: [
  //           {
  //             fill: true,
  //             font: "Verdana",
  //             style: "",
  //             value: ["[]"],
  //             weight: "1000",
  //           },
  //         ],
  //       },
  //     },
  //     move: {
  //       direction: "bottom",
  //       enable: true,
  //       speed: 1,
  //       straight: true,
  //     },
  //     number: {
  //       value: 10,
  //     },
  //     size: {
  //       value: 100,
  //     },
  //   },
  //   detectRetina: true,
  // };

  const backgroundOptions: ISourceOptions = {
    autoPlay: true,
    clear: true,
    defaultThemes: {},
    detectRetina: true,
    fpsLimit: 60,
    particles: {
      bounce: {
        horizontal: {
          value: 1,
        },
        vertical: {
          value: 1,
        },
      },
      collisions: {
        absorb: {
          speed: 2,
        },
        bounce: {
          horizontal: {
            value: 1,
          },
          vertical: {
            value: 1,
          },
        },
        enable: false,
        maxSpeed: 50,
        mode: "bounce",
        overlap: {
          enable: true,
          retries: 0,
        },
      },
      color: {
        value: particleColor,
        animation: {
          h: {
            count: 0,
            enable: false,
            speed: 1,
            decay: 0,
            delay: 0,
            sync: true,
            offset: 0,
          },
          s: {
            count: 0,
            enable: false,
            speed: 1,
            decay: 0,
            delay: 0,
            sync: true,
            offset: 0,
          },
          l: {
            count: 0,
            enable: false,
            speed: 1,
            decay: 0,
            delay: 0,
            sync: true,
            offset: 0,
          },
        },
      },
      move: {
        angle: {
          offset: 0,
          value: 90,
        },
        attract: {
          distance: 200,
          enable: false,
          rotate: {
            x: 3000,
            y: 3000,
          },
        },
        center: {
          x: 50,
          y: 50,
          mode: "percent",
          radius: 0,
        },
        decay: 0,
        distance: {},
        direction: "bottom",
        drift: 0,
        enable: true,
        gravity: {
          acceleration: 9.81,
          enable: false,
          inverse: false,
          maxSpeed: 50,
        },
        path: {
          clamp: true,
          delay: {
            value: 0,
          },
          enable: false,
          options: {},
        },
        outModes: {
          default: "out",
        },
        random: false,
        size: false,
        speed: 2,
        spin: {
          acceleration: 0,
          enable: false,
        },
        straight: true,
        trail: {
          enable: false,
          length: 10,
          fill: {},
        },
        vibrate: false,
        warp: false,
      },
      number: {
        density: {
          enable: true,
          width: 1920,
          height: 1080,
        },
        limit: {
          mode: "delete",
          value: 0,
        },
        value: 400,
      },
      opacity: {
        value: 1,
        animation: {
          count: 0,
          enable: false,
          speed: 2,
          decay: 0,
          delay: 0,
          sync: false,
          mode: "auto",
          startValue: "random",
          destroy: "none",
        },
      },
      reduceDuplicates: false,
      shadow: {
        blur: 0,
        color: {
          value: "#000",
        },
        enable: false,
        offset: {
          x: 0,
          y: 0,
        },
      },
      shape: {
        close: true,
        fill: true,
        options: {},
        type: "circle",
      },
      size: {
        value: 10,
        animation: {
          count: 0,
          enable: false,
          speed: 5,
          decay: 0,
          delay: 0,
          sync: false,
          mode: "auto",
          startValue: "random",
          destroy: "none",
        },
      },
      stroke: {
        width: 0,
      },
      zIndex: {
        value: {
          min: 0,
          max: 100,
        },
        opacityRate: 10,
        sizeRate: 10,
        velocityRate: 10,
      },
      destroy: {
        bounds: {},
        mode: "none",
        split: {
          count: 1,
          factor: {
            value: 3,
          },
          rate: {
            value: {
              min: 4,
              max: 9,
            },
          },
          sizeOffset: true,
        },
      },
      roll: {
        darken: {
          enable: false,
          value: 0,
        },
        enable: false,
        enlighten: {
          enable: false,
          value: 0,
        },
        mode: "vertical",
        speed: 25,
      },
      tilt: {
        value: 0,
        animation: {
          enable: false,
          speed: 0,
          decay: 0,
          sync: false,
        },
        direction: "clockwise",
        enable: false,
      },
      twinkle: {
        lines: {
          enable: false,
          frequency: 0.05,
          opacity: 1,
        },
        particles: {
          enable: false,
          frequency: 0.05,
          opacity: 1,
        },
      },
      wobble: {
        distance: 10,
        enable: true,
        speed: {
          angle: 10,
          move: 10,
        },
      },
      life: {
        count: 0,
        delay: {
          value: 0,
          sync: false,
        },
        duration: {
          value: 0,
          sync: false,
        },
      },
      rotate: {
        value: 0,
        animation: {
          enable: false,
          speed: 0,
          decay: 0,
          sync: false,
        },
        direction: "clockwise",
        path: false,
      },
      orbit: {
        animation: {
          count: 0,
          enable: false,
          speed: 1,
          decay: 0,
          delay: 0,
          sync: false,
        },
        enable: false,
        opacity: 1,
        rotation: {
          value: 45,
        },
        width: 1,
      },
      links: {
        blink: false,
        color: {
          value: "#fff",
        },
        consent: false,
        distance: 100,
        enable: false,
        frequency: 1,
        opacity: 1,
        shadow: {
          blur: 5,
          color: {
            value: "#000",
          },
          enable: false,
        },
        triangles: {
          enable: false,
          frequency: 1,
        },
        width: 1,
        warp: false,
      },
      repulse: {
        value: 0,
        enabled: false,
        distance: 1,
        duration: 1,
        factor: 1,
        speed: 1,
      },
    },
    smooth: false,
    zLayers: 100,
    motion: {
      disable: false,
      reduce: {
        factor: 4,
        value: true,
      },
    },
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

  return (
    <Particles
      id='backgroundParticles'
      options={backgroundOptions}
      className='fixed z-[-10]'
      particlesLoaded={handleParticlesLoaded}
    />
  );
};

export default ParticleBackground;
