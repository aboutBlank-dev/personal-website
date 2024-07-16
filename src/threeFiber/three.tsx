import { Canvas } from "@react-three/fiber";

const ThreeCanvas = (children: React.ReactNode) => {
  return (
    <Canvas
      orthographic
      camera={{ zoom: 50, position: [0, 0, 10], near: 0 }}
      className='bg-transparent'
    >
      <directionalLight intensity={3.5} position={[0, 1, 1]} />
      {children}
    </Canvas>
  );
};

export default ThreeCanvas;
