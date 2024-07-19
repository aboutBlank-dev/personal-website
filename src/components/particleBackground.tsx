import { useEffect, useRef, useState } from "react";
import Particles from "@tsparticles/react";
import { ISourceOptions } from "@tsparticles/engine";
import { useTheme } from "../contexts/themeContext";

const LightParticleColor = "#964B00";
const DarkParticleColor = "#ffffff";

const ParticleBackground = () => {
  const [backgroundOptions, setBackgroundOptions] =
    useState<ISourceOptions>(BackgroundOptions);
  const theme = useTheme();

  //Change particle color based on theme
  useEffect(() => {
    setBackgroundOptions((prevOptions) => {
      const newOptions = { ...prevOptions };

      if (newOptions?.particles?.color) {
        newOptions.particles.color.value =
          theme.currentTheme === "dark"
            ? DarkParticleColor
            : LightParticleColor;
      }
      return newOptions;
    });
  }, [theme.currentTheme]);

  return (
    <div className='blur-[2px] w-full h-screen fixed'>
      <Particles id='backgroundParticles' options={backgroundOptions} />
    </div>
  );
};

export default ParticleBackground;

const BackgroundOptions: ISourceOptions = {
  autoPlay: true,
  backgroundMask: {
    composite: "destination-out",
    cover: {
      color: {
        value: "#fff",
      },
      opacity: 1,
    },
    enable: false,
  },
  clear: true,
  delay: 0,
  fullScreen: {
    enable: true,
    zIndex: 0,
  },
  detectRetina: true,
  duration: 0,
  fpsLimit: 120,
  interactivity: {
    detectsOn: "window",
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onHover: {
        enable: true,
        parallax: {
          enable: true,
          force: 60,
          smooth: 10,
        },
      },
    },
    modes: {
      trail: {
        delay: 1,
        pauseOnStop: false,
        quantity: 1,
      },
      attract: {
        distance: 200,
        duration: 0.4,
        easing: "ease-out-quad",
        factor: 1,
        maxSpeed: 50,
        speed: 1,
      },
      bounce: {
        distance: 200,
      },
      bubble: {
        distance: 400,
        duration: 2,
        mix: false,
        opacity: 0.8,
        size: 40,
        divs: {
          distance: 200,
          duration: 0.4,
          mix: false,
          selectors: {},
        },
      },
      grab: {
        distance: 400,
      },
      remove: {
        quantity: 2,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
        factor: 100,
        speed: 1,
        maxSpeed: 50,
        easing: "ease-out-quad",
        divs: {
          distance: 200,
          duration: 0.4,
          factor: 100,
          speed: 1,
          maxSpeed: 50,
          easing: "ease-out-quad",
          selectors: {},
        },
      },
      slow: {
        factor: 3,
        radius: 200,
      },
    },
  },
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
      value: "#ffffff",
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
    effect: {
      close: true,
      fill: true,
      options: {},
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
      direction: "none",
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
        bottom: "out",
        left: "out",
        right: "out",
        top: "out",
      },
      random: true,
      size: false,
      speed: 2,
      spin: {
        acceleration: 0,
        enable: false,
      },
      straight: false,
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
      value: 100,
    },
    opacity: {
      value: {
        min: 0.1,
        max: 0.5,
      },
      animation: {
        count: 0,
        enable: true,
        speed: 3,
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
      value: {
        min: 1,
        max: 10,
      },
      animation: {
        count: 0,
        enable: true,
        speed: 20,
        decay: 0,
        delay: 0,
        sync: false,
        mode: "auto",
        startValue: "random",
        destroy: "none",
      },
    },
    zIndex: {
      value: 0,
      opacityRate: 1,
      sizeRate: 1,
      velocityRate: 1,
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
        particles: {},
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
      particles: {
        enable: false,
        frequency: 0.05,
        opacity: 1,
      },
    },
    wobble: {
      distance: 5,
      enable: false,
      speed: {
        angle: 50,
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
    repulse: {
      value: 0,
      enabled: false,
      distance: 1,
      duration: 1,
      factor: 1,
      speed: 1,
    },
  },
  responsive: [],
  smooth: false,
  style: {},
  themes: [],
  zLayers: 100,
  motion: {
    disable: false,
    reduce: {
      factor: 4,
      value: true,
    },
  },
};
