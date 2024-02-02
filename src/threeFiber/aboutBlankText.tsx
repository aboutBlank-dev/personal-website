import { Center, Text3D } from "@react-three/drei";
import { useContext, useEffect, useRef } from "react";
import { Group } from "three";
import { DarkModeContext } from "../contexts/darkModeContext";

const AboutBlankText = () => {
  const groupRef = useRef<Group>(null!);
  const { isDarkMode } = useContext(DarkModeContext);

  useEffect(() => {
    window.document.addEventListener("mousemove", (e) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      if (groupRef.current) {
        groupRef.current.rotation.x = y - 0.5;
        groupRef.current.rotation.y = x - 0.5;
      }
    });
  }, []);

  return (
    <group ref={groupRef}>
      <Center>
        <Text3D font={"/Black Ops One_Regular.json"}>
          about:Blank
          <meshStandardMaterial
            attach='material'
            color={isDarkMode ? "#ffffff" : "#964B00"}
          />
        </Text3D>
      </Center>
    </group>
  );
  return;
};

export default AboutBlankText;
