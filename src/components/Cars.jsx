import { Suspense } from "react";
import BoundingBox from "./BoundingBox";
import Dragable from "./Dragable";
import Model from "./Model";

const Cars = () => {
  return (
    <Suspense fallback={null}>
      <Dragable transformGroup>
        <BoundingBox
          //   visible
          position={[7, 8, 0]}
          dims={[2.25, 1.75, 5.5]}
          offset={[0.125, -0.75, 0.25]}
        >
          <Model
            path="/tesla_model_sciv/scene.gltf"
            scale={new Array(3).fill(0.01)}
          />
        </BoundingBox>
      </Dragable>
      <Dragable transformGroup>
        <BoundingBox
          // visible
          position={[1, 8, 0]}
          dims={[3, 2, 6]}
        >
          <Model path="/tesla_model_x/scene.gltf" />
        </BoundingBox>
      </Dragable>
    </Suspense>
  );
};

export default Cars;
