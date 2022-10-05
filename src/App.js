import "./App.css";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/cannon";

import Background from "./components/Background";

// import Box from "./components/Box";
import Bulb from "./components/Bulb";
import CameraButtons from "./components/CameraButtons";
import CameraControls from "./components/CameraControls";
import Cars from "./components/Cars";
import ColorPicker from "./components/ColorPicker";
import Floor from "./components/Floor";
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
        <ambientLight intensity={0.2} />
        <directionalLight
          castShadow
          intensity={2}
          position={[6, 3, 0]}
          shadow-mapSize-height={2 ** 10}
          shadow-mapSize-width={2 ** 10}
          shadow-radius={10}
        />
        <Orbit />
        <axesHelper args={[5]} />

        <Physics>
          <Bulb position={[-2, 3, 0]} />
          <Bulb position={[4, 3, 0]} />
          <Bulb position={[10, 3, 0]} />
          <Cars />
          <Floor position={[4, -0.5, 0]} />
        </Physics>
        <Suspense fallback={null}>
          <Background />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
