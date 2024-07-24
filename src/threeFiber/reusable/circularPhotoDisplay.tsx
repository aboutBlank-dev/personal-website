import { CoinWithImage } from "../coinWithImage";
import ThreeCanvas from "../threeCanvas";
import { LookAtMouse } from "./lookAtMouse";

interface CiruclarPhotoDisplayProps {
  //photoUrl with type of path
  photoUrl: string;
}

export const CircularPhotoDisplay = ({
  photoUrl,
}: CiruclarPhotoDisplayProps) => {
  return (
    <ThreeCanvas>
      <LookAtMouse stopWhenHovered={true}>
        <CoinWithImage imageUrl={photoUrl} />
      </LookAtMouse>
    </ThreeCanvas>
  );
};
