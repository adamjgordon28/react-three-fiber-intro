import "./App.css";

import { Canvas, useFrame, useThree, extend } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
extend({ OrbitControls });

const Orbit = () => {
  const { camera, gl } = useThree();
  return <orbitControls args={[camera, gl.domElement]} />;
};

const Box = (props) => {
  const ref = useRef();
  useFrame((state) => {
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.01;
  });
  return (
    <mesh ref={ref} {...props}>
      <boxGeometry />
      <meshBasicMaterial color="blue" />
    </mesh>
  );
};
function App() {
  // const count = 1; // this number point across one axis will generate 10.00 points where the count is only 100 because it is multiply
  // const sep = 3; // is the distance from each point
  // let positions = useMemo(() => {
  //   let positions = [];
  //   for (let xi = 0; xi < count; xi++) {
  //     for (let zi = 0; zi < count; zi++) {
  //       let x = sep * (xi - count / 2);
  //       let z = sep * (zi - count / 2);
  //       let y = 0;
  //       positions.push(x, y, z);
  //     }
  //   }
  //   console.log("useMemo", { positions });
  //   return new Float32Array(positions); //is an array corresponding to the buffer
  // }, [count, sep]); //this is made into a 1d array because the bufferAtribute cannot use a 2d array so the position array will be like [x1,y1,z1,x2,y2,z2,x....]

  // console.log({ positions });

  const pointsLocations = [
    [0, 0, 0],
    [1, 1, 1],
    [2, 2, -1],
    [0.5, 2, -1],
  ];
  const pointsCount = pointsLocations.length;

  const pointsLocationsFlat = pointsLocations.flat();
  console.log({ pointsLocations, pointsLocationsFlat, pointsCount });
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Canvas style={{ background: "black" }} camera={{ position: [3, 3, 3] }}>
        <Orbit />
        <axesHelper args={[5]} />
        <Box position={[-1, -1, 2]} />
        <points>
          <bufferGeometry attach="geometry">
            <bufferAttribute
              attach={"attributes-position"} // attribute parameter to be controlled
              array={new Float32Array(pointsLocationsFlat)}
              count={pointsCount}
              itemSize={3} // because it is known that each axis type array will contain 3 values in 1d array
            />
          </bufferGeometry>
        </points>
      </Canvas>
    </div>
  );
}

export default App;
