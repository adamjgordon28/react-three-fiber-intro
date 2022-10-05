import state from "../state";

const style = {
  zIndex: 1,
  position: "absolute",
  bottom: "30vh",
  height: "30px",
  width: "30px",
  background: "white",
  textAlign: "center",
  borderRadius: "100%",
  fontSize: 20,
  fontWeight: "bold",
  opactiy: 0.7,
  border: "1px solid black",
};

const CameraButtons = () => {
  const sets = {
    1: {
      cameraPos: [10, 2, 3],
      name: "object005_bod_0",
      target: [7, 0, 0],
    },
    2: {
      cameraPos: [4, 2, 3],
      name: "Object_47",
      target: [1, 0, 0],
    },
  };
  const handleClick = (num) => {
    state.cameraPos.set(...sets[num].cameraPos);
    state.target.set(...sets[num].target);
    state.activeMeshName = sets[num].name;
    state.shouldUpdate = true;
  };
  return (
    <>
      <button
        onClick={(e) => handleClick(2)}
        style={{
          left: "40vw",
          ...style,
        }}
      >
        {"<"}
      </button>
      <button
        onClick={(e) => handleClick(1)}
        style={{
          right: "40vw",
          ...style,
        }}
      >
        {">"}
      </button>
    </>
  );
};

export default CameraButtons;
