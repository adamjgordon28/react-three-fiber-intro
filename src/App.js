import "./App.css";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/cannon";

import Background from "./components/Background";
import Box from "./components/Box";
import Bulb from "./components/Bulb";
import ColorPicker from "./components/ColorPicker";
import Dragable from "./components/Dragable";
import Floor from "./components/Floor";
import Model from "./components/Model";
import Orbit from "./components/Orbit";

function App() {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <ColorPicker />
      <Canvas
        shadows
        style={{ background: "black" }}
        camera={{ position: [3, 3, 3] }}
      >
        {/* <fog attach="fog" color="white" near={1} far={10} /> */}
        <ambientLight intensity={0.2} />
        <Orbit />
        <axesHelper args={[5]} />
        <Physics>
          <Dragable>
            <Bulb position={[0, 3, 0]} />
            <Suspense fallback={null}>
              <Model
                path="/tesla_model_sciv/scene.gltf"
                position={[2, 0.15, 0]}
                scale={new Array(3).fill(0.01)}
              />
              <Model
                path="/tesla_model_x/scene.gltf"
                position={[-2, 0.85, 0]}
                // scale={new Array(3).fill(0.01)}
              />
            </Suspense>
          </Dragable>
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
