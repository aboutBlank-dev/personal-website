import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Group } from "three";

interface HoverProps {
  children: React.ReactNode;
  hoverIntensity?: number;
}

export const Hover = ({ children, hoverIntensity = 0.1 }: HoverProps) => {
  const groupRef = useRef<Group>(null!);
  const [hovered, setHovered] = useState(false);

  useFrame((state, delta) => {
    if (groupRef.current) {
      // Add hover effect
      groupRef.current.position.y = hovered
        ? 0
        : Math.sin(state.clock.getElapsedTime() * 2) * hoverIntensity;
    }
  });

  return (
    <group
      ref={groupRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {children}
    </group>
  );
};
