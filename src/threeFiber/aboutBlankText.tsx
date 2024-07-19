import { Center, Text3D } from "@react-three/drei";
import { useTheme } from "../contexts/themeContext";

const AboutBlankText = () => {
  const theme = useTheme();

  return (
    <Center>
      <Text3D font={"/Black Ops One_Regular.json"}>
        [about:Blank]
        <meshStandardMaterial
          attach='material'
          color={theme.currentTheme == "dark" ? "#ffffff" : "#964B00"}
        />
      </Text3D>
    </Center>
  );
  return;
};

export default AboutBlankText;
