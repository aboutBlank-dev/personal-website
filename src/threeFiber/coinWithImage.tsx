import { a, useSpring } from "@react-spring/three";
import { useTexture } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import { DoubleSide, Group, Mesh, Texture, Vector3 } from "three";
import { useTheme } from "../contexts/themeContext";

interface CoinWithImageProps {
  imageUrl: string;
}

const TimeBetweenTransitionsMS = 2000;
export const CoinWithImage = ({
  imageUrl,
}: CoinWithImageProps): React.ReactNode => {
  const theme = useTheme();
  const texture: Texture = useTexture(imageUrl);
  const meshRef = useRef<Group>(null!);
  const [springIndex, setSpringIndex] = useState(0);

  const springs = [
    { rotation: [0.2, 0.2, 0.2] },
    { rotation: [-0.2, -0.2, -0.2] },
    { rotation: [0.3, 0.2, 0.1] },
    { rotation: [-0.3, 0.2, 0.1] },
  ];

  // Transition between different rotations (by changing the index)
  useEffect(() => {
    const interval = setInterval(() => {
      setSpringIndex(() => {
        const newIndex = Math.floor(Math.random() * springs.length);
        return newIndex;
      });
    }, TimeBetweenTransitionsMS);

    return () => clearInterval(interval);
  }, []);

  return (
    <a.group ref={meshRef}>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[2, 2, 0.5, 32, 1, true]} />
        <meshStandardMaterial
          color={theme.currentTheme == "dark" ? "gray" : "#964B00"}
        />
      </mesh>
      <mesh position={[0, 0, 0.05]}>
        <circleGeometry args={[2, 32]} />
        <meshStandardMaterial map={texture} side={DoubleSide} />
      </mesh>
    </a.group>
  );
};
