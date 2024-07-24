import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Group } from "three";

interface RotateOnClickProps {
  children: React.ReactNode;
  rotationTime?: number;
}

export const RotateOnClick = ({
  children,
  rotationTime = 1,
}: RotateOnClickProps): React.ReactNode => {
  const groupRef = useRef<Group>(null!);
  const [rotate, setRotate] = useState(false);
  const [rotationAmount, setRotationAmount] = useState(0);

  // Detect click on the object
  const handlePointerDown = () => {
    setRotate(true);
    setRotationAmount(0);
  };

  // Rotate the object
  useFrame((_, delta) => {
    if (rotate && groupRef.current) {
      const rotationSpeed = (Math.PI * 2) / rotationTime; // Calculate rotation speed based on rotation time
      const newRotationAmount = rotationAmount + rotationSpeed * delta;

      if (newRotationAmount >= Math.PI * 2) {
        setRotate(false);
        groupRef.current.rotation.y = Math.PI * 2 - rotationAmount; // Complete the rotation
        setRotationAmount(0);
      } else {
        groupRef.current.rotation.y += rotationSpeed * delta;
        setRotationAmount(newRotationAmount);
      }
    }
  });

  return (
    <group
      ref={groupRef}
      onPointerDown={handlePointerDown}
      rotation={rotate ? groupRef.current.rotation : [0, 0, 0]}
    >
      {children}
    </group>
  );
};
