import { Canvas } from "@react-three/fiber";

interface ThreeCanvasProps {
  children: React.ReactNode;
}

const ThreeCanvas: React.FC<ThreeCanvasProps> = ({ children }) => {
  return (
    <Canvas
      orthographic
      camera={{ zoom: 50, position: [0, 0, 10], near: 0 }}
      className='bg-transparent'
    >
      <ambientLight intensity={4} />
      {children}
    </Canvas>
  );
};

export default ThreeCanvas;
