import { CoinWithImage } from "../threeFiber/coinWithImage";
import { LookAtMouse } from "../threeFiber/reusable/lookAtMouse";
import ThreeCanvas from "../threeFiber/threeCanvas";

interface CiruclarPhotoDisplayProps {
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
