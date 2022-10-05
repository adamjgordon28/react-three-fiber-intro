import { Physics } from "@react-three/cannon";
import Bulb from "./Bulb";

const Lights = () => {
  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight
        castShadow
        intensity={2}
        position={[6, 3, 0]}
        shadow-mapSize-height={2 ** 10}
        shadow-mapSize-width={2 ** 10}
        shadow-radius={10}
      />
      <Physics>
        <Bulb position={[-2, 3, 0]} />
        <Bulb position={[4, 3, 0]} />
        <Bulb position={[10, 3, 0]} />
      </Physics>
    </>
  );
};

export default Lights;
