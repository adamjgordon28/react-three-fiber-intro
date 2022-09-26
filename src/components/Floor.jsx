import { useBox } from "@react-three/cannon";

const Floor = (props) => {
  const [ref, api] = useBox(() => ({ args: [20, 1, 20], ...props }));
  return (
    <mesh ref={ref} {...props} receiveShadow>
      <boxGeometry args={[20, 1, 10]} />
      <meshPhysicalMaterial />
    </mesh>
  );
};

export default Floor;
