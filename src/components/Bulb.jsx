import React, { useEffect } from "react";
import { useSphere } from "@react-three/cannon";
import { useThree } from "@react-three/fiber";

const Bulb = (props) => {
  const [ref, api] = useSphere(() => ({ mass: 0, ...props }));
  const { scene } = useThree();
  useEffect(() => {
    if (scene.lights) scene.lights.push(ref);
    else scene.lights = [ref];
  }, []);
  return (
    <mesh {...props} ref={ref} api={api}>
      <pointLight
        castShadow
        shadow-mapSize-height={2 ** 10}
        shadow-mapSize-width={2 ** 10}
        shadow-radius={10}
      />
      <sphereGeometry args={[0.2, 20, 10]} />
      <meshPhongMaterial emissive="white" />
    </mesh>
  );
};

export default Bulb;
