import { useEffect, useState } from "react";
import { useThree } from "@react-three/fiber";
import {
  Bloom,
  DepthOfField,
  EffectComposer,
  GodRays,
} from "@react-three/postprocessing";

const Effects = () => {
  const [lights, setLights] = useState(null);
  const { scene } = useThree();
  useEffect(() => {
    if (scene.lights?.length === 3) setLights(scene.lights);
  }, [scene.lights]);
  return lights ? (
    <EffectComposer>
      <DepthOfField
        focusDistance={0}
        focalLength={0.08}
        bokehScale={2}
        height={480}
      />
      {lights.map((light) => (
        <GodRays key={light.current.uuid} sun={light.current} />
      ))}
      <Bloom luminanceThreshold={1} luminanceSmoothing={0.9} height={300} />
    </EffectComposer>
  ) : null;
};

export default Effects;
