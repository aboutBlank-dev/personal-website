import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { Box3, Group } from "three";

const AboutBlankText = () => {
  const { scene } = useGLTF("/output.gltf");
  const [xPosition, setXPosition] = useState(0);
  const groupRef = useRef<Group>(null!);

  useEffect(() => {
    const box = new Box3().setFromObject(scene);
    const width = box.max.x - box.min.x;
    setXPosition(-0.5 * width);
  }, []);

  const rotationSpeed = 0.1;
  let rotationDirection = 1;
  useFrame((state, delta, xrFrame) => {
    groupRef.current.rotation.y += delta * rotationSpeed * rotationDirection;
    groupRef.current.rotation.x += delta * rotationSpeed * rotationDirection;
    groupRef.current.rotation.z +=
      ((delta * rotationSpeed) / 10) * rotationDirection;

    if (groupRef.current.rotation.y > Math.PI / 6) {
      rotationDirection = -1;
    } else if (groupRef.current.rotation.y < -(Math.PI / 6)) {
      rotationDirection = 1;
    }
  });

  if (!scene) return null;
  return (
    <group
      ref={groupRef}
      onPointerEnter={() => {
        if (groupRef.current) {
          groupRef.current.rotation.x = 0;
          groupRef.current.rotation.y = 0;
          groupRef.current.rotation.z = 0;
        }
      }}
    >
      <primitive object={scene} scale={0.025} position={[xPosition, 0, 0]} />
    </group>
  );
  return;
};

export default AboutBlankText;
