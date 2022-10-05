import React from "react";
import { useSphere } from "@react-three/cannon";

const Bulb = (props) => {
  const [ref, api] = useSphere(() => ({ mass: 0, ...props }));
  return (
    <mesh {...props} ref={ref} api={api}>
      <pointLight
        castShadow
        shadow-mapSize-height={2 ** 10}
        shadow-mapSize-width={2 ** 10}
        shadow-radius={10}
      />
      <sphereGeometry args={[0.2, 20, 10]} />
      <meshPhongMaterial emissive="yellow" />
    </mesh>
  );
};

export default Bulb;
