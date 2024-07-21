import { CoinWithImage } from "../threeFiber/coinWithImage";
import { LookAtMouse } from "../threeFiber/reusable/lookAtMouse";
import { RotateOnClick } from "../threeFiber/reusable/rotateOnClick";
import ThreeCanvas from "../threeFiber/threeCanvas";

interface CiruclarPhotoDisplayProps {
  photoUrl: string;
}

export const CircularPhotoDisplay = ({
  photoUrl,
}: CiruclarPhotoDisplayProps) => {
  return (
    <ThreeCanvas>
      <RotateOnClick rotationTime={0.4}>
        <LookAtMouse>
          <CoinWithImage imageUrl={photoUrl} />
        </LookAtMouse>
      </RotateOnClick>
    </ThreeCanvas>
  );
};
