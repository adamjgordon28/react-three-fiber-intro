import React from "react";
import { useSphere } from "@react-three/cannon";

const Bulb = (props) => {
  const [ref, api] = useSphere(() => ({ mass: 1, ...props }));
  return (
    <mesh {...props} ref={ref} api={api}>
      <pointLight castShadow />
      <sphereGeometry args={[0.2, 20, 10]} />
      <meshPhongMaterial emissive="yellow" />
    </mesh>
  );
};

export default Bulb;
