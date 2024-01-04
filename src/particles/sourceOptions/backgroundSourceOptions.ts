import { ISourceOptions } from "@tsparticles/engine";

export const backgroundSourceOptions: ISourceOptions = {
  background: {
    color: {
      value: "#000000",
    },
  },
  fpsLimit: 120,
  particles: {
    color: {
      value: "#ffffff",
    },
    links: {
      color: "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
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
      density: {
        enable: true,
      },
      value: 80,
    },
    opacity: {
      value: 1,
    },
    shape: {
      type: "square",
    },
    size: {
      value: { min: 3, max: 5 },
    },
  },
  detectRetina: true,
};
