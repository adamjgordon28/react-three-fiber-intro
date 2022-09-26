import * as THREE from "three";

const ColorPicker = () => {
  const handleClick = (e) => {
    if (!window.activeMesh) return;
    window.activeMesh.material.color = new THREE.Color(
      e.target.style.background
    );
  };
  return (
    <div style={{ position: "absolute", zIndex: 1 }}>
      <div
        onClick={handleClick}
        style={{ background: "blue", height: 50, width: 50 }}
      />
      <div
        onClick={handleClick}
        style={{ background: "purple", height: 50, width: 50 }}
      />
      <div
        onClick={handleClick}
        style={{ background: "yellow", height: 50, width: 50 }}
      />
      <div
        onClick={handleClick}
        style={{ background: "white", height: 50, width: 50 }}
      />
    </div>
  );
};

export default ColorPicker;
