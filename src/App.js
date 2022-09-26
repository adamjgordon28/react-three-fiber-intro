import "./App.css";

import { Canvas, useFrame, useThree, extend } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as THREE from "three";
extend({ OrbitControls });

const Orbit = () => {
  const { camera, gl } = useThree();
  return <orbitControls args={[camera, gl.domElement]} />;
};

const Box = (props) => {
  const ref = useRef();
  useFrame((state) => {
    // ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.01;
  });
  return (
    <mesh
      ref={ref}
      {...props}
      castShadow
      // receiveShadow
    >
      <boxGeometry />
      <meshPhysicalMaterial
        color="white"
        // fog // determines whether item is hidden by fog
        opacity={1} // defaults to 0
        transparent // defaults to false but makes opacity active
        // visible // defaults to true
        // wireframe={false} // appears as a wireframe of shape's geometry
        // metalness={0} // metal-like surfaces should be 1
        roughness={0} // smooth and shiny vs rough and un-reflective
        clearcoat={1} // makes even shinier
        transmission={1} // Degree of transmission (or optical transparency), from 0.0 to 1.0. Default is 0.0. Thin, transparent or semitransparent, plastic or glass materials remain largely reflective even if they are fully transmissive. The transmission property can be used to model these materials. When transmission is non-zero, opacity should be set to 0.
        reflectivity={0.5} // Degree of reflectivity, from 0.0 to 1.0. Default is 0.5, which corresponds to an index-of-refraction of 1.5. This models the reflectivity of non-metallic materials. It has no effect when metalness is 1.0
        side={THREE.DoubleSide}
      />
    </mesh>
  );
};

const Floor = (props) => {
  return (
    <mesh {...props} receiveShadow>
      <boxGeometry args={[20, 1, 10]} />
      <meshPhysicalMaterial />
    </mesh>
  );
};

const Bulb = (props) => {
  return (
    <mesh {...props}>
      <pointLight castShadow />
      <sphereGeometry args={[0.2, 20, 10]} />
      <meshPhongMaterial emissive="yellow" />
    </mesh>
  );
};

function App() {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Canvas
        shadows
        style={{ background: "black" }}
        camera={{ position: [1, 5, 1] }}
      >
        {/* <fog attach="fog" color="white" near={1} far={10} /> */}
        <ambientLight intensity={0.2} />

        <Bulb position={[0, 3, 0]} />
        <Orbit />
        <axesHelper args={[5]} />
        <Box position={[0, 1, 0]} />
        <Floor position={[0, -0.5, 0]} />
      </Canvas>
    </div>
  );
}

export default App;
