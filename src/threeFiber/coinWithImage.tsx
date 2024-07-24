import { a } from "@react-spring/three";
import { useTexture } from "@react-three/drei";
import { useRef } from "react";
import { DoubleSide, Group, Texture } from "three";
import { useTheme } from "../hooks/useTheme";

interface CoinWithImageProps {
  imageUrl: string;
}

export const CoinWithImage = ({
  imageUrl,
}: CoinWithImageProps): React.ReactNode => {
  const theme = useTheme();
  const texture: Texture = useTexture(imageUrl);
  const meshRef = useRef<Group>(null!);

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
