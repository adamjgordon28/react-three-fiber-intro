import React from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import * as THREE from "three";

const Model = (props) => {
  const model = useLoader(GLTFLoader, props.path);
  return (
    <primitive
      object={model.scene}
      {...props}
      //   scale={new Array(3).fill(0.01)}
    />
  );
};

export default Model;
