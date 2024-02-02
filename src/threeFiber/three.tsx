import { Canvas } from "@react-three/fiber";
import AboutBlankText from "./aboutBlankText";

const ThreeD = () => {
  return (
    <Canvas
      orthographic
      camera={{ zoom: 50, position: [0, 0, 10], near: 0 }}
      className='bg-transparent'
    >
      <ambientLight intensity={3.5} />
      <AboutBlankText />
    </Canvas>
  );
};

export default ThreeD;
