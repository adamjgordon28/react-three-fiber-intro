import React from "react";
import { useBox } from "@react-three/cannon";
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";

const Box = (props) => {
  const [ref, api] = useBox(() => ({ mass: 1, ...props }));
  const texture = useLoader(THREE.TextureLoader, "/wood.jpeg");
  // const texture = useLoader(THREE.TextureLoader, "/nicolascage.jpeg");

  const handlePointerDown = (e) => {
    e.object.active = true;
    if (window.activeMesh) {
      window.activeMesh.active = false;
      scaleDown(window.activeMesh);
    }
    window.activeMesh = e.object;
  };
  const handlePointerEnter = (e) => {
    e.object.scale.x = 1.5;
    e.object.scale.y = 1.5;
    e.object.scale.z = 1.5;
  };
  const handlePointerLeave = (e) => {
    if (!e.object.active) {
      scaleDown(e.object);
    }
  };

  const scaleDown = (object) => {
    object.scale.x = 1;
    object.scale.y = 1;
    object.scale.z = 1;
  };

  return (
    <mesh
      ref={ref}
      {...props}
      api={api}
      castShadow
      onPointerDown={handlePointerDown}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
    >
      <boxGeometry args={[1, 1, 1]} />
      {/* <sphereGeometry args={[1, 100, 100]} /> */}
      <meshPhysicalMaterial map={texture} />
    </mesh>
  );
};
export default Box;
