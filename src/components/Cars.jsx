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
            path={process.env.PUBLIC_URL + "/tesla_model_sciv/scene.gltf"}
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
          <Model path={process.env.PUBLIC_URL + "/tesla_model_x/scene.gltf"} />
        </BoundingBox>
      </Dragable>
      <BoundingBox position={[12, 8, 0]}>
        <group rotation={[0, Math.PI / 2, 0]}>
          <Model
            path={process.env.PUBLIC_URL + "/robot_playground/scene.gltf"}
          />
        </group>
      </BoundingBox>
    </Suspense>
  );
};

export default Cars;
