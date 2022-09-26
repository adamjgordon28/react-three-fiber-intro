import { useLoader } from "@react-three/fiber";
import * as THREE from "three";

const Background = (props) => {
  // const texture = useLoader(THREE.TextureLoader, "/nicolascage.jpeg");
  const texture = useLoader(THREE.TextureLoader, "/autoshop.jpeg");

  texture.encoding = THREE.sRGBEncoding;
  texture.mapping = THREE.EquirectangularReflectionMapping;

  // wasn't working
  // const { gl } = useThree();
  // const formatted = new THREE.WebGLCubeRenderTarget(
  //   texture.image.height
  // ).fromEquirectangularTexture(gl, texture);

  // console.log({ formatted });

  return <primitive attach="background" object={texture} />;
};

export default Background;
