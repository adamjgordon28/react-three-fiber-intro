import "./App.css";

import {
  Canvas,
  useFrame,
  useThree,
  extend,
  useLoader,
} from "@react-three/fiber";
import { useRef, Suspense } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as THREE from "three";
extend({ OrbitControls });

const Orbit = () => {
  const { camera, gl } = useThree();
  return <orbitControls args={[camera, gl.domElement]} />;
};

const Box = (props) => {
  const ref = useRef();
  const texture = useLoader(THREE.TextureLoader, "/wood.jpeg");
  useFrame((state) => {
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.01;
  });
  return (
    <mesh
      ref={ref}
      {...props}
      castShadow
      // receiveShadow
    >
      {/* <boxGeometry /> */}
      <sphereGeometry args={[1, 100, 100]} />
      <meshPhysicalMaterial map={texture} />
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

const Background = (props) => {
  // const { gl } = useThree();
  const texture = useLoader(THREE.TextureLoader, "/aquaduct.jpeg");

  texture.encoding = THREE.sRGBEncoding;
  texture.mapping = THREE.EquirectangularReflectionMapping;

  // wasn't working
  // const formatted = new THREE.WebGLCubeRenderTarget(
  //   texture.image.height
  // ).fromEquirectangularTexture(gl, texture);

  // console.log({ formatted });

  return <primitive attach="background" object={texture} />;
};

function App() {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Canvas
        shadows
        style={{ background: "black" }}
        camera={{ position: [3, 3, 3] }}
      >
        {/* <fog attach="fog" color="white" near={1} far={10} /> */}
        <ambientLight intensity={0.2} />

        <Bulb position={[0, 3, 0]} />
        <Orbit />
        <axesHelper args={[5]} />
        <Suspense fallback={null}>
          <Box position={[0, 1, 0]} />
        </Suspense>

        <Floor position={[0, -0.5, 0]} />
        <Suspense fallback={null}>
          <Background />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
