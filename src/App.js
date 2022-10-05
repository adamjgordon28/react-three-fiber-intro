import "./App.css";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/cannon";

import Background from "./components/Background";

// import Box from "./components/Box";
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
        <Suspense fallback={null}>
          <Background />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
