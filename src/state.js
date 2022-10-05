import * as THREE from "three";

const state = {
  activeMesh: null,
  cameraPos: new THREE.Vector3(7, 7, 7),
  shouldUpdate: true,
  target: new THREE.Vector3(4, 0, 0),
};

export default state;
