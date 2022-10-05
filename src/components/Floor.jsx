import { useBox } from "@react-three/cannon";

const Floor = (props) => {
  const [ref, api] = useBox(() => ({ args: [20, 1, 20], ...props }));
  return (
    <mesh ref={ref} {...props} receiveShadow>
      <boxGeometry args={[200, 1, 200]} />
      {/* <shadowMaterial opacity={0.2} /> */}
      <meshPhysicalMaterial transparent opacity={0.8} />
    </mesh>
  );
};

export default Floor;
