import { Center, Text3D } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { Group } from "three";
import { useTheme } from "../contexts/themeContext";

const AboutBlankText = () => {
  const groupRef = useRef<Group>(null!);
  const theme = useTheme();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      if (groupRef.current) {
        groupRef.current.rotation.x = y - 0.5;
        groupRef.current.rotation.y = x - 0.5;
      }
    };

    window.document.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <group ref={groupRef}>
      <Center>
        <Text3D font={"/Black Ops One_Regular.json"}>
          [about:Blank]
          <meshStandardMaterial
            attach='material'
            color={theme.currentTheme == "dark" ? "#ffffff" : "#964B00"}
          />
        </Text3D>
      </Center>
    </group>
  );
  return;
};

export default AboutBlankText;
