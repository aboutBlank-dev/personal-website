import { Canvas, CanvasProps } from "@react-three/fiber";
import React from "react";

interface ThreeCanvasProps extends CanvasProps {
  children: React.ReactNode;
}

const ThreeCanvas: React.FC<ThreeCanvasProps> = ({ children, ...props }) => {
  return (
    <Canvas
      orthographic
      camera={{ zoom: 50, position: [0, 0, 10], near: 0 }}
      {...props}
    >
      <ambientLight intensity={2.5} />
      {children}
    </Canvas>
  );
};

export default ThreeCanvas;
