import "./App.css";

import { Suspense } from "react";
import { Physics } from "@react-three/cannon";
import { Canvas } from "@react-three/fiber";
import {
  Bloom,
  DepthOfField,
  EffectComposer,
} from "@react-three/postprocessing";

import Background from "./components/Background";
import CameraButtons from "./components/CameraButtons";
import CameraControls from "./components/CameraControls";
import Cars from "./components/Cars";
import ColorPicker from "./components/ColorPicker";
import Floor from "./components/Floor";
import Lights from "./components/Lights";
import Orbit from "./components/Orbit";

function App() {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <ColorPicker />
      <CameraButtons />
      <Canvas
        shadows
        style={{ background: "black" }}
        camera={{ position: [3, 3, 3] }}
      >
        <CameraControls />
        {/* <fog attach="fog" color="white" near={1} far={10} /> */}
        <Lights />
        <Orbit />
        <axesHelper args={[5]} />
        <Physics>
          <Cars />
          <Floor position={[4, -0.5, 0]} />
        </Physics>
        <EffectComposer>
          <DepthOfField
            focusDistance={0}
            focalLength={0.02}
            bokehScale={2}
            height={480}
          />
          <Bloom luminanceThreshold={1} luminanceSmoothing={0.9} height={300} />
        </EffectComposer>
        <Suspense fallback={null}>
          <Background />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
