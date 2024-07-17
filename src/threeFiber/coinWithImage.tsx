import { a, useSpring, useTransition } from "@react-spring/three";
import { useTexture } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { DoubleSide, Group, Mesh, Texture, Vector3 } from "three";
import { useTheme } from "../contexts/themeContext";

interface CoinWithImageProps {
  imageUrl: string;
}

const TimeBetweenTransitionsMS = 1200;
export const CoinWithImage = ({
  imageUrl,
}: CoinWithImageProps): React.ReactNode => {
  const theme = useTheme();
  const texture: Texture = useTexture(imageUrl);
  const meshRef = useRef<Group>(null!);
  const [hovered, setHovered] = useState(false);
  const [springIndex, setSpringIndex] = useState(0);

  const springs = [
    { rotation: [0.2, 0.2, 0.2] },
    { rotation: [-0.2, -0.2, -0.2] },
    { rotation: [0.3, 0.2, 0.1] },
    { rotation: [-0.3, 0.2, 0.1] },
  ];

  const { scale, rotation } = useSpring({
    scale: hovered ? 2 : 1.5,
    rotation: hovered ? springs[springIndex].rotation : [0, 0, 0],
    config: { mass: 1, tension: 100, friction: 50 },
  });

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Add slight hover effect
      meshRef.current.position.y = hovered
        ? Math.sin(state.clock.getElapsedTime() * 2) * 0.1
        : 0;
    }
  });

  // Transition between different rotations (by changing the index)
  useEffect(() => {
    const interval = setInterval(() => {
      setSpringIndex(() => {
        const newIndex = Math.floor(Math.random() * springs.length);
        return newIndex;
      });
    }, TimeBetweenTransitionsMS);

    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures effect runs only once on mount

  return (
    <a.group
      ref={meshRef}
      scale={scale}
      rotation={rotation as any}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[1, 1, 0.1, 32, 1, true]} />
        <meshStandardMaterial
          color={theme.currentTheme == "dark" ? "gray" : "#964B00"}
        />
      </mesh>
      <mesh position={[0, 0, 0.05]}>
        <circleGeometry args={[1, 32]} />
        <meshStandardMaterial map={texture} side={DoubleSide} />
      </mesh>
    </a.group>
  );
};
