import { useFrame, useThree } from "@react-three/fiber";
import { RefObject, useEffect, useRef, useState } from "react";
import { Group, Mesh, Vector2, Vector3 } from "three";

const useLookAtMouse = (
  objectRef: RefObject<Mesh> | RefObject<Group>,
  enabled: boolean = true
) => {
  const mouse = useRef(new Vector2());
  const target = useRef(new Vector3());

  const { gl } = useThree();
  const canvas = gl.domElement;

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (canvas) {
        const rect = canvas.getBoundingClientRect();
        // Normalized mouse coordinates relative to canvas
        mouse.current.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        mouse.current.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  });

  useFrame((state) => {
    if (!enabled || !objectRef.current) return;

    const { camera } = state;

    // Convert normalized mouse coordinates to 3D world coordinates
    const vector = new Vector3(mouse.current.x, mouse.current.y, 0.5).unproject(
      camera
    );

    vector.sub(camera.position).normalize();
    const distance = -camera.position.z / vector.z;
    target.current.copy(camera.position).add(vector.multiplyScalar(distance));
    target.current.z = 0.4;

    // Make the object look at the target position
    objectRef.current.lookAt(target.current);
  });

  if (!enabled) {
    objectRef.current?.lookAt(0, 0, 0);
  }
};

interface LookAtMouseProps {
  children: React.ReactNode;
  stopWhenHovered?: boolean;
}

export const LookAtMouse = ({
  children,
  stopWhenHovered = true,
}: LookAtMouseProps) => {
  const groupRef = useRef<Group>(null!);
  const [enabled, setEnabled] = useState(true);

  useLookAtMouse(groupRef, enabled);

  const handlePointer = (over: boolean) => {
    if (!stopWhenHovered) return;
    setEnabled(!over);
  };

  return (
    <group
      ref={groupRef}
      onPointerOver={() => handlePointer(true)}
      onPointerOut={() => handlePointer(false)}
    >
      {children}
    </group>
  );
};
