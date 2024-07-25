import { useEffect, useRef, useState } from "react";
import { useTheme } from "../../hooks/useTheme";
import { CoinWithImage } from "../coinWithImage";
import ThreeCanvas from "../threeCanvas";
import { LookAtMouse } from "./lookAtMouse";
import { RotateOnClick } from "./rotateOnClick";
import { Tooltip } from "react-tooltip";
import { Group, Object3DEventMap } from "three";

interface CiruclarPhotoDisplayProps
  extends React.HTMLAttributes<HTMLDivElement> {
  photoUrl: string;
}

export const CircularPhotoDisplay = ({
  photoUrl,
  ...props
}: CiruclarPhotoDisplayProps) => {
  const [rotating, setRotating] = useState(false);
  const [hovered, setHovered] = useState(false);
  const theme = useTheme();

  const handleRotation = (started: boolean) => {
    if (started) {
      theme.toggleTheme();
      setRotating(true);
    } else {
      setRotating(false);
    }
  };

  // Change cursor on hover
  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "default";
  }, [hovered]);

  return (
    <div {...props}>
      <ThreeCanvas className='bg-transparent select-none'>
        <RotateOnClick
          rotationTime={0.3}
          onRotationStarted={() => handleRotation(true)}
          onRotationEnded={() => handleRotation(false)}
        >
          <LookAtMouse enabled={!rotating}>
            <CoinWithImage
              imageUrl={photoUrl}
              onPointerOver={() => setHovered(true)}
              onPointerOut={() => setHovered(false)}
            />
          </LookAtMouse>
        </RotateOnClick>
      </ThreeCanvas>
    </div>
  );
};
